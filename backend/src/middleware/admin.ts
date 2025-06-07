import { Request , Response , NextFunction } from "express";
import { JWT_ADMIN_SECRET } from "../config";
import AdminModel from "../models/admin";
import jwt from "jsonwebtoken";

export const adminMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const token = req.headers.token as string;
        const decoded = jwt.verify(token, JWT_ADMIN_SECRET) as { id: string };

        const admin = await AdminModel.findById(decoded.id);
        if (!admin || admin.role !== 'admin') {
            return res.status(401).json({ message: 'Unauthorized' });
        }

        req.adminId = decoded.id; 
        next();
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal server error' });
        
    }
}