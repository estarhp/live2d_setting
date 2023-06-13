import {createStore} from "vuex";
import {start,Stop} from "@/rungo";
import {readDirRecursive, writeFilesRecursive} from "@/readFile";
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
    allData:"",
    oldAllData:"",
    filePath:"./GoATuber/config"
}

const mutations = {
    async saveFile(state){
        state.allData[0].content = TOML.stringify(state.allData[0].content)
        state.allData[12].content = TOML.stringify(state.allData[12].content)
        state.allData[4].content = TOML.stringify(state.allData[4].content)
        await writeFilesRecursive("./",state.allData)
        ElMessage({
            message:"读取文件成功",
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

        state.allData[0].content = TOML.parse(state.allData[0].content)
        state.allData[12].content = TOML.parse(state.allData[12].content)
        state.allData[4].content = TOML.parse(state.allData[4].content)
        state.GptConfig =  state.allData[4].content
        state.ProxySetting =  state.allData[12].content
        state.Bsetting = state.allData[0].content
        console.log( state.GptConfig)
        console.log(state.allData)
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

