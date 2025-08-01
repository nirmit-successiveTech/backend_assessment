"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HandleError = void 0;
class HandleError {
}
exports.HandleError = HandleError;
HandleError.errorHandler = (err, req, res) => {
    const errorCode = err.statusCode || 500;
    const errorMessage = err.message || "Cannot process request";
    return res.status(errorCode).json({
        message: errorMessage,
        success: false
    });
};
