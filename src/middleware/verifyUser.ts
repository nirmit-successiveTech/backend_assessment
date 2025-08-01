import { NextFunction, Request,Response } from "express";


export class VerifyUser{
    AuthUser=async(req:Request,res:Response,next:NextFunction)=>{
        try {
            const envName = process.env.name;
            const envPassword= process.env.password ;
            console.log(envName,envPassword);

            

            if(envName=="nirmit" && envPassword=="qwerty"){
                console.log('verified');
                next();
            }

        } catch (error) {
            console.log('failed to validate')
        }
    }
}