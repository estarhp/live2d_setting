<script setup lang="ts">
import { ref ,defineProps} from 'vue'

const activeIndex = ref('1')
const activeIndex2 = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}

defineProps({
  list:{
    type:Array,
    required:true
  }
})

</script>

<template>
  <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
  >

    <el-menu-item v-for="(i,index) in list" :index="index.toString()">{{i}}</el-menu-item>

  </el-menu>
</template>

<style scoped>

</style>