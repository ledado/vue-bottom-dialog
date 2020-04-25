<template>
  <div>
    <vue-bottom-dialog v-model="dialog" :height="140">
      <div style="margin: 24px; display: flex;">
        <div style="height: 64px; width: 64px; background: #FFF;"></div>
        <div style="flex: auto; padding-left: 24px;">
          Product name <br /><br />
          Description
        </div>
        <div>
          <div style="padding: 8px; background: #80e27e; border-radius: 5px">Add</div>
        </div>
      </div>
    </vue-bottom-dialog>
    <div @click="dialog = true">open</div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      dialog: true,
    }
  }
};
</script>

<style>
  @import url("https://fonts.googleapis.com/css?family=Questrial");

  body {
    font-family: "Questrial";
  }
</style>
