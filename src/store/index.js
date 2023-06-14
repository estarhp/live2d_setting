import {createStore} from "vuex";
import {start,Stop} from "@/rungo";
import {readDirRecursive, writeFilesRecursive} from "@/readFile";
import {DETOMLData, ENTOMLDate} from "@/utils";
const TOML = require('@iarna/toml')

const state = {
    Bsetting:{
        bilibili: {
            room_id: '',
        },
        select: {
            bilibili: "",
            Youtube:""
        },
    },
    ProxySetting:{
        proxy:{
            use_proxy:"",
            proxy_url:""
        }
    },
    GptConfig:{

        "openai": {
            "api_key": ""
        },
        "azure": {
            "end_point": "",
            "api_key": "",
            "deployment_id": "",
            "api_version": ""
        },
        "general": {
            "model": "",
            "temperature": "",
            "top_p": "",
            "max_tokens": "",
            "stop": "",
            "presence_penalty": "",
            "frequency_penalty": ""
        }

    },
    NLP:{
        NLP:{
            "use_gpt": "",
            "use_azure_gpt": "",
            "use_other": ""
        }
    },
    speech:{
        speech:{
            "use_xfyun": "",
            "use_talkinggenie": "",
            "use_azure": ""
        }
    },
    AzureConfig:{
        "azure": {
            "key": "",
            "end_point": ""
        },
        "speak": {
            "version": "",
            "xml_lang": "",
            "xmlns_mstts": "",
            "xmlns": ""
        },
        "voice": {
            "name": "",
            "effect": "",
            "rate": "",
            "volume": ""
        }
    },
    allData:"",
    oldAllData:"",
    filePath:"./GoATuber/config"
}

const mutations = {
    async saveFile(state){
        DETOMLData(state)
        await writeFilesRecursive("./",state.allData)
        ElMessage({
            message:"写入文件成功",
            type:"success",
            duration:2000
        })
    },
    readFile(state,data){
        state.allData = data

        state.oldAllData = JSON.stringify(state.allData)
        ElMessage({
            message:"读取文件成功",
            type:"success",
            duration:2000
        })

        ENTOMLDate(state)

        console.log(state.allData)
        console.log(state.AzureConfig)
    },

}

const actions = {
   async saveFile(context){
       await context.commit("saveFile")

    },
    async saveRun(context,cmdStr){
        await context.commit("saveFile")
        start(cmdStr)
    },
    Stop(context){
       Stop()
    },
    async readFile(context){
       const data = await readDirRecursive(context.state.filePath)
        context.commit("readFile",data)
    },
}

export default createStore({
    actions,
    state,
    mutations
})



