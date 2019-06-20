"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = require("vscode");
const config_1 = require("../config");
const middeware_1 = require("../middeware");
const downloadTemplete = (context) => {
    context.subscriptions.push(vscode.commands.registerCommand('extension.downloadTemplete', () => {
        const { rootTempletePath, githubProject } = vscode.workspace.getConfiguration(config_1.fastSnippetsConfPrefix);
        try {
            vscode.window.showInformationMessage("下载模版。。。");
            const terminal = vscode.window.createTerminal();
            terminal.sendText(` cd ${rootTempletePath} && git clone ${githubProject}`);
        }
        catch (error) {
            vscode.window.showErrorMessage(error);
        }
    }));
};
exports.downloadTempleteExtension = middeware_1.templeteMid(downloadTemplete);
