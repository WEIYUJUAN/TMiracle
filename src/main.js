import "./flexible"
import "./assets/styles/index.scss"
import { createApp } from "vue"
import App from "./App.vue"
import naive from 'naive-ui'
import router from "./route"
import store from './store'
createApp(App)
  .use(naive)
  .use(router)
  .use(store)
  .mount("#app")
