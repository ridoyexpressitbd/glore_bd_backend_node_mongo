"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const category_route_1 = require("../modules/category/category.route");
const prodcuct_route_1 = require("../modules/product/prodcuct.route");
const routers = express_1.default.Router();
const moduleRoutes = [
    {
        path: '/category',
        route: category_route_1.CategoryRoutes
    },
    {
        path: '/product',
        route: prodcuct_route_1.ProductRoutes
    }
];
moduleRoutes.forEach(route => {
    routers.use(route.path, route.route);
});
exports.default = routers;
