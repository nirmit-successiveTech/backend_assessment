import express, { NextFunction, Request, Response } from "express";
import dotenv from "dotenv"

import { dbConnection } from "./utils/db";

const app = express();
dotenv.config()

app.use(express.json());

app.get("/user",(req:Request,res:Response,next:NextFunction)=>{
  console.log("calling user")
})

const port = process.env.PORT;
console.log("port:",port);

dbConnection().then(() => {
  app.listen(7000, () => {
    console.log("server is running at 7000");
  });
});

export default app;
