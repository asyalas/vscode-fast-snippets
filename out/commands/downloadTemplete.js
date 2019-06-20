"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = require("vscode");
const config_1 = require("../config");
exports.downloadTempleteExtension = (context) => {
    context.subscriptions.push(vscode.commands.registerCommand('extension.downloadTemplete', () => {
        const { cachePath } = vscode.workspace.getConfiguration(config_1.addMoudleConf);
        try {
            vscode.window.showInformationMessage("下载模版。。。");
            const terminal = vscode.window.createTerminal();
            terminal.sendText(` cd ${cachePath} && git clone ${config_1.templetePath}`);
        }
        catch (error) {
            vscode.window.showErrorMessage(error);
        }
    }));
};
