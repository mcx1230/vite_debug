import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

console.log('index.js Load')

new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
