/*
Nuxt.js module for vue-bottom-dialog
Usage:
    - Install vue-bottom-dialog package
    - Add this into your nuxt.config.js file:
    {
        modules: [
            // Simple usage
            'vue-bottom-dialog/nuxt'
            // Optionally passing options in module configuration
            ['vue-bottom-dialog/nuxt', { ...options }]
        ],
        // Optionally passing options in module top level configuration
        VueBottomDialog: { ...options }
    }
*/

const { resolve } = require('path');

module.exports = function nuxtVueWaitModule(moduleOptions) {
  const options = Object.assign({}, this.options.VueBottomDialog, moduleOptions);

  // Register plugin
  this.addPlugin({
    src: resolve(__dirname, 'vue-bottom-dialog-plugin.template.js.tpl'),
    fileName: 'vue-bottom-dialog-plugin.js',
    options: options
  });
};

// required by nuxt
module.exports.meta = require('../package.json');
