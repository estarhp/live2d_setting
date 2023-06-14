<script setup lang="js">
import {useStore} from "vuex";
import {computed} from "vue";

const store = useStore()

const azure = computed(()=>{
  return store.state.GptConfig.azure
})
</script>
<template>
<el-form
    :label-position="'left'"
    label-width="140px"
    :model="azure"
    :validate-event="false"
>
<el-form-item label="api_key">
  <el-input v-model="azure.api_key" />
</el-form-item>
<el-form-item label="api_version">
  <el-input v-model="azure.api_version" />
</el-form-item>
<el-form-item label="deployment_id ">
  <el-input v-model="azure.deployment_id" />
</el-form-item>
  <el-form-item label="end_point">
    <el-input v-model="azure.end_point" />
  </el-form-item>
</el-form>
</template>

<style scoped>

</style>