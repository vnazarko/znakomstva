import { createApp } from 'vue'
import { createPinia } from 'pinia'
import AOSPlugin from '@/plugins/aos.js'

import App from './App.vue'
import router from './router'

const app = createApp(App)

const pinia = createPinia()

app.use(pinia)
app.use(router)
app.use(AOSPlugin);

app.mount('#app')
