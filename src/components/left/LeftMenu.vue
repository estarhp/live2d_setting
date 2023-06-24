<script setup lang="js">

import {
  Setting,
} from '@element-plus/icons-vue'
// @ts-ignore

import {useStore} from "vuex";

const store = useStore()

</script>

<template>
  <el-row class="tac">
    <el-col :span="24">
      <el-menu
          default-active="1"
          class="el-menu-vertical-demo"
      >
        <router-link to="/live" style="height: 100%;width: 100%;">
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

    <div class="button">
      <el-button type="primary" size="large" @click="store.dispatch('saveFile')">保存</el-button>
      <div style="margin-bottom: 1rem"></div>
      <el-button type="success" size="large" @click="store.dispatch('saveRun','cmd.exe')">运行</el-button>
      <div style="margin-bottom: 1rem"></div>
      <el-button type="danger" size="large" @click="store.dispatch('Stop')">停止</el-button>
    </div>

</template>

<style scoped>
.button {
  position: relative;
  top: 250px;
}
</style>