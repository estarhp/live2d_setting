<script setup lang="js">
import {computed} from "vue";
// @ts-ignore
import {useStore} from "vuex";
const store = useStore()

const ProxyStetting = computed(()=>{
  return store.state.ProxySetting
})
console.log(ProxyStetting)
</script>

<template>
  <h3>代理</h3>
  <el-switch
      v-model="ProxyStetting.proxy.use_proxy"
      class="ml-2"
      style="--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949"

  />
  <h3>代理地址</h3>
  <el-input v-model="ProxyStetting.proxy.proxy_url" placeholder="Please input" style="width:15rem"/>
</template>

<style scoped>
h3 {
  display: inline-block;
  margin-right: 30px;
  color: #888888;
}
</style>