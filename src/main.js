import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  created(){
    const BusComponent = Vue.extend({})
    Vue.prototype.$todoBus = new BusComponent()
  }
}).$mount('#app')
