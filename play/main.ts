import { createApp } from 'vue';
import App from './App.vue';
import chuangda from '@chuangda/components';
const app = createApp(App);
app.use(chuangda);
app.mount('#app');
