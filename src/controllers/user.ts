import bcrypt from 'bcryptjs';
import z from 'zod';
import { Request, Response } from 'express';
import UserModel from '../models/user';
import EnrollmentModel from '../models/enroll';
import jwt from 'jsonwebtoken';
const JWT_SECRET = process.env.JWT_SECRET || "secret";

//@ts-ignore
export const signup = async (req: Request, res: Response) => {

    const requringSchema = z.object({
        name: z.string().min(1).max(50, { message: 'Name is required' }),
        email: z.string().email({ message: 'Email is required' }),
        password: z.string().min(4, { message: 'Password is required' }),
    });

    if (!requringSchema.safeParse(req.body).success) {
         return res.status(400).json({ message: 'Invalid input' });
    }

    try {
        const { name, email, password } = req.body;
        const existingUser = await UserModel.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        await UserModel.create({ name, email, password: hashedPassword });
        return res.status(201).json({ message: 'User created successfully' });
        
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal server error' });
        
    }
}


export const signin = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;
        const user = await UserModel.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'User not found' });
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return res.status(400).json({ message: 'Invalid password' });
        }

        const token = jwt.sign ({
            id : user._id,
        } , JWT_SECRET)

        return res.status(200).json({ token });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}

export const getProfile = async (req: Request, res: Response) => {
    try {
        const userId = req.userId;
        const user = await UserModel.findById(userId).select('-password');
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        return res.status(200).json(user);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}

export const updateProfile = async (req: Request, res: Response) => {
    try {
        const userId = req.userId;
        const { name, email } = req.body;
        const user = await UserModel.findByIdAndUpdate(userId, { name, email }, { new: true }).select('-password');
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        return res.status(200).json(user);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}


export const getPurchases = async (req: Request, res: Response) => {
    try {
        const userId = req.userId;
        const purchases = await EnrollmentModel.find({ user: userId }).populate('course');
        return res.status(200).json(purchases);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}


export const purchaseCourse = async (req: Request, res: Response) => {
    try {
        const userId = req.userId;
        const { courseId } = req.body;
        const existingEnrollment = await EnrollmentModel.findOne({ user: userId, course: courseId });
        if (existingEnrollment) {
            return res.status(400).json({ message: 'Course already purchased' });
        }
        const enrollment = await EnrollmentModel.create({ user: userId, course: courseId });
        return res.status(201).json({ message: 'Course purchased successfully', enrollment });
        
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal server error' });
        
    }
}