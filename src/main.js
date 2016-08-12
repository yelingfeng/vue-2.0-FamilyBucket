import Vue from 'vue'
import App from './App.vue'
import router from "./router"
import store from "./store"
import { sync } from 'vuex-router-sync'
import vueResource from "vue-resource"
import $ from "jquery"
import "./assets/china"
import "bootstrap/dist/js/bootstrap.min"
import "bootstrap/dist/css/bootstrap.min.css"
import "./assets/css/reset.css"

console.log = (function(log){
  return function(obj){
    log.call(console,JSON.parse(JSON.stringify(obj)));
  }
})(console.log);

sync(store, router)

Vue.use(vueResource);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app")
