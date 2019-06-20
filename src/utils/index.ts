
import * as path from 'path';
import * as fs from 'fs';
const appDirectory = fs.realpathSync(process.cwd());

// 获取绝对路径
export const resolveApp = (relativePath: string) => {

  return path.resolve(appDirectory, relativePath);
};

// 判断文件夹是否存在
export const isExitDir = (path: string) => {
  try {
    return fs.statSync(path).isDirectory();
  } catch (error) {
    return false;
  }
};

// 判断文件夹是否存在
export const isExitFile = (path: string) => {
  try {
    return fs.statSync(path).isFile();
  } catch (error) {
    return false;
  }
};

// 写入文件

export const write = (path: string, data: any) => {
  try {
    fs.writeFileSync(path, data);
  } catch (error) {
    console.error('写入错误', error);
  }

};

// 编译模版
export const compile = (txt: string, opts: any = {}) => {
  return Object.entries(opts).reduce((p: string, v: any) => {
    const [key, value] = v;
    const regx = new RegExp(`\{\{${key}\}\}`, 'g');
    const res = p.replace(regx, value);
    return res;
  }, txt);
};


// 读取文件
export const read = (path: string, opts: any = {}) => {
  let data;
  try {
    const fileTxt = fs.readFileSync(path).toString();
    data = compile(fileTxt, opts);

  } catch (error) {
    console.error('读取错误', error);
    data = '';
  }
  return data;

};

// 复制文件
export const copyFile = (from: string, to: string, opts: any = {}) => {
  write(to, read(from, opts));
};

// 复制文件夹

export const copy = (from: string, to: string, opts: any = {}) => {
  // 如果拷贝的是文件，直接拷贝
  if (isExitFile(from)) {
    copyFile(from, to, opts);
    return false;
  }

  // 如果拷贝的是文件夹，递归拷贝
  if (isExitDir(from)) {
    try {
      // 发现是文件夹且不存在，先在目标目录生成一个空的文件夹
      if (!isExitDir(to)) {
        fs.mkdirSync(to);
      }

      // 然后递归copy
      fs.readdirSync(from).forEach((path: string) => {
        const fileFromPath = `${from}/${path}`;
        const fileToPath = `${to}/${path}`;
        // 如果是文件直接拷贝
        if (isExitFile(fileFromPath)) {
          copyFile(fileFromPath, fileToPath, opts);
        }
        // 如果是文件夹，递归
        if (isExitDir(fileFromPath)) {
          copy(fileFromPath, fileToPath, opts);
        }
      });
    } catch (error) {
      console.log(error);
    }
  }
};
