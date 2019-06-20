"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getGithubName = (str) => {
    const arr = str.split('/');
    return arr[arr.length - 1];
};
