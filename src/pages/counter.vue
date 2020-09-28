<template>
  <div class="page-counter">
    <h1>This is a counter page</h1>
    <reactive-counter />
  </div>
</template>

<script lang="ts">
//#region Imports
import { defineComponent } from "vue";
import ReactiveCounter from "@/components/reactive-counter.vue";
//#endregion

export default defineComponent({
  name: "page-counter",
  components: {
    ReactiveCounter,
  },
});
</script>

<style lang="scss" scoped>
.page-counter {
}
</style>
