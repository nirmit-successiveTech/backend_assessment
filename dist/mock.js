"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.user = void 0;
const user = (req, res, next) => {
    try {
        console.log('hello');
    }
    catch (error) {
        console.log('bye');
    }
};
exports.user = user;
