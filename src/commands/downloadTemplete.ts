
import * as vscode from 'vscode';
import { fastSnippetsConfPrefix } from '../config';
import { templeteMid } from '../middeware'

const downloadTemplete = (context: vscode.ExtensionContext) => {

  context.subscriptions.push(vscode.commands.registerCommand('extension.downloadTemplete', () => {
    const { rootTempletePath, githubProject } = vscode.workspace.getConfiguration(fastSnippetsConfPrefix);
    try {
      vscode.window.showInformationMessage("下载模版。。。");
      const terminal = vscode.window.createTerminal();
      terminal.sendText(` cd ${rootTempletePath} && git clone ${githubProject}`);
    } catch (error) {
      vscode.window.showErrorMessage(error);
    }
  }));

};

export const downloadTempleteExtension = templeteMid(downloadTemplete)