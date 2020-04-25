import Vue from 'vue';
import VueTouch from 'vue-touch';
import { storiesOf } from '@storybook/vue';

import VueBottomDialog from '../src/vue-bottom-dialog';

Vue.use(VueTouch);
Vue.use(VueBottomDialog);

const withSettings = component => ({
  vueBottomDialogSettings: new VueBottomDialog(),
  ...component
});

const stories = storiesOf('VueBottomDialog', module);

stories
  // Add some stories here to make your plugin more descriptive
  .add(
    'Vue bottom dialog',
    () =>
      withSettings({
        template: `
        <div>
          <vue-bottom-dialog :value="true" />
        </div>
      `
      }),
    {
      notes: `
        # Using \`vue-bottom-dialog\`

        \`\`\`html
        <template>
          <vue-bottom-dialog :value="true" />
        </template>
        \`\`\`
      `
    }
  );
