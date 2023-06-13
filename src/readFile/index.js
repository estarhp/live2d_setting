const fs = require("fs")
const TOML = require('@iarna/toml')


//B站直播间配置读取
export async function readBFile() {
    try {
        const data = await fs.promises.readFile("./GoATuber/config/CHAT/config.cfg", {
            encoding: "utf-8"
        });
        return TOML.parse(data);
    } catch (error) {
        console.error(error);
    }
}

//B站直播间配置保存
export function saveBFile(data) {
    console.log(data)
    data  = TOML.stringify(data)

    fs.writeFileSync("./GoATuber/config/CHAT/config.cfg",data)

}

//Proxy 代理设置读取

export async function readProxyFile() {
    try {
        const data = await fs.promises.readFile("./GoATuber/config/proxy/proxyConfig.cfg", {
            encoding: "utf-8"
        });
        return TOML.parse(data);
    } catch (error) {
        console.error(error);
    }
}


//Proxy 代理设置保存
export function saveProxyFile(data) {
    console.log(data)
    data  = TOML.stringify(data)

    fs.writeFileSync("./GoATuber/config/proxy/proxyConfig.cfg",data)

}


//读取GPT设置
export async function readGPTFile() {
    try {
        const data = await fs.promises.readFile("./GoATuber/config/CHAT/config.cfg", {
            encoding: "utf-8"
        });
        return TOML.parse(data);
    } catch (error) {
        console.error(error);
    }
}

//保存GPT 设置
export function savGPTFile(data) {
    console.log(data)
    data  = TOML.stringify(data)

    fs.writeFileSync("./GoATuber/config/CHAT/config.cfg",data)

}











