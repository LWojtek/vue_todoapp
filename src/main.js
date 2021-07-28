import Vue from 'vue'
import App from './App.vue'
import store from './store'
import UUID from "vue-uuid";
 
Vue.use(UUID);

Vue.config.productionTip = false
Vue.prototype.bus = new Vue();

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
