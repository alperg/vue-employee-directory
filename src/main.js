import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import App from './App.vue';

Vue.config.productionTip = false;

// Import the styles directly
import './assets/styles//bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(BootstrapVue);

new Vue({
  render: h => h(App),
}).$mount('#app');
