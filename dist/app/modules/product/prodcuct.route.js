"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRoutes = void 0;
const express_1 = __importDefault(require("express"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const product_validationZodSchema_1 = require("./product.validationZodSchema");
const product_controller_1 = require("./product.controller");
const inputDataSetToReq_body_1 = __importDefault(require("../../middlewares/inputDataSetToReq.body"));
const sendImageToCloudinary_1 = require("../../utils/sendImageToCloudinary");
const router = express_1.default.Router();
router.post('/create-product', sendImageToCloudinary_1.upload.fields([
    { name: 'image', maxCount: 10 },
    { name: 'video', maxCount: 1 }
]), inputDataSetToReq_body_1.default, (0, validateRequest_1.default)(product_validationZodSchema_1.ProductValidation.createProductZodValidationSchema), product_controller_1.ProductContollers.createProduct);
router.get('/', product_controller_1.ProductContollers.getAllProducts);
exports.ProductRoutes = router;
