import './registerServiceWorker'
import './assets/tailwind.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import FIcon from '@/components/library/FIcon.vue';

const app = createApp(App);
app.component('f-icon', FIcon);

app
    .use(store)
    .use(router)
    .mount('#app')

