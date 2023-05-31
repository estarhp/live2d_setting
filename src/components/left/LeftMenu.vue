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
          default-active="1"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
      >
        <router-link to="/" style="height: 100%;width: 100%;">
        <el-menu-item index="1">

          <el-icon><setting /></el-icon>

          <span>直播间设置</span>

        </el-menu-item>
        </router-link>
        <router-link to="/language" style="height: 100%;width: 100%">
        <el-menu-item index="2">

          <el-icon><setting /></el-icon>
            <span>语言模型设置</span>

        </el-menu-item>
        </router-link>
      </el-menu>
    </el-col>

  </el-row>
</template>

<style scoped>

</style>