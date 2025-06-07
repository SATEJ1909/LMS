"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("../controllers/user");
const user_2 = require("../middleware/user");
const express_1 = require("express");
const UserRouter = (0, express_1.Router)();
//@ts-ignore
UserRouter.post("/signup", user_1.signup);
// @ts-ignore
UserRouter.post("/signin", user_1.signin);
// @ts-ignore
UserRouter.get("/profile", user_2.userMiddleware, user_1.getProfile);
// @ts-ignore
UserRouter.put("/profile", user_2.userMiddleware, user_1.updateProfile);
// @ts-ignore
UserRouter.post("/purchase", user_2.userMiddleware, user_1.purchaseCourse);
// @ts-ignore
UserRouter.get("/purchases", user_2.userMiddleware, user_1.getPurchases);
exports.default = UserRouter;
