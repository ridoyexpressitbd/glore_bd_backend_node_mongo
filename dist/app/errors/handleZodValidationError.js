"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const handleZodValidationError = (error) => {
    const errorSources = error.issues.map((issues) => {
        return {
            path: issues === null || issues === void 0 ? void 0 : issues.path[issues.path.length - 1],
            message: issues === null || issues === void 0 ? void 0 : issues.message
        };
    });
    const statusCode = 400;
    return {
        statusCode,
        message: 'Validation Error',
        errorSources
    };
};
exports.default = handleZodValidationError;
