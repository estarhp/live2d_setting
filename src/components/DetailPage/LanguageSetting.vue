<script setup lang="js">
import Navigator from "./navigator/Navigator.vue";

let list = [
    "a",
    "b",
    "c"
]

</script>

<template>
  <el-container>
    <el-header><Navigator :list="list"></Navigator></el-header>
    <el-main>dasdas</el-main>
  </el-container>
</template>

<style scoped>

</style>