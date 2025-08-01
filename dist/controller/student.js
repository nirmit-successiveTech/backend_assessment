"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = void 0;
const studentModel_1 = require("../model/studentModel");
const userModel_1 = require("../model/userModel");
class Student {
    constructor() {
        this.addStudent = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                console.log("calling addstudent");
                const { name, age, grade, email } = req.body;
                const addStudent = new studentModel_1.createStudent({
                    name, age, grade, email
                });
                yield addStudent.save();
                return res.status(201).json({
                    success: true,
                    data: addStudent
                });
            }
            catch (error) {
                console.log("error adding student");
            }
        });
        this.getById = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                console.log("calling getbyud");
                const { id } = req.body;
                const getStudent = yield studentModel_1.createStudent.findById(id);
                if (getStudent) {
                    return res.status(200).json({
                        success: true,
                        student: getStudent
                    });
                }
            }
            catch (error) {
                console.log("cannot get by id");
            }
        });
        this.getStudent = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                console.log("calling get student");
            }
            catch (error) {
                console.log("cannot do it");
            }
        });
        this.updateStudent = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.body;
                const studentUpdate = yield studentModel_1.createStudent.findByIdAndUpdate(id, { name: "john wick" }, { new: true });
                return res.status(200).json({
                    success: true,
                    student: studentUpdate
                });
            }
            catch (error) {
                console.log("cannot update");
            }
        });
        this.deleteStudent = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.body;
                const deleteStudent = yield studentModel_1.createStudent.findByIdAndDelete(id);
                return res.status(200).json({
                    success: true,
                    message: "deleted student successfully",
                    deleteStudent: deleteStudent
                });
            }
            catch (error) {
                console.log("cannot delete student");
            }
        });
        this.signUp = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                console.log('signup');
                const { name, password } = req.body;
                const newUser = new userModel_1.User({ name, password });
                yield newUser.save();
                return res.status(201).json({
                    success: true,
                    user: newUser
                });
            }
            catch (error) {
                console.log("cannot call signup");
            }
        });
        this.login = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                console.log('login user called');
                const { name, password } = req.body;
                const findUser = yield userModel_1.User.findOne({ name, password });
                if (findUser) {
                    return res.status(200).json({
                        user: findUser,
                        success: true
                    });
                }
            }
            catch (error) {
                console.log("cannot login");
            }
        });
    }
}
exports.Student = Student;
