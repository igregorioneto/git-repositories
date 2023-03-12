import { createApp } from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router'
import store from './store'

createApp(App).use(store).use(router).use(VueRouter).mount('#app')
