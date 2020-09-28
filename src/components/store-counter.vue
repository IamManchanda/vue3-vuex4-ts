<template>
  <div class="component-store-counter">
    <div class="button-container">
      <button
        class="tw-btn tw-btn-blue"
        :class="disableButtons === true ? 'tw-btn-disabled' : ''"
        @click="handleIncrement"
      >
        Increment
      </button>
      <button
        class="tw-btn tw-btn-red"
        :class="disableButtons === true ? 'tw-btn-disabled' : ''"
        @click="handleAsyncIncrement"
      >
        Increment (1s)
      </button>
    </div>
    <h4>Current Count: {{ counter }} | Double Count: {{ doubleCounter }}</h4>
  </div>
</template>

<script lang="ts">
//#region Imports
import { computed, defineComponent, reactive, toRefs } from "vue";
import { ActionTypes, MutationTypes, useStore } from "@/store";
//#endregion

export default defineComponent({
  name: "component-store-counter",
  setup() {
    //#region useComposables
    const store = useStore();
    //#endregion

    //#region Reactive References
    const state = reactive({
      disableButtons: false,
      counter: computed(() => store.state.counter),
      doubleCounter: computed(() => store.getters.doubleCounter),
    });
    //#endregion

    //#region Watchers
    //#endregion

    //#region Lifecycle hooks
    //#endregion

    //#region Methods
    function handleIncrement() {
      store.commit(MutationTypes.INCREMENT_COUNTER, 1);
    }

    async function handleAsyncIncrement() {
      try {
        state.disableButtons = true;
        await store.dispatch(ActionTypes.ASYNC_INCREMENT_COUNTER, 1);
      } finally {
        state.disableButtons = false;
      }
    }
    //#endregion

    return {
      ...toRefs(state),
      handleIncrement,
      handleAsyncIncrement,
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
