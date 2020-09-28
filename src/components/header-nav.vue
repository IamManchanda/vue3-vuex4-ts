<template>
  <div class="component-header-nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/counter">Counter</router-link>
  </div>
</template>

<script lang="ts">
//#region Imports
import { defineComponent } from "vue";
//#endregion

export default defineComponent({
  name: "component-header-nav",
});
</script>

<style lang="scss" scoped>
.component-header-nav {
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
