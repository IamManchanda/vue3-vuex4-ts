<template>
  <div class="page-index">
    <h1>This is an index page</h1>
    <store-counter />
  </div>
</template>

<script lang="ts">
//#region Imports
import { defineComponent } from "vue";
import StoreCounter from "@/components/store-counter.vue";
//#endregion

export default defineComponent({
  name: "page-index",
  components: {
    StoreCounter,
  },
});
</script>

<style lang="scss" scoped>
.page-index {
}
</style>
