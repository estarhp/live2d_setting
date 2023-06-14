<script setup lang="js">
import {useStore} from "vuex";
import {computed} from "vue";

const store = useStore()

const general  = computed(()=>{
  return store.state.GptConfig.general
})

const NLP = computed(()=>{
  return store.state.NLP.NLP
})

const speech = computed(()=>{
  return store.state.speech.speech
})
</script>

<template>
  <el-row>
    <el-col :span="8">
      <el-text>
        azure GPT
      </el-text>
      <el-switch
          v-model="NLP.use_azure_gpt"
          class="ml-2"
          style="--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949"
          v-if="!NLP.use_gpt && !NLP.use_other"
      />
      <el-switch
          v-model="NLP.use_azure_gpt"
          class="ml-2"
          style="--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949"
          disabled
          v-else
      />
    </el-col>
    <el-col :span="8">
      <el-text>
        GPT模型
      </el-text>
      <el-switch
          v-model="NLP.use_gpt"
          class="ml-2"
          style="--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949"
          v-if="!NLP.use_azure_gpt && !NLP.use_other"
      />
      <el-switch
          v-model="NLP.use_gpt"
          class="ml-2"
          style="--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949"
          disabled
          v-else
      />
    </el-col>
    <el-col :span="8">
      <el-text>
        其他模型
      </el-text>
      <el-switch
          v-model="NLP.use_other"
          class="ml-2"
          style="--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949"
          v-if="!NLP.use_azure_gpt && !NLP.use_gpt"
      />
      <el-switch
          v-model="NLP.use_other"
          class="ml-2"
          style="--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949"
          disabled
          v-else
      />
    </el-col>
  </el-row>
  <el-row>
    <el-col :span="8">
      <el-text>
        azure
      </el-text>
      <el-switch
          v-model="speech.use_azure"
          class="ml-2"
          style="--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949"
          v-if="!speech.use_talkinggenie && !speech.use_xfyun"
      />
      <el-switch
          v-model="speech.use_azure"
          class="ml-2"
          style="--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949"
          disabled
          v-else
      />
    </el-col>
    <el-col :span="8">
      <el-text>
        科大讯飞语音合成平台
      </el-text>
      <el-switch
          v-model="speech.use_xfyun"
          class="ml-2"
          style="--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949"
          v-if="!speech.use_talkinggenie && !speech.use_azure"
      />
      <el-switch
          v-model="speech.use_xfyun"
          class="ml-2"
          style="--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949"
          disabled
          v-else
      />
    </el-col>
    <el-col :span="8">
      <el-text>
        使用会话精灵(非官方api)
      </el-text>
      <el-switch
          v-model="speech.use_talkinggenie"
          class="ml-2"
          style="--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949"
          v-if="!speech.use_xfyun && !speech.use_azure"
      />
      <el-switch
          v-model="speech.use_talkinggenie"
          class="ml-2"
          style="--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949"
          disabled
          v-else
      />
    </el-col>
  </el-row>
  <div style="margin: 20px" />
  <el-form
      :label-position="'top'"
      label-width="100px"
      :model="general"
      style="max-width: 100%"
  >
    <el-form-item label="model(使用的模型，默认是 gpt-3.5-turbo)">
      <el-input v-model="general.model" />
    </el-form-item>
    <el-form-item label="temperature(对话温度，越大越随机 参照https://algowriting.medium.com/gpt-3-temperature-setting-101-41200ff0d0be)">
      <el-input v-model="general.temperature" />
    </el-form-item>
    <el-form-item label="top_p(代替温度采样的方法，称为核采样。其中模型考虑具有top_p概率质量的标记的结果。所以0.1意味着只考虑构成前10%概率质量的标记。我们通常建议更改此值或对话温度，但不要同时更改两者。默认为1.
)">
      <el-input v-model="general.top_p" />
    </el-form-item>
    <el-form-item label="max_tokens(每次对话最大生成使用token数量)">
      <el-input v-model="general.max_tokens" />
    </el-form-item>
    <el-form-item label="stop(stop,不太明白)">
      <el-input v-model="general.stop" />
    </el-form-item>
    <el-form-item label="presence_penalty( -2.0和2.0之间的数字。正值会根据到目前为止是否出现在文本中来惩罚新标记，从而增加模型谈论新主题的可能性。默认为0。
)">
      <el-input v-model="general.presence_penalty" />
    </el-form-item>
    <el-form-item label="frequency_penalty( -2.0和2.0之间的数字。正值会根据新标记在文本中的现有频率对其进行惩罚，从而降低模型逐字重复同一行的可能性。默认为0。
)">
      <el-input v-model="general.frequency_penalty" />
    </el-form-item>
  </el-form>
</template>

<style scoped>

</style>