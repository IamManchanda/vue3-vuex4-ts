<template>
  <div class="page-index">
    <h1>This is an index page</h1>
    <p class="tw-mt-6">
      <strong>
        Please navigate to the counter page <br />
        for state management (vuex) functionality.
      </strong>
    </p>
  </div>
</template>

<script lang="ts">
//#region Imports
import { defineComponent } from "vue";
//#endregion

export default defineComponent({
  name: "page-index",
});
</script>

<style lang="scss" scoped>
.page-index {
}
</style>
