<script setup lang="ts">

import Navigator from "./navigator/Navigator.vue";


let list = [
    "直播间全局设置",
    "bilibili",
    "YouTube"
]
</script>

<template>
  <el-container>
    <el-header><Navigator :list="list"></Navigator></el-header>
    <el-main><router-view></router-view></el-main>
  </el-container>
</template>

<style scoped>

</style>