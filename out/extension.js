"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const command = require("./commands");
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
function activate(context) {
    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    try {
        console.log('Congratulations, your extension "vscode-demo" is now active!');
        // 初始化
        // init();
        Object.values(command).forEach(v => v(context));
    }
    catch (error) {
        console.log('unhandleError', error);
    }
}
exports.activate = activate;
// this method is called when your extension is deactivated
function deactivate() { }
exports.deactivate = deactivate;
