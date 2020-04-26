import Vue from 'vue';
import VueBottomDialog from '@/vue-bottom-dialog';

import App from './App.vue';

Vue.use(VueBottomDialog);

new Vue({
  el: '#app',
  render: createElement => createElement(App)
});
