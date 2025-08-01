"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const studentRoutes_1 = require("./router/studentRoutes");
const db_1 = require("./utils/db");
const errorHandler_1 = require("./middleware/errorHandler");
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("/api", studentRoutes_1.router);
app.use(errorHandler_1.HandleError.errorHandler);
(0, db_1.dbConnect)().then(() => {
    app.listen(7000, () => {
        console.log("server starts at 7000");
    });
});
exports.default = app;
