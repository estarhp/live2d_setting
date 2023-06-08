<script setup lang="ts">
import { ref ,defineProps} from 'vue'
import {useRouter} from "vue-router";

const activeIndex = ref('1')
const activeIndex2 = ref('1')
const router = useRouter()
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}

defineProps({
  list:{
    type:Array,
    required:true
  }
})
function handleClick(type){
  switch (type){
    case 0 : {
      router.push("/live/allLive")
      break
    }
    case 1 :{
      router.push("/live/bilibili")
      break
    }
    case 2 :{
      router.push("/live/youtube")
      break
    }
  }
}

</script>

<template>
  <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
  >

    <el-menu-item v-for="(i,index) in list" :index="index.toString()" @click="handleClick(index)">{{i}}</el-menu-item>

  </el-menu>
</template>

<style scoped>

</style>