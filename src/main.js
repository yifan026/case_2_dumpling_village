import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueMaterial from 'vue-material'
import ElementUI from 'element-ui';


Vue.config.productionTip = false
Vue.use(VueMaterial)
Vue.use(ElementUI)


new Vue({
  router,
  el: '#app',
  render: h => h(App),
}).$mount('#app')
