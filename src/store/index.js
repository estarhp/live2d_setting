// @ts-ignore
import {createStore} from "vuex";
import {readBFile, readProxyFile, saveBFile, saveProxyFile} from "@/readFile";
import {start,Stop} from "@/rungo";

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
    }
}

const mutations = {

    Bsetting(state,data){
        state.Bsetting = data
    },
    saveBFile(state){
        saveBFile(state.Bsetting)
    },
    ProxySetting(state,data) {
        state.ProxySetting = data
    },
    saveProxy(){
        saveProxyFile(state.ProxySetting)
    }
}

const actions = {
   async saveFile(context){
       await context.commit("saveBFile")
       await context.commit("saveProxy")


    },
    async saveRun(context,cmdStr){
        await context.commit("saveBFile")
        await context.commit("saveProxy")
        start(cmdStr)
    },
    Stop(context){
       Stop()
    },
    async readBFile(context){
        const setting= await readBFile()
        context.commit("Bsetting",setting)
    },
    async readProxyFile(context){
        const  setting = await readProxyFile()
        context.commit("ProxySetting",setting)
    }
}

export default createStore({
    actions,
    state,
    mutations
})

