import { NextFunction,Request,Response } from "express";
import { User } from "./model/userModel";


const SeedData = async()=>{
    for(let i=1;i<=50;i++){
        const demouser = `user${i}`;
        const password = `password${i}`;

        const seedData = new User({
            demouser,password
        })

        await seedData.save();

    }
}

SeedData();


