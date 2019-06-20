"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = require("vscode");
exports.helloWorldExtension = (context) => {
    // 注册HelloWord命令
    context.subscriptions.push(vscode.commands.registerCommand('extension.helloWorld', () => {
        vscode.window.showInformationMessage('Hello World！你好，小茗同学！');
    }));
};
