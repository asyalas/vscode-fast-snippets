"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import { isExitDir, copy } from '../utils';
const vscode = require("vscode");
// import { addMoudleConf, githubName } from '../config';
exports.addMoudleExtension = (context) => {
    context.subscriptions.push(vscode.commands.registerCommand('extension.addMoudle', () => {
        vscode.window.showInformationMessage('Hello addMoudleExtension');
    }));
    // context.subscriptions.push(vscode.commands.registerCommand('extension.addMoudle', (uri: vscode.Uri) => {
    // 	vscode.window.showInputBox({
    // 		prompt: '请输入模块名',
    // 		validateInput: (text: string): string | undefined => {
    // 			if (!text) {
    // 				return '请输入模块名';
    // 			} else {
    // 				return undefined;
    // 			}
    // 		}
    // 	}).then((str: any) => {
    // 		const { fsPath } = uri;
    // 		const { cachePath, baseModulePath } = vscode.workspace.getConfiguration(addMoudleConf);
    // 		// 如果不是文件夹，报错推出
    // 		if (!fs.statSync(fsPath).isDirectory()) {
    // 			vscode.window.showErrorMessage("请选择文件夹，再使用该命令");
    // 			return false;
    // 		}
    // 		// 如果缓存文件夹不存在，报错退出
    // 		const modulePath = `${cachePath}/${githubName}`;
    // 		if (!isExitDir(modulePath)) {
    // 			vscode.window.showErrorMessage("缓存文件夹已被清空，请重新下载");
    // 			return false;
    // 		}
    // 		// 把文件拷贝到指定目录
    // 		copy(baseModulePath, fsPath,{
    // 			moduleName:str,
    // 			namespace:str.toLowerCase()
    // 		});
    // 		vscode.window.showInformationMessage("生成模版成功");
    // 	});
    // }));
};
//# sourceMappingURL=addMoudle.js.map