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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductServices = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */
const AppError_1 = __importDefault(require("../../errors/AppError"));
const sendImageToCloudinary_1 = require("../../utils/sendImageToCloudinary");
const category_model_1 = require("../category/category.model");
const prodcut_model_1 = require("./prodcut.model");
const getAllProductsFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prodcut_model_1.Product.find().populate('category', 'name');
    return result;
});
// create a product
const createProdcutIntoDB = (files, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const isCategoryExist = yield category_model_1.Category.findById(payload.category);
    if (!isCategoryExist) {
        throw new AppError_1.default(404, 'Category Not Found!');
    }
    const images = files.image
        ? yield Promise.all(files.image.map((file) => __awaiter(void 0, void 0, void 0, function* () {
            const randomNumber = Math.round(Math.random() * 1000);
            const fileName = `${payload.name}${randomNumber}`;
            const { secure_url, optimizeUrl, public_id } = yield (0, sendImageToCloudinary_1.sendImageToCloudinary)(fileName, file.path);
            return { secure_url, optimizeUrl, public_id };
        })))
        : [];
    const videoFile = files.video
        ? yield (0, sendImageToCloudinary_1.sendImageToCloudinary)(payload.name, files.video[0].path, 'video')
        : null;
    const video = {};
    if (videoFile) {
        video.secure_url = videoFile.secure_url;
        video.optimizeUrl = videoFile.optimizeUrl;
        video.public_id = videoFile.public_id;
    }
    payload.images = images;
    payload.video = video;
    const result = yield prodcut_model_1.Product.create(payload);
    return result;
});
exports.ProductServices = {
    createProdcutIntoDB,
    getAllProductsFromDB
};
