import { createApp } from 'vue'
import App from './app.vue'
import shadow-wind from '@shadow-wind/components'
const app = createApp(App)
app.use(shadow-wind)
app.mount('#app')
