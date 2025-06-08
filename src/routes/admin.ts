import { signup  , signin , createCourse , updateCourse , getAdminDashboard , getCourseById , getCourses , } from "../controllers/admin";
import AdminModel from "../models/admin";
import { adminMiddleware } from "../middleware/admin";
import { Router } from "express";
const AdminRouter = Router();

//@ts-ignore
AdminRouter.post("/signup" , signup);
//@ts-ignore
AdminRouter.post("/signin" , signin );
//@ts-ignore
AdminRouter.post("/createCourse" , adminMiddleware , createCourse);
//@ts-ignore 
AdminRouter.put("/updateCourse" , adminMiddleware , updateCourse);
//@ts-ignore
AdminRouter.get("/dashboard" , adminMiddleware , getAdminDashboard);
//@ts-ignore
AdminRouter.get("/course/:id" , adminMiddleware , getCourseById);
//@ts-ignore
AdminRouter.get("/courses" , adminMiddleware , getCourses);

export default AdminRouter;