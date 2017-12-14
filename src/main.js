// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './components/PruebaComponent.js'
import HttpComponent from './components/HttpComponent/HttpComponent.vue'
import '../semantic/dist/semantic.min.css'

require('semantic')

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App, HttpComponent}
})
