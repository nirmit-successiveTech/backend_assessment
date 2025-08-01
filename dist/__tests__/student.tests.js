"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const student_1 = require("../controller/student");
const studentMock = new student_1.Student();
jest.mock("../controller/student", () => ({
    addStudent: jest.fn()
}));
describe("it show add student", () => {
    beforeEach(() => {
        clearallMock: true;
    });
});
