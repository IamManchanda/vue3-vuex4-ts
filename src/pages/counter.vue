<template>
  <div class="page-counter">
    <h1>This is a counter page</h1>
    <store-counter />
  </div>
</template>

<script lang="ts">
//#region Imports
import { defineComponent } from "vue";
import StoreCounter from "@/components/store-counter.vue";
//#endregion

export default defineComponent({
  name: "page-counter",
  components: {
    StoreCounter,
  },
});
</script>

<style lang="scss" scoped>
.page-counter {
}
</style>
