import Vue from 'vue';
import App from './App'
import router from './router'
import BootstrapVue from 'bootstrap-vue';
import Toasted from 'vue-toasted';

Vue.use(BootstrapVue);
Vue.use(Toasted, {
  position: 'top-center',
  duration: 1500
});

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
