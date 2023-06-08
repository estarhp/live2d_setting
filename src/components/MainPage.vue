<script setup >
import LeftMenu from "./left/LeftMenu.vue";

</script>

<template>
  <div class="common-layout" >
    <el-container>
      <el-aside> <LeftMenu></LeftMenu> </el-aside>
      <router-view></router-view>
    </el-container>
  </div>
</template>



<style scoped>
.common-layout {
  width: 100%;
  height: 100%;
}
.el-container {
  height: 100%;
  width: 100%;
}

.el-aside {
  width: 18%;
}



</style>
