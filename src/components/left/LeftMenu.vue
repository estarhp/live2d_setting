<script setup lang="ts">

import {
  Setting,
} from '@element-plus/icons-vue'
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

    <div class="button"><el-button type="primary" size="large" @click="store.commit('saveBFile')">保存</el-button></div>

</template>

<style scoped>
.button {
  position: relative;
  top: 300px;
}
</style>