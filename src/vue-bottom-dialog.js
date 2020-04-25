import { devMode } from './utils';
import VueTouch from 'vue-touch';

import VueBottomDialogComponent from './vue-bottom-dialog-component.vue';

export default class VueBottomDialog {
  constructor(options = {}) {
    const defaults = {
      accessorName: '$vueBottomDialog',
    };
    this.options = { ...defaults, ...options };
  }

  static register = (Vue, options, store) => {
    Vue.component('VueBottomDialog', VueBottomDialogComponent);

    Vue.use(VueTouch, {name: 'v-touch'})
  };

  static mixin = () => ({});

  initialized = false;

  init(Vue, store) {
    if (devMode() && !install.installed) {
      console.warn(
        `[vue-bottom-dialog] not installed. Make sure to call \`Vue.use(VueBottomDialog)\` before init root instance.`
      );
    }

    if (this.initialized) {
      return;
    }

    VueBottomDialog.register(Vue, this.options, store);
    this.initialized = true;
  }
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

  Vue.mixin({
    /**
     * VueBottomDialog init hook, injected into each instances init hooks list.
     */
    beforeCreate() {
      const { vueBottomDialogSettings, store, parent } = this.$options;

      let instance = null;
      if (vueBottomDialogSettings) {
        instance =
          typeof vueBottomDialogSettings === 'function'
            ? new vueBottomDialogSettings()
            : new VueBottomDialog(vueBottomDialogSettings);
        instance.init(Vue, store);
      } else if (parent && parent.__$VueBottomDialogInstance) {
        instance = parent.__$VueBottomDialogInstance;
        instance.init(Vue, parent.$store);
      }

      if (instance) {
        this.__$VueBottomDialogInstance = instance;
        this[instance.options.accessorName] = instance;
      }
    },

    ...VueBottomDialog.mixin()
  });

  install.installed = true;
  if (isDev) {
    console.info('[vue-bottom-dialog] is plugged in.');
  }
}

VueBottomDialog.install = install;
