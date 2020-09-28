<template>
  <div class="page-about">
    <h1>This is an about page</h1>
  </div>
</template>

<script lang="ts">
//#region Imports
import { defineComponent, reactive, toRefs } from "vue";
//#endregion

export default defineComponent({
  name: "page-about",
  setup() {
    //#region Reactive References
    const state = reactive({});
    //#endregion

    //#region Watchers
    //#endregion

    //#region Lifecycle hooks
    //#endregion

    //#region Methods
    //#endregion

    return {
      ...toRefs(state),
    };
  },
});
</script>

<style lang="scss" scoped>
.page-about {
}
</style>
