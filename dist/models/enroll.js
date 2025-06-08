"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const enrollmentSchema = new mongoose_1.default.Schema({
    user: { type: mongoose_1.default.Schema.Types.ObjectId, ref: 'User' },
    course: { type: mongoose_1.default.Schema.Types.ObjectId, ref: 'Course' },
    purchasedAt: { type: Date, default: Date.now }
});
const EnrollmentModel = mongoose_1.default.model('Enrollment', enrollmentSchema);
exports.default = EnrollmentModel;
