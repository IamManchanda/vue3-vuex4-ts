<template>
  <div class="page-index">
    <h1>This is an index page</h1>
    <store-counter />
  </div>
</template>

<script lang="ts">
//#region Imports
import { defineComponent, reactive, toRefs } from "vue";
import StoreCounter from "@/components/store-counter.vue";
//#endregion

export default defineComponent({
  name: "page-index",
  components: {
    StoreCounter,
  },
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
.page-index {
}
</style>
