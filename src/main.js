// CSS
import './assets/main.css'

// VUE
import { createApp } from 'vue'
import App from '@/App.vue'

// PINIA
import { createPinia } from 'pinia'

const pinia = createPinia()

createApp(App)
.use(pinia)
.mount('#app')
