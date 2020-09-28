<template>
  <div class="page-about">
    <h1>This is an about page</h1>
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
  name: "page-about",
});
</script>

<style lang="scss" scoped>
.page-about {
}
</style>
