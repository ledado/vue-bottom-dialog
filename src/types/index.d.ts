import Vue, { PluginFunction } from 'vue';

export class VueBottomDialog {
  constructor(options?: VueBottomDialogOptions);

  static install(): PluginFunction<any>;
  // static init(Vue: Vue, store: Store<any>): void;
  static init(Vue: Vue, store: any): void;
}

export interface VueBottomDialogOptions extends Object {
  accessorName?: string
}

declare module 'vue/types/vue' {
  interface Vue {
    $vueBottomDialog: VueBottomDialog;
    __$VueBottomDialogInstance: VueBottomDialog;
  }
}

declare module 'vue/types/options' {
  interface ComponentOptions<V extends Vue> {
    vueBottomDialogSettings?: VueBottomDialogOptions | VueBottomDialog
  }
}
