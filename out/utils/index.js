"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const fs = require("fs");
const appDirectory = fs.realpathSync(process.cwd());
// 获取绝对路径
exports.resolveApp = (relativePath) => {
    return path.resolve(appDirectory, relativePath);
};
// 判断文件夹是否存在
exports.isExitDir = (path) => {
    try {
        return fs.statSync(path).isDirectory();
    }
    catch (error) {
        return false;
    }
};
// 判断文件夹是否存在
exports.isExitFile = (path) => {
    try {
        return fs.statSync(path).isFile();
    }
    catch (error) {
        return false;
    }
};
// 写入文件
exports.write = (path, data) => {
    try {
        fs.writeFileSync(path, data);
    }
    catch (error) {
        console.error('写入错误', error);
    }
};
// 编译模版
exports.compile = (txt, opts = {}) => {
    return Object.entries(opts).reduce((p, v) => {
        const [key, value] = v;
        const regx = new RegExp(`\{\{${key}\}\}`, 'g');
        const res = p.replace(regx, value);
        return res;
    }, txt);
};
// 读取文件
exports.read = (path, opts = {}) => {
    let data;
    try {
        const fileTxt = fs.readFileSync(path).toString();
        data = exports.compile(fileTxt, opts);
    }
    catch (error) {
        console.error('读取错误', error);
        data = '';
    }
    return data;
};
// 复制文件
exports.copyFile = (from, to, opts = {}) => {
    exports.write(to, exports.read(from, opts));
};
// 复制文件夹
exports.copy = (from, to, opts = {}) => {
    // 如果拷贝的是文件，直接拷贝
    if (exports.isExitFile(from)) {
        exports.copyFile(from, to, opts);
        return false;
    }
    // 如果拷贝的是文件夹，递归拷贝
    if (exports.isExitDir(from)) {
        try {
            // 发现是文件夹且不存在，先在目标目录生成一个空的文件夹
            if (!exports.isExitDir(to)) {
                fs.mkdirSync(to);
            }
            // 然后递归copy
            fs.readdirSync(from).forEach((path) => {
                const fileFromPath = `${from}/${path}`;
                const fileToPath = `${to}/${path}`;
                // 如果是文件直接拷贝
                if (exports.isExitFile(fileFromPath)) {
                    exports.copyFile(fileFromPath, fileToPath, opts);
                }
                // 如果是文件夹，递归
                if (exports.isExitDir(fileFromPath)) {
                    exports.copy(fileFromPath, fileToPath, opts);
                }
            });
        }
        catch (error) {
            console.log(error);
        }
    }
};
//# sourceMappingURL=index.js.map