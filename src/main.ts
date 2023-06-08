import { createApp } from 'vue'
import './style.css'
// @ts-ignore
import App from "./App.vue"
// @ts-ignore
import router from './router/index.js'

// @ts-ignore
import store from "./store/index.js"


const app = createApp(App)
app.use(store)
app.use(router)
app.mount('#app').$nextTick(() => postMessage({ payload: 'removeLoading' }, '*'))

