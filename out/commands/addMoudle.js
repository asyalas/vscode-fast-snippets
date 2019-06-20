"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const utils_1 = require("../utils");
const vscode = require("vscode");
const config_1 = require("../config");
exports.addMoudleExtension = (context) => {
    context.subscriptions.push(vscode.commands.registerCommand('extension.addMoudle', (uri) => {
        /**
         * 必须传至少2个值：代码块的相对路径及文件夹名
         */
        const txt = '请按格式输入 githubModuleName moduleName A=1&B=2';
        vscode.window.showInputBox({
            prompt: txt,
            validateInput: (text) => {
                if (!text || text.trim().split(/\s*/g).length < 2) {
                    return txt;
                }
                else {
                    return undefined;
                }
            }
        }).then((str) => {
            const { fsPath } = uri;
            const [githubModuleName, moduleName, ...opts] = str.trim().split(/\s*/g);
            // 如果不是文件夹，报错推出
            if (!fs.statSync(fsPath).isDirectory()) {
                vscode.window.showErrorMessage("请选择文件夹，再使用该命令");
                return false;
            }
            const { rootTempletePath, githubProject } = vscode.workspace.getConfiguration(config_1.fastSnippetsConfPrefix);
            // 得到模版地址
            const modulePath = `${rootTempletePath.trim()}/${utils_1.getGithubName(githubProject)}/module/${githubModuleName}`;
            // 如果缓存文件夹不存在，报错退出
            if (!utils_1.isExitDir(modulePath)) {
                vscode.window.showErrorMessage(`缓存文件夹已被清空，请重新下载${rootTempletePath}/module/${githubModuleName}`);
                return false;
            }
            const dirPath = `${fsPath}/${moduleName.toLowerCase()}`;
            // 基于输入名称创建空文件夹
            try {
                fs.mkdirSync(dirPath);
            }
            catch (error) {
                vscode.window.showErrorMessage("创建文件夹失败");
            }
            // 把文件拷贝到指定目录
            utils_1.copy(modulePath, dirPath, {
                moduleName: moduleName,
                namespace: moduleName.toLowerCase()
            });
            vscode.window.showInformationMessage("生成模版成功");
        });
    }));
};
