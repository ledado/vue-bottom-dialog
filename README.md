# VueBottomDialog

Simple mobile customizable dialog.

### DEMO
Sandbox: https://codesandbox.io/s/2h39y
<p align="center">
  <img src="https://media.giphy.com/media/VIW1hxFkhcAKrTx9tc/giphy.gif" style="width:227px;height:480px;">
</p>

## Installation

### 1. Install
```
yarn add vue-bottom-dialog
# or
npm i vue-bottom-dialog --save
```

### 2. Plug-in
```js
import VueBottomDialog from 'vue-bottom-dialog'

Vue.use(VueBottomDialog)

new Vue({
  // your vue config
  vueBottomDialogSettings: new VueBottomDialog(),
})
```

### 3. Use in your components

Component can be controlled with a v-model.

```vue
<template>
  <vue-bottom-dialog v-model="dialog" />
</template>

<script>
  export default {
    data: () => {
        return {
          dialog: true,
        };
      },
  };
</script>
```

### Properties

| Name            | Required | Type          | Default     | Description |
| ---             | ---      | ---           | ---         | ---         |
| height          | false | Number           | 100         | Dialog have fixed height |
| backgroundColor | false | String           | #757575     | Background color |
| overlayColor    | false | String           | rgba(255, 255, 255, 0.5)     | Outside dialog background color |
| hideIndent      | false | Boolean          | false       | If true, indent will be hidden |
| indentColor     | false | String           | #FFF        | Color of indent |
| topRadius       | false | String           | 20px        | Radius of top corners |


## License
MIT
