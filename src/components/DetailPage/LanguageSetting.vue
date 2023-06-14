<script setup lang="js">
import {ref} from "vue";
import OpenAI from "@/components/DetailPage/Language/OpenAI.vue";
import AzureOpenAI from "@/components/DetailPage/Language/AzureOpenAI.vue";
import General from "@/components/DetailPage/Language/General.vue";

let list = [
    "General",
    "openAI",
    "azure openAI",
]


const activeIndex = ref("0")
function handselect(a){
  activeIndex.value = a
  console.log(typeof activeIndex.value)
}

</script>

<template>
  <el-container>
    <el-header>
      <el-header>
        <el-menu
            :default-active="activeIndex"
            class="el-menu-demo"
            mode="horizontal"
            @select="handselect"
        >

          <el-menu-item v-for="(i,index) in list" :index="index.toString()" >{{i}}</el-menu-item>
        </el-menu>
      </el-header>
    </el-header>
    <el-main>
      <General v-if="activeIndex === '0'"></General>
      <OpenAI v-if="activeIndex === '1'"></OpenAI>
      <AzureOpenAI v-if="activeIndex === '2'"></AzureOpenAI>

    </el-main>
  </el-container>
</template>

<style scoped>

</style>