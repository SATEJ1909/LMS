import z from 'zod';
import { Request, Response } from 'express';
import AdminModel from '../models/admin';
import CourseModel from '../models/course';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { JWT_ADMIN_SECRET } from '../config';

export const signup = async (req : Request, res : Response) => {
    const requringSchema = z.object({
        name: z.string().min(1).max(50, { message: 'Name is required' }),
        email: z.string().email({ message: 'Email is required' }),
        password: z.string().min(4, { message: 'Password is required' }),
    });

    if (!requringSchema.safeParse(req.body).success) {
         res.status(400).json({ message: 'Invalid input' });
    }

    try {
        const { name, email, password } = req.body;
        const existingUser = await AdminModel.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        await AdminModel.create({ name, email, password: hashedPassword });
        return res.status(201).json({ message: 'Admin created successfully' });
        
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal server error' });
        
    }
}

export const signin = async (req : Request, res : Response) => {
    try {
        const { email, password } = req.body;
        const user = await AdminModel.findOne({ email });
        if (!user) {    
            return res.status(400).json({ message: 'User not found' });
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return res.status(400).json({ message: 'Invalid password' });
        }
        const token = jwt.sign ({
            id : user._id,
        },JWT_ADMIN_SECRET)

        return res.status(200).json({ token }); 

    } catch (error) {   
        console.error(error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}

export const createCourse = async (req : Request, res: Response) => {
    try {
        const { title, description, thumbnail, price, content } = req.body;
        if( !title || !price || !content || content.length === 0) {
            return res.status(400).json({ message: 'Title, price, and content are required' });
        }
        const course = await CourseModel.create({
            title,
            description,    
            thumbnail,
            price,
            content,
            createdBy: req.adminId, 
        });
        return res.status(201).json({ message: 'Course created successfully', course });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}

export const getCourses = async (req: Request, res: Response) => {
    try {
        const courses = await CourseModel.find().populate('createdBy', 'name email');
        return res.status(200).json(courses);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}

export const updateCourse = async (req: Request, res: Response) => {
    try {
        const { courseId } = req.params;
        const { title, description, thumbnail, price, content } = req.body;
        const course = await CourseModel.findByIdAndUpdate(
            courseId,   
            { title, description, thumbnail, price, content },
            { new: true }
        ).populate('createdBy', 'name email');  
        if (!course) {
            return res.status(404).json({ message: 'Course not found' });
        }
        return res.status(200).json({ message: 'Course updated successfully', course });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal server error' });
        
    }
}

export const deleteCourse = async(req: Request, res: Response) => {
    try {
        const  { courseId } = req.params;
        const course = await CourseModel.findByIdAndDelete(courseId);
        if (!course) {
            return res.status(404).json({ message: 'Course not found' });
        }
        return res.status(200).json({ message: 'Course deleted successfully' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal server error' });
        
    }
}

export const getCourseById = async (req: Request, res: Response) => {
    try {
        const { courseId } = req.params;
        const course = await CourseModel.findById(courseId).populate('createdBy', 'name email');
        if (!course) {
            return res.status(404).json({ message: 'Course not found' });
        }
        return res.status(200).json(course);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}

export const getAdminProfile = async (req: Request, res: Response) => {
    try {
        const admin = await AdminModel.findById(req.adminId).select('-password');
        if (!admin) {
            return res.status(404).json({ message: 'Admin not found' });
        }
        return res.status(200).json(admin);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}


export const getPurchasedCourses = async (req: Request, res: Response) => {
    try {
        const purchasedCourses = await CourseModel.find({ purchasedBy: req.adminId }).populate('createdBy', 'name email');
        if (!purchasedCourses || purchasedCourses.length === 0) {
            return res.status(404).json({ message: 'No purchased courses found' });
        }
        return res.status(200).json(purchasedCourses);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}   


export const getAdminDashboard = async (req: Request, res: Response) => {
    try {
        const totalCourses = await CourseModel.countDocuments();
        const totalAdmins = await AdminModel.countDocuments();
        const totalUsers = await AdminModel.countDocuments({ role: 'user' }); // Assuming 'user' is a role in your Admin model
        const totalRevenue = await CourseModel.aggregate([
            { $group: { _id: null, total: { $sum: '$price' } } }
        ]);

        return res.status(200).json({
            totalCourses,
            totalAdmins,
            totalUsers,
            totalRevenue: totalRevenue[0]?.total || 0
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}