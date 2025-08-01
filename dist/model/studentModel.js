"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createStudent = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const student = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true
    },
    grade: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
});
exports.createStudent = mongoose_1.default.model("Student", student);
