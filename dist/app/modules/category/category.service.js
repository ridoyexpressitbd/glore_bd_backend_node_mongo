"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryService = void 0;
const sendImageToCloudinary_1 = require("../../utils/sendImageToCloudinary");
const category_model_1 = require("./category.model");
const getAllCategoriesFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield category_model_1.Category.find();
    return result;
});
const createCategoryIntoDB = (file, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const path = file === null || file === void 0 ? void 0 : file.path;
    const { optimizeUrl, secure_url, public_id } = yield (0, sendImageToCloudinary_1.sendImageToCloudinary)(payload.name, path);
    const image = {
        optimizeUrl,
        secure_url,
        public_id
    };
    payload.image = image;
    const result = yield category_model_1.Category.create(payload);
    return result;
});
exports.CategoryService = {
    createCategoryIntoDB,
    getAllCategoriesFromDB
};
