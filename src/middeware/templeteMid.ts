
import { fastSnippetsConfPrefix } from '../config';
import * as vscode from 'vscode';

// 校验缓存地址是否已经配置好
export const templeteMid = (command: any) => (...args: any) => {
  const { rootTempletePath } = vscode.workspace.getConfiguration(fastSnippetsConfPrefix);
  if (!!rootTempletePath) {
    command(...args)
  } else {
    vscode.window.showErrorMessage('请配置缓存地址')
  }

}