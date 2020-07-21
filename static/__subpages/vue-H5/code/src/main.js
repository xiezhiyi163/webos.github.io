import Vue from 'vue'
import App from './App'
import router from './router'
import './css/style.css'
import scrollReveal from 'scrollreveal'
import axios from 'axios'

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload)
Vue.prototype.$ajax = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})

Vue.prototype.scrollReveal = scrollReveal();
Vue.prototype.ani = function () {
  this.scrollReveal.reveal('.showUp', {
    duration: 500,
    origin: 'top',
    reset: true,
    mobile: true,
    distance: '1rem',
    opacity: 0,
    easing: 'linear',
    scale: 1,
  });
  this.scrollReveal.reveal('.showRight', {
    duration: 450,
    origin: 'right',
    reset: true,
    mobile: true,
    distance: '1rem',
    opacity: 0,
    easing: 'linear',
    scale: 1,
  });
  this.scrollReveal.reveal('.showDown', {
    duration: 500,
    origin: 'bottom',
    reset: true,
    mobile: true,
    distance: '1rem',
    opacity: 0,
    easing: 'linear',
    scale: 1,
  });
  this.scrollReveal.reveal('.showLeft', {
    duration: 450,
    origin: 'left',
    reset: true,
    mobile: true,
    distance: '1rem',
    opacity: 0,
    easing: 'linear',
    scale: 1,
  });
};
