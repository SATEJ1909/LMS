"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("../controllers/user");
const express_1 = require("express");
const UserRouter = (0, express_1.Router)();
//@ts-ignore
UserRouter.post("/signup", user_1.signup);
exports.default = UserRouter;
