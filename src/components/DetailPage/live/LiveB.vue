<script setup >
import {computed, onMounted, ref} from "vue";
import {readBFile, saveBFile} from "@/readFile";
import {useStore} from "vuex";
const fs = require("fs")
const store = useStore()

onMounted(async ()=>{
  await store.dispatch("readBFile")
})

const Bsetting = computed(()=>{
  return store.state.Bsetting
})


</script>

<template>


      <div>
        房间号：
        <el-input
            v-model.number="Bsetting.bilibili.room_id"
            class="w-50 m-2"
            size="large"
            placeholder="Please Input"
            style="width: 30vw"
        />
      </div>
      <div style="margin-bottom: 40px"></div>
      <div>
        <el-switch
            v-model="Bsetting.select.bilibili"
            class="ml-2"
            style="--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949"
        />
      </div>



</template>

<style scoped>

</style>