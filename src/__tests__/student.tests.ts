

import request from "supertest";
import app from "..";
import { Student } from "../controller/student";

const studentMock = new Student();

jest.mock("../controller/student",()=>({
    addStudent:jest.fn()
}));


describe("it show add student",()=>{
    beforeEach(()=>{
        clearallMock:true
    })
});


