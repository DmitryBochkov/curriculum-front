import Vue from 'vue'
// import { ValidationProvider, extend } from 'vee-validate'
// import { required, regex } from 'vee-validate/dist/rules'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'

import './sass/index.sass'

// Vue.component('ValidationProvider', ValidationProvider);
// extend('required', {
//   ...required,
//   message: 'This field is required'
// });
// extend('regex', {
//   ...regex,
//   message: 'This field must be valid URL'
// });

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
