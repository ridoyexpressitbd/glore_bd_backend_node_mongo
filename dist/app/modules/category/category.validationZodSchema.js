"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryValidation = void 0;
const zod_1 = require("zod");
const createCategoryValidationZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z
            .string({
            required_error: 'Category Name is Required!'
        })
            .max(100, {
            message: 'Category Name Cannot be more than 100 Characters'
        }),
        text: zod_1.z.string().optional()
    })
});
exports.CategoryValidation = {
    createCategoryValidationZodSchema
};
