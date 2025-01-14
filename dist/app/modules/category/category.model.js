"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Category = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const ImageSchema = new mongoose_1.default.Schema({
    public_id: {
        type: String,
        required: true
    },
    secure_url: {
        type: String,
        required: true
    },
    optimizeUrl: {
        type: String,
        required: true
    }
}, {
    _id: false
});
const CateroySchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: [true, 'Categroy name is required!'],
        trim: true,
        unique: true
    },
    image: {
        type: ImageSchema,
        required: [true, 'Categroy image is required!']
    },
    text: {
        type: String,
        trim: true
    }
}, {
    timestamps: true
});
exports.Category = mongoose_1.default.model('Category', CateroySchema);
