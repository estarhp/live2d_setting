import {createStore} from "vuex";
import {readBFile,saveBFile} from "@/readFile";
const state = {
    Bsetting:{
        bilibili: {
            room_id: '',
        },
        select: {
            bilibili: false,
        },
    }
}

const mutations = {
   Bsetting(state,data){
       state.Bsetting = data
   },
    saveBFile(state){
       saveBFile(state.Bsetting)
    }
}

const actions = {
   async readBFile(context){
       const setting= await readBFile()
       context.commit("Bsetting",setting)
   },
}

export default createStore({
    actions,
    state,
    mutations
})

