

import express, { NextFunction, Request, Response } from "express";
import dotenv from "dotenv"
import { router } from "./router/studentRoutes";
import { dbConnect } from "./utils/db";
import { HandleError } from "./middleware/errorHandler";

dotenv.config();
const app = express();


app.use(express.json());
app.use("/api",router);


app.use(HandleError.errorHandler)


dbConnect().then(()=>{
    app.listen(7000,()=>{
    console.log("server starts at 7000");
})
})


export default app;