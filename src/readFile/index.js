const fs = require("fs")
const TOML = require('@iarna/toml')

export async function readBFile() {
    try {
        const data = await fs.promises.readFile("./config/CHAT/config.cfg", {
            encoding: "utf-8"
        });
        return TOML.parse(data);
    } catch (error) {
        console.error(error);
    }
}


export function saveBFile(data) {
    console.log(data)
    data  = TOML.stringify(data)

    fs.writeFileSync("./config/CHAT/config.cfg",data)

}

export async function readProxyFile() {
    try {
        const data = await fs.promises.readFile("./config/proxy/proxyConfig.cfg", {
            encoding: "utf-8"
        });
        return TOML.parse(data);
    } catch (error) {
        console.error(error);
    }
}

export function saveProxyFile(data) {
    console.log(data)
    data  = TOML.stringify(data)

    fs.writeFileSync("./config/proxy/proxyConfig.cfg",data)

}











