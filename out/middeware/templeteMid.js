"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("../config");
const vscode = require("vscode");
// 校验缓存地址是否已经配置好
exports.templeteMid = (command) => (...args) => {
    const { rootTempletePath } = vscode.workspace.getConfiguration(config_1.fastSnippetsConfPrefix);
    if (!!rootTempletePath) {
        command(...args);
    }
    else {
        vscode.window.showErrorMessage('请配置缓存地址');
    }
};
