import { NextFunction, Request, Response } from 'express';
import { JWT_SECRET } from '../config';
import jwt from 'jsonwebtoken';


export const userMiddleware = (req: Request, res: Response, next: NextFunction) => {   
    try {
        const token = req.headers.token as string;
        const decoded = jwt.verify(token, JWT_SECRET) as { id: string };

        if(decoded){
            req.userId = decoded.id;
            next();
        }else{
            return res.status(401).json({ message: 'Unauthorized' });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal server error' });
        
    }
}