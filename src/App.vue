<script setup lang="js">
import HelloWorld from './components/MainPage.vue'
import {onMounted, onUnmounted} from "vue";

import {useStore} from "vuex";
const store = useStore()
onMounted(async ()=>{
  await store.dispatch("readBFile")
  await store.dispatch("readProxyFile")
  ElMessage({
    message:"文件加载成功",
    type:"success"
  })
})

onUnmounted(store.dispatch("Stop"))
</script>

<template>
  <HelloWorld />
</template>

<style>
#app {
  width: 100vw;
  height: 100vh;
  padding: 0;
}

a {
  text-decoration: none;
  color: black;
}

.el-menu-item.is-active {
  background: #ECF5FF;
}

</style>
