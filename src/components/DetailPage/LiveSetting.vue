<script setup lang="js">

import Navigator from "./navigator/Navigator.vue";
import Bilibili from "@/components/DetailPage/live/Bilibili.vue";
import Youtube from "@/components/DetailPage/live/Youtube.vue";
import Overall from "@/components/DetailPage/live/Overall.vue";
import {useRouter} from "vue-router";
import {onMounted, ref} from "vue";


let list = [
    "直播间全局设置",
    "bilibili",
    "YouTube"
]

const activeIndex = ref("2")
// @ts-ignore
const router = useRouter()


// @ts-ignore
function handleClick(type){
  switch (type){
    case 0 : {
      router.push("/live/overall")
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

function handselect(a,b){
  activeIndex.value = a
  console.log(typeof activeIndex.value)
}
</script>

<template>
  <el-container>
    <el-header>
      <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          @select="handselect"
      >

        <el-menu-item v-for="(i,index) in list" :index="index.toString()" @click="handleClick(index)">{{i}}</el-menu-item>
      </el-menu>
    </el-header>

    <el-main>
      <Overall v-if="activeIndex === '0'"></Overall>
      <Bilibili v-if="activeIndex === '1'"></Bilibili>
      <Youtube v-if="activeIndex === '2'" ></Youtube>
    </el-main>

  </el-container>
</template>

<style scoped>

</style>