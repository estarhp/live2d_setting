import { createApp } from 'vue'
import './style.css'
// @ts-ignore
import App from "./App.vue"
// @ts-ignore
import router from './router/index.js'

createApp(App).use(router).mount('#app').$nextTick(() => postMessage({ payload: 'removeLoading' }, '*'))

