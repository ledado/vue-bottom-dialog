import { devMode } from './utils';
import VueTouch from 'vue-touch';

import VueBottomDialogComponent from './vue-bottom-dialog-component.vue';

export default class VueBottomDialog {
  constructor(options = {}) {
    const defaults = {
      accessorName: '$vueBottomDialog'
    };
    this.options = { ...defaults, ...options };
  }

  static mixin = () => ({});
}

export function install(Vue) {
  const isDev = devMode();
  if (install.installed && Vue) {
    if (isDev) {
      console.warn(
        '[vue-bottom-dialog] already installed. Vue.use(VueBottomDialog) should be called only once.'
      );
    }
    return;
  }

  Vue.component('VueBottomDialog', VueBottomDialogComponent);

  Vue.use(VueTouch, { name: 'v-touch' });

  install.installed = true;
  if (isDev) {
    console.info('[vue-bottom-dialog] is plugged in.');
  }
}

VueBottomDialog.install = install;
