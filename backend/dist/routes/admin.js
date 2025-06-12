"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const admin_1 = require("../controllers/admin");
const admin_2 = require("../middleware/admin");
const express_1 = require("express");
const AdminRouter = (0, express_1.Router)();
//@ts-ignore
AdminRouter.post("/signup", admin_1.signup);
//@ts-ignore
AdminRouter.post("/signin", admin_1.signin);
//@ts-ignore
AdminRouter.post("/createCourse", admin_2.adminMiddleware, admin_1.createCourse);
//@ts-ignore 
AdminRouter.put("/updateCourse", admin_2.adminMiddleware, admin_1.updateCourse);
//@ts-ignore
AdminRouter.get("/dashboard", admin_2.adminMiddleware, admin_1.getAdminDashboard);
//@ts-ignore
AdminRouter.get("/course/:id", admin_2.adminMiddleware, admin_1.getCourseById);
//@ts-ignore
AdminRouter.get("/courses", admin_2.adminMiddleware, admin_1.getCourses);
//@ts-ignore
AdminRouter.get("/profile", admin_2.adminMiddleware, admin_1.getAdminProfile);
exports.default = AdminRouter;
