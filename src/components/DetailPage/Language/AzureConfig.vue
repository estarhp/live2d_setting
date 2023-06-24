<script setup lang="js">
import {computed} from "vue";
import {useStore} from "vuex";
const store = useStore()
const AzureConfig = computed(()=>{
  return store.state.AzureConfig
})
</script>

<template>
  <el-form
      :label-position="'top'"
      label-width="100px"
      :model="AzureConfig"
      style="max-width:100%"
  >
    <el-form-item style="height: 2.5rem">
      <h3>
        azure配置
      </h3>
    </el-form-item>
    <el-form-item label="key">
      <el-input v-model="AzureConfig.azure.key" />
    </el-form-item>
    <el-form-item label="end_point">
      <el-input v-model="AzureConfig.azure.end_point" />
    </el-form-item>
    <el-form-item style="height: 2.5rem">
      <h3>
        speak根元素
      </h3>
    </el-form-item>
    <el-form-item label="version 指示用于解释文档标记的 SSML 规范的版本。 当前版本为“1.0”。">
      <el-input v-model="AzureConfig.speak.version" />
    </el-form-item>
    <el-form-item label=" xml:lang 根文档的语言。 该值可以包含语言代码，例如 en（英语），也可以包含区域设置，例如 en-US（美国英语）。">
      <el-input v-model="AzureConfig.speak.xml_lang" />
    </el-form-item>
    <el-form-item label=' xmlns 用于定义 SSML 文档的标记词汇（元素类型和属性名称）的文档的 URI。 当前 URI 为 "http://www.w3.org/2001/10/synthesis"。'>
      <el-input v-model="AzureConfig.speak.xmlns" />
    </el-form-item>
    <el-form-item label="xmlns:mstts">
      <el-input v-model="AzureConfig.speak.xmlns_mstts" />
    </el-form-item>

    <el-form-item style="height: 2.5rem">
      <h3>
        voice元素
      </h3>
    </el-form-item>
    <el-form-item label=" name 用于文本转语音输出的语音。 有关受支持的预生成语音的完整列表，请参阅语言支持(https://learn.microsoft.com/zh-cn/azure/cognitive-services/speech-service/language-support?tabs=tts)。">
      <el-input v-model="AzureConfig.voice.name"></el-input>
    </el-form-item>
    <el-form-item label="effect 音频效果处理器，用于在设备上针对特定方案优化合成语音输出的质量。 可选。">
      <el-input v-model="AzureConfig.voice.effect"></el-input>
    </el-form-item>
    <el-form-item label="rate 语速，填写比默认值高或低的百分比">
      <el-input v-model="AzureConfig.voice.rate"></el-input>
    </el-form-item>
    <el-form-item label="volume 音量，基准值为默认值">
      <el-input v-model="AzureConfig.voice.volume"></el-input>
    </el-form-item>
  </el-form>
</template>

<style scoped>

</style>