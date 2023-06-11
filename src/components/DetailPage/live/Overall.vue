<script setup lang="js">

import {useStore} from "vuex";
import {computed} from "vue";
import ProxySetting from "@/components/DetailPage/live/overall/ProxySetting.vue";

const store = useStore()



const Bsetting = computed(()=>{
  return store.state.Bsetting

})





</script>

<template>
  <div style="margin-bottom: 30px"></div>
  <div>
    <h3>Bilibili</h3>
    <el-switch
        v-model="Bsetting.select.bilibili"
        class="ml-2"
        style="--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949"
        v-if="!Bsetting.select.Youtube"
    />
    <el-switch
        v-model="Bsetting.select.bilibili"
        class="ml-2"
        style="--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949"
        disabled
       v-else
    />
  </div>
  <div>
    <h3>YouTube</h3>
    <el-switch
        v-if="!Bsetting.select.bilibili"
        v-model="Bsetting.select.Youtube"
        class="ml-2"
        style="--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949"

    />
    <el-switch
        v-model="Bsetting.select.Youtube"
        class="ml-2"
        style="--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949"
        disabled
       v-else
    />
  </div>
  <ProxySetting></ProxySetting>

</template>

<style scoped>
h3 {
  display: inline-block;
  margin-right: 30px;
  color: #888888;
}
</style>