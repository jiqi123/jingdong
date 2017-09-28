import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

import "mint-ui/lib/style.css"
import "./com.js"
import "swiper/dist/css/swiper.css"


new Vue({
  el: '#app',
  router,
  template: '<div><App></App></div>',
  components: { App }
})
