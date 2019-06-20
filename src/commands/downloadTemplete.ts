
import * as vscode from 'vscode';
import { templetePath, githubName, addMoudleConf } from '../config';

export const downloadTempleteExtension = (context: vscode.ExtensionContext) => {

  context.subscriptions.push(vscode.commands.registerCommand('extension.downloadTemplete', () => {
    const { cachePath } = vscode.workspace.getConfiguration(addMoudleConf);
    try {
      vscode.window.showInformationMessage("下载模版。。。");
      const terminal = vscode.window.createTerminal();
      terminal.sendText(` cd ${cachePath} && git clone ${templetePath}`);
    } catch (error) {
      vscode.window.showErrorMessage(error);
    }
  }));

};