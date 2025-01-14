"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryRoutes = void 0;
const express_1 = __importDefault(require("express"));
const category_controller_1 = require("./category.controller");
const sendImageToCloudinary_1 = require("../../utils/sendImageToCloudinary");
const inputDataSetToReq_body_1 = __importDefault(require("../../middlewares/inputDataSetToReq.body"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const category_validationZodSchema_1 = require("./category.validationZodSchema");
const router = express_1.default.Router();
router.post('/addcategory', sendImageToCloudinary_1.upload.single('image'), inputDataSetToReq_body_1.default, (0, validateRequest_1.default)(category_validationZodSchema_1.CategoryValidation.createCategoryValidationZodSchema), category_controller_1.CategoryControllers.createCetegory);
router.get('/', category_controller_1.CategoryControllers.getAllCategories);
exports.CategoryRoutes = router;
