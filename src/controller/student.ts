import { NextFunction,Request,Response } from "express";
import { createStudent } from "../model/studentModel";
import { User } from "../model/userModel";

export class Student{
    addStudent = async(req:Request,res:Response,next:NextFunction)=>{
        try {
            console.log("calling addstudent")
            const { name,age,grade,email} = req.body;
            const addStudent = new createStudent({
                name,age,grade,email
            });
            await addStudent.save();
            return res.status(201).json({
                success:true,
                data:addStudent
            })
        } catch (error) {
            console.log("error adding student")
        }
    }

    getById=async(req:Request,res:Response,next:NextFunction)=>{
        try {
            console.log("calling getbyud");
            const {id} = req.params;
            const getStudent = await createStudent.findById(id);
            if(getStudent){
                return res.status(200).json({
                    success:true,
                    student:getStudent
                })
            }
        } catch (error) {
            console.log("cannot get by id");
        }
    }

    getStudent=async(req:Request,res:Response,next:NextFunction)=>{
        try {
            console.log("calling get student")
        } catch (error) {
            console.log("cannot do it")
        }
    }

    updateStudent=async(req:Request,res:Response,next:NextFunction)=>{
        try {
            const {id} = req.params;
            const studentUpdate = await createStudent.findByIdAndUpdate(id,{name:"john wick"},{new:true});
            return res.status(200).json({
                success:true,
                student:studentUpdate
            })
        } catch (error) {
            console.log("cannot update")
        }
    }

    deleteStudent=async(req:Request,res:Response,next:NextFunction)=>{
        try {
            const {id} = req.params;
            const deleteStudent = await createStudent.findByIdAndDelete(id);
            return res.status(200).json({
                success:true,
                message:"deleted student successfully",
                deleteStudent:deleteStudent
            })
        } catch (error) {
            console.log("cannot delete student")
        }
    }

    signUp=async(req:Request,res:Response,next:NextFunction)=>{
        try {
            console.log('signup');
            const {name,password} = req.body;
            const newUser = new User({name,password});

            await newUser.save();
            return res.status(201).json({
                success:true,
                user:newUser
            })
        } catch (error) {
            console.log("cannot call signup")
        }
    }

    login=async(req:Request,res:Response,next:NextFunction)=>{
        try {
            console.log('login user called')
            const {name,password} = req.body;
            const findUser = await User.findOne({name,password});
            if(findUser){
                return res.status(200).json({
                    user:findUser,
                    success:true
                })
            }
        } catch (error) {
            console.log("cannot login")
        }
    }

    findmaxage=async(req:Request,res:Response,next:NextFunction)=>{
        try {
            console.log('findmaxage')
            const maxAge = await createStudent.aggregate([{
                $match:{
                    age:{
                        $gte:25,$lte:90
                    }
                }
            }])
            return res.json({
                data:maxAge
            })
        } catch (error) {
            console.log('error')
        }
    }


    findsort=async(req:Request,res:Response,next:NextFunction)=>{
        try {
            const sortdata = await createStudent.find().sort({age:-1}).limit(5)
            return res.json({
                data:sortdata
            })
        } catch (error) {
            console.log('error baate')
        }
    }



    


}