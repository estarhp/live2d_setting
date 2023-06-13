const fs = require("fs")
const path = require('path');
const TOML = require("@iarna/toml")


let fileContents = [];
export async function readDirRecursive(dir) {
    let files = await fs.promises.readdir(dir, 'utf-8');
    files.sort();

    const fileContents = [];

    for (const file of files) {
        const filePath = path.join(dir, file);
        const fileStat = await fs.promises.stat(filePath);

        if (fileStat.isDirectory()) {
            const subdirContents = await readDirRecursive(filePath);
            fileContents.push(...subdirContents);
        } else {
            const content = await fs.promises.readFile(filePath, 'utf-8');
            fileContents.push({ filePath, content });
        }
    }

    return fileContents;
}

export async function writeFilesRecursive(baseDir, fileContents) {
    for (const fileContent of fileContents) {
    if (fileContent === undefined) continue

        if (Array.isArray(fileContent)) {
            // 如果内容是一个数组，则递归调用 writeFilesRecursive 函数
            await writeFilesRecursive(baseDir, fileContent);
        } else {
            // 否则，写入文件
            const  filePath = fileContent.filePath;
            const content = fileContent.content;
            const fullPath = path.join(baseDir, filePath);
            await fs.promises.writeFile(fullPath, content, { encoding: 'utf-8' });
        }
    }
}





















