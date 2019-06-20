
import * as fs from 'fs';
import { isExitDir, copy } from '../utils';
import * as vscode from 'vscode';
import { addMoudleConf, githubName } from '../config';
export const addMoudleExtension = (context: vscode.ExtensionContext) => {

  context.subscriptions.push(vscode.commands.registerCommand('extension.addMoudle', (uri: vscode.Uri) => {

    vscode.window.showInputBox({
      prompt: '请输入模块名',
      validateInput: (text: string): string | undefined => {
        if (!text) {
          return '请输入模块名';
        } else {
          return undefined;
        }
      }
    }).then((str: any) => {

      const { fsPath } = uri;
      const { cachePath, baseModulePath } = vscode.workspace.getConfiguration(addMoudleConf);

      // 如果不是文件夹，报错推出
      if (!fs.statSync(fsPath).isDirectory()) {
        vscode.window.showErrorMessage("请选择文件夹，再使用该命令");
        return false;
      }

      // 如果缓存文件夹不存在，报错退出
      const modulePath = `${cachePath}/${githubName}`;
      vscode.window.showInformationMessage(modulePath);
      if (!isExitDir(modulePath)) {
        vscode.window.showErrorMessage("缓存文件夹已被清空，请重新下载");
        return false;
      }

      const dirPath = `${fsPath}/${str.toLowerCase()}`;

      // 基于输入名称创建空文件夹
      try {
        fs.mkdirSync(dirPath);
      } catch (error) {
        vscode.window.showErrorMessage("创建文件夹失败");
      }


      // 把文件拷贝到指定目录

      copy(baseModulePath, dirPath, {
        moduleName: str,
        namespace: str.toLowerCase()
      });

      vscode.window.showInformationMessage("生成模版成功");
    });

  }));
};