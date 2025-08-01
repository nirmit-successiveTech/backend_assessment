

import { Router } from "express";
import { Student } from "../controller/student";
import { VerifyUser } from "../middleware/verifyUser";


const router = Router();
const student= new Student();
const verifyUser= new VerifyUser();


router.post("/students",verifyUser.AuthUser,student.addStudent);  // middleware to verify   + controller to add student    ,  protected routes
router.get("/students/:id",verifyUser.AuthUser,student.getById);
router.put("/update/:id",verifyUser.AuthUser,student.updateStudent);
router.put("/delete/:id",verifyUser.AuthUser,student.deleteStudent);
router.post("/signup",student.signUp);          // unprotected
router.post("/login",student.login)              // unprotected

export {router}

