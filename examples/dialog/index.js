import Vue from 'vue';
import VueBottomDialog from '@/vue-bottom-dialog';

import App from './App.vue';

Vue.use(VueBottomDialog);

new Vue({
  el: '#app',
  vueBottomDialogSettings: new VueBottomDialog(),
  render: createElement => createElement(App)
});
