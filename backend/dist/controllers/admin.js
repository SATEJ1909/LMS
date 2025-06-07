"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAdminDashboard = exports.getPurchasedCourses = exports.getAdminProfile = exports.getCourseById = exports.deleteCourse = exports.updateCourse = exports.getCourses = exports.createCourse = exports.signin = exports.signup = void 0;
const zod_1 = __importDefault(require("zod"));
const admin_1 = __importDefault(require("../models/admin"));
const course_1 = __importDefault(require("../models/course"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = require("../config");
const signup = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const requringSchema = zod_1.default.object({
        name: zod_1.default.string().min(1).max(50, { message: 'Name is required' }),
        email: zod_1.default.string().email({ message: 'Email is required' }),
        password: zod_1.default.string().min(4, { message: 'Password is required' }),
    });
    if (!requringSchema.safeParse(req.body).success) {
        res.status(400).json({ message: 'Invalid input' });
    }
    try {
        const { name, email, password } = req.body;
        const existingUser = yield admin_1.default.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }
        const hashedPassword = yield bcrypt_1.default.hash(password, 10);
        yield admin_1.default.create({ name, email, password: hashedPassword });
        return res.status(201).json({ message: 'User created successfully' });
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal server error' });
    }
});
exports.signup = signup;
const signin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        const user = yield admin_1.default.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'User not found' });
        }
        const isPasswordValid = yield bcrypt_1.default.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(400).json({ message: 'Invalid password' });
        }
        const token = jsonwebtoken_1.default.sign({
            id: user._id,
        }, config_1.JWT_ADMIN_SECRET);
        return res.status(200).json({ token });
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal server error' });
    }
});
exports.signin = signin;
const createCourse = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { title, description, thumbnail, price, content } = req.body;
        if (!title || !price || !content || content.length === 0) {
            return res.status(400).json({ message: 'Title, price, and content are required' });
        }
        const course = yield course_1.default.create({
            title,
            description,
            thumbnail,
            price,
            content,
            createdBy: req.adminId,
        });
        return res.status(201).json({ message: 'Course created successfully', course });
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal server error' });
    }
});
exports.createCourse = createCourse;
const getCourses = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const courses = yield course_1.default.find().populate('createdBy', 'name email');
        return res.status(200).json(courses);
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal server error' });
    }
});
exports.getCourses = getCourses;
const updateCourse = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { courseId } = req.params;
        const { title, description, thumbnail, price, content } = req.body;
        const course = yield course_1.default.findByIdAndUpdate(courseId, { title, description, thumbnail, price, content }, { new: true }).populate('createdBy', 'name email');
        if (!course) {
            return res.status(404).json({ message: 'Course not found' });
        }
        return res.status(200).json({ message: 'Course updated successfully', course });
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal server error' });
    }
});
exports.updateCourse = updateCourse;
const deleteCourse = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { courseId } = req.params;
        const course = yield course_1.default.findByIdAndDelete(courseId);
        if (!course) {
            return res.status(404).json({ message: 'Course not found' });
        }
        return res.status(200).json({ message: 'Course deleted successfully' });
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal server error' });
    }
});
exports.deleteCourse = deleteCourse;
const getCourseById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { courseId } = req.params;
        const course = yield course_1.default.findById(courseId).populate('createdBy', 'name email');
        if (!course) {
            return res.status(404).json({ message: 'Course not found' });
        }
        return res.status(200).json(course);
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal server error' });
    }
});
exports.getCourseById = getCourseById;
const getAdminProfile = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const admin = yield admin_1.default.findById(req.adminId).select('-password');
        if (!admin) {
            return res.status(404).json({ message: 'Admin not found' });
        }
        return res.status(200).json(admin);
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal server error' });
    }
});
exports.getAdminProfile = getAdminProfile;
const getPurchasedCourses = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const purchasedCourses = yield course_1.default.find({ purchasedBy: req.adminId }).populate('createdBy', 'name email');
        if (!purchasedCourses || purchasedCourses.length === 0) {
            return res.status(404).json({ message: 'No purchased courses found' });
        }
        return res.status(200).json(purchasedCourses);
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal server error' });
    }
});
exports.getPurchasedCourses = getPurchasedCourses;
const getAdminDashboard = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const totalCourses = yield course_1.default.countDocuments();
        const totalAdmins = yield admin_1.default.countDocuments();
        const totalUsers = yield admin_1.default.countDocuments({ role: 'user' }); // Assuming 'user' is a role in your Admin model
        const totalRevenue = yield course_1.default.aggregate([
            { $group: { _id: null, total: { $sum: '$price' } } }
        ]);
        return res.status(200).json({
            totalCourses,
            totalAdmins,
            totalUsers,
            totalRevenue: ((_a = totalRevenue[0]) === null || _a === void 0 ? void 0 : _a.total) || 0
        });
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal server error' });
    }
});
exports.getAdminDashboard = getAdminDashboard;
