import { createApp } from 'vue'
import App from './App.vue'
import router from './sys/router'
import store from './sys/store'

createApp(App)
  .use(router)
  .use(store)
  .mount('#app')