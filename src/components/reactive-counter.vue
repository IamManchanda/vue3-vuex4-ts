<template>
  <div class="component-reactive-counter">
    <div class="button-container">
      <button
        class="tw-btn tw-btn-teal"
        :class="disableButtons ? 'tw-btn-disabled' : ''"
        @click="handleIncrement"
      >
        Increment
      </button>
      <button
        class="tw-btn tw-btn-red"
        :class="disableButtons ? 'tw-btn-disabled' : ''"
        @click="handleTimeoutIncrement"
      >
        Increment (1s)
      </button>
    </div>
    <h4>Current Count: {{ count }} | Double Count: {{ doubleCount }}</h4>
  </div>
</template>

<script lang="ts">
/* eslint-disable @typescript-eslint/no-use-before-define */
//#region Imports
import {
  computed,
  defineComponent,
  onUnmounted,
  reactive,
  toRefs,
  watch,
} from "vue";
import { useStore } from "@/store";
import {
  GetterConstants as CounterGetterConstants,
  MutationConstants as CounterMutationConstants,
  ActionConstants as CounterActionConstants,
} from "@/store/modules/counter/constants";
//#endregion

export default defineComponent({
  name: "component-reactive-counter",
  setup() {
    //#region useComposables
    const store = useStore();
    //#endregion

    //#region Reactive References
    const state = reactive({
      disableButtons: false,
      count: computed(() => store.state.counter.count),
      doubleCount: computed(getDoubleCount),
    });
    //#endregion

    //#region Watchers
    watch(() => state.count, watchCounter);
    //#endregion

    //#region Lifecycle hooks
    onUnmounted(() => {
      handleResetCount();
    });
    //#endregion

    //#region Methods
    function watchCounter(newValue: number, oldValue: number) {
      console.log("The counter has changed!", {
        newValue,
        oldValue,
      });
    }

    function getDoubleCount() {
      return store.getters[CounterGetterConstants.GetDoubleCount];
    }

    function handleResetCount() {
      store.commit(CounterMutationConstants.HandleResetCount, undefined);
    }

    function handleIncrement() {
      if (!state.disableButtons) {
        store.commit(CounterMutationConstants.HandleIncrement, 1);
      }
    }

    async function handleTimeoutIncrement() {
      if (!state.disableButtons) {
        try {
          state.disableButtons = true;
          await store.dispatch(
            CounterActionConstants.HandleTimeoutIncrement,
            1,
          );
        } finally {
          state.disableButtons = false;
        }
      }
    }
    //#endregion

    return {
      ...toRefs(state),
      handleIncrement,
      handleTimeoutIncrement,
    };
  },
});
</script>

<style lang="scss" scoped>
.component-reactive-counter {
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
