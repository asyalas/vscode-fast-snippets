
import * as vscode from 'vscode';

export const helloWorldExtension = (context: vscode.ExtensionContext) => {
  // 注册HelloWord命令
  context.subscriptions.push(vscode.commands.registerCommand('extension.helloWorld', () => {
    vscode.window.showInformationMessage('Hello World！你好，小茗同学！');
  }));
};