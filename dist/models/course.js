"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const courseSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    description: String,
    thumbnail: String,
    price: { type: Number, default: 0 },
    content: [
        {
            title: { type: String },
            videoUrl: { type: String },
            duration: { type: String },
        },
    ],
    createdBy: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Admin', required: true },
    createdAt: { type: Date, default: Date.now },
});
const CourseModel = (0, mongoose_1.model)('Course', courseSchema);
exports.default = CourseModel;
