import { Request,Response } from "express";


export class HandleError{
    public static errorHandler=(err:Error & {statusCode:number},req:Request,res:Response)=>{
        const errorCode = err.statusCode || 500;
        const errorMessage = err.message || "Cannot process request";

        return res.status(errorCode).json({
            message : errorMessage,
            success: false
        })
    }
}