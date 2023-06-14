<script setup lang="js">
import HelloWorld from './components/MainPage.vue'
import {onMounted, onUnmounted} from "vue";
import {useStore} from "vuex";
const store = useStore()
onMounted(async ()=>{
  // 读取文件夹中所有文件的内容
  await store.dispatch("readFile")


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
