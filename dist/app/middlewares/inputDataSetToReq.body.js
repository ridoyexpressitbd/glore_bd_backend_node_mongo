"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dataSetToReqBody = (req, res, next) => {
    req.body = JSON.parse(req.body.data);
    next();
};
exports.default = dataSetToReqBody;
