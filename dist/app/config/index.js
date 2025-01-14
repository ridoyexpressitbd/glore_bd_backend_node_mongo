"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
// Load environment variables from .env file
dotenv_1.default.config({ path: path_1.default.join(process.cwd(), '.env') });
// Export configuration settings from environment variables
exports.default = {
    NODE_ENV: process.env.NODE_ENV || 'production',
    port: process.env.PORT || 5000,
    mongodb_database_url: process.env.MONGODB_DATABASE_URL,
    cloudinary_cloud_name: process.env.CLOUDINARY_CLOUDE_NAME,
    cloudinary_api_key: process.env.CLOUDINARY_API_KEY,
    cloudinary_api_secret: process.env.CLOUDINARY_API_SECRET
};
