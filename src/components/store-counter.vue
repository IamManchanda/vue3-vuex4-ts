<template>
  <div class="component-store-counter">
    <div class="button-container">
      <button class="tw-btn tw-btn-blue" @click="handleIncrement">
        Increment
      </button>
    </div>
    <h4>Current Count: {{ counter }}</h4>
  </div>
</template>

<script lang="ts">
//#region Imports
import { defineComponent, reactive, toRefs } from "vue";
import { useStore } from "vuex";
//#endregion

export default defineComponent({
  name: "component-store-counter",
  setup() {
    //#region useComposables
    const store = useStore();
    //#endregion

    //#region Reactive References
    const state = reactive({});

    const storedState = reactive(store.state);
    //#endregion

    //#region Watchers
    //#endregion

    //#region Lifecycle hooks
    //#endregion

    //#region Methods
    function handleIncrement() {
      store.commit("increment");
    }
    //#endregion

    return {
      ...toRefs(state),
      ...toRefs(storedState),
      handleIncrement,
    };
  },
});
</script>

<style lang="scss" scoped>
.component-store-counter {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 1.5rem;

  .button-container {
    margin-bottom: 0.5rem;
  }

  .button-container button {
    margin: 0.5rem;
    margin: 0.5rem;
  }
}
</style>
