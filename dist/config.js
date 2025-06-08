"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JWT_ADMIN_SECRET = exports.JWT_SECRET = void 0;
exports.JWT_SECRET = process.env.JWT_SECRET || "secret";
exports.JWT_ADMIN_SECRET = process.env.JWT_ADMIN_SECRET || "secret";
