import { NextFunction, Request,Response } from "express";
import Joi from "joi";


export class DeveloperController{
    public developerSchema = Joi.object({
        username:Joi.string().min(3).max(17).required(),
        techstack:Joi.string().min(3).max(10).required(),
        salary:Joi.number().required()
    })


}