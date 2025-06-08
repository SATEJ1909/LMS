import { signup , signin , getProfile , updateProfile , purchaseCourse , getPurchases  } from "../controllers/user";
import { userMiddleware } from "../middleware/user";

import { Router } from "express";
const UserRouter = Router();

//@ts-ignore
UserRouter.post("/signup", signup);
// @ts-ignore
UserRouter.post("/signin", signin);
// @ts-ignore
UserRouter.get("/profile", userMiddleware, getProfile);
// @ts-ignore
UserRouter.put("/profile", userMiddleware, updateProfile);
// @ts-ignore
UserRouter.post("/purchase", userMiddleware, purchaseCourse);
// @ts-ignore
UserRouter.get("/purchases", userMiddleware, getPurchases);


export default UserRouter;