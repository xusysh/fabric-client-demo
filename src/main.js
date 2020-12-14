import Vue from "vue"

import App from "./App.vue"
import router from "./router"
import store from "./store"
import vuetify from "./plugins/vuetify"

import axios from "axios"

import Toast from "vue-toastification"
// Import the CSS or use your own!
import "vue-toastification/dist/index.css"

const toastOptions = {}
Vue.use(Toast, toastOptions)

Vue.config.productionTip = false
axios.defaults.baseURL =
  process.env.VUE_APP_BASE_HOST + process.env.VUE_APP_BASE_API
Vue.prototype.$axios = axios

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app")
