<script setup lang="ts">

import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}

</script>

<template>
  <el-row class="tac">
    <el-col :span="24">
      <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
      >
        <el-menu-item index="2">
          <router-link to="/">
          <el-icon><setting /></el-icon>

          <span>直播间设置</span>
         </router-link>
        </el-menu-item>
        <el-menu-item index="4">
          <router-link to="/language">
          <el-icon><setting /></el-icon>

            <span>语言模型设置</span>
          </router-link>
        </el-menu-item>
      </el-menu>
    </el-col>

  </el-row>
</template>

<style scoped>

</style>