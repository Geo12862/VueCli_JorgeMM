import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import BootstrapVue from 'bootestrap-vue'

createApp(App).use(store).use(router).mount('#app')
