"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const student_1 = require("../controller/student");
const verifyUser_1 = require("../middleware/verifyUser");
const router = (0, express_1.Router)();
exports.router = router;
const student = new student_1.Student();
const verifyUser = new verifyUser_1.VerifyUser();
router.post("/students", verifyUser.AuthUser, student.addStudent); // middleware to verify   + controller to add student    ,  protected routes
router.get("/students/:id", verifyUser.AuthUser, student.getById);
router.put("/update/:id", verifyUser.AuthUser, student.updateStudent);
router.put("/delete/:id", verifyUser.AuthUser, student.deleteStudent);
router.post("/signup", student.signUp); // unprotected
router.post("/login", student.login); // unprotected
