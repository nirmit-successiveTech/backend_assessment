import mongoose from 'mongoose';

export const dbConnection=async()=>{
    try {
        await mongoose.connect("mongodb://localhost:27017/practice-db");
        console.log("connected to db");
    } catch (error) {
        console.log("cannot connect to databse")
    }
}