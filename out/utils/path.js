"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const fs = require("fs");
const appDirectory = fs.realpathSync(process.cwd());
// 获取绝对路径
exports.resolveApp = (relativePath) => {
    return path.resolve(appDirectory, relativePath);
};
