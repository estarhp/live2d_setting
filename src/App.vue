<script setup lang="ts">
import HelloWorld from './components/MainPage.vue'
import {onMounted} from "vue";
import {useStore} from "vuex";
const store = useStore()
onMounted(async ()=>{
  await store.dispatch("readBFile")
  await store.dispatch("readProxyFile")
})
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
