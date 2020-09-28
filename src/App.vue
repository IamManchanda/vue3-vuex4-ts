<template>
  <div class="app-container">
    <header-nav />
    <router-view />
  </div>
</template>

<script lang="ts">
//#region Imports
import { defineComponent } from "vue";

import HeaderNav from "@/components/header-nav.vue";
//#endregion

export default defineComponent({
  name: "app-container",
  components: {
    HeaderNav,
  },
});
</script>

<style lang="scss" scoped>
.app-container {
}
</style>
