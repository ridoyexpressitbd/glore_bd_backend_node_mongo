"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const ImagesSchema = new mongoose_1.default.Schema({
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
const VideoSchema = new mongoose_1.default.Schema({
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
const ProductSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: [true, 'Product name is required'],
        trim: true
    },
    description: {
        type: String,
        required: [true, 'Short Description is required'],
        trim: true
    },
    category: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        required: [true, 'Categroy is required'],
        ref: 'Category'
    },
    images: {
        type: [ImagesSchema],
        required: [true, 'Image is required']
    },
    video: {
        type: VideoSchema
    },
    status: {
        type: Boolean,
        default: true
    },
    price: {
        type: String,
        required: [true, 'Price is required']
    }
}, {
    timestamps: true
});
exports.Product = mongoose_1.default.model('Prodcut', ProductSchema);
