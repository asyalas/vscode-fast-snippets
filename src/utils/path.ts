
import * as path from 'path';
import * as fs from 'fs';
const appDirectory = fs.realpathSync(process.cwd());

// 获取绝对路径
export const resolveApp = (relativePath: string) => {

  return path.resolve(appDirectory, relativePath);
};