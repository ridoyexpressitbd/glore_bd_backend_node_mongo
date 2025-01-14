"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductValidation = void 0;
const zod_1 = require("zod");
const createProductZodValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string({ required_error: 'Name is required' }),
        description: zod_1.z.string({ required_error: 'Description is required' }),
        category: zod_1.z.string({ required_error: 'Category is required' }),
        status: zod_1.z.boolean({ required_error: 'Status is requird' }),
        price: zod_1.z.string({ required_error: 'Price is required' })
    })
});
exports.ProductValidation = {
    createProductZodValidationSchema
};
