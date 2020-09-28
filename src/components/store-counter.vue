<template>
  <div class="component-store-counter">
    <div class="button-container">
      <button
        class="tw-btn tw-btn-blue"
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
//#region Imports
import { computed, defineComponent, reactive, toRefs } from "vue";
import { useStore } from "@/store";
import {
  ActionTypes as CounterActionTypes,
  MutationTypes as CounterMutationTypes,
  GetterTypes as CounterGetterTypes,
} from "@/store/modules/counter";
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
      count: computed(() => store.state.counter.count),
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      doubleCount: computed(getDoubleCount),
    });
    //#endregion

    //#region Watchers
    //#endregion

    //#region Lifecycle hooks
    //#endregion

    //#region Methods
    function getDoubleCount() {
      return store.getters[CounterGetterTypes.COUNTER__GET_DOUBLE_COUNT];
    }

    function handleIncrement() {
      if (!state.disableButtons) {
        store.commit(CounterMutationTypes.COUNTER__HANDLE_INCREMENT, 1);
      }
    }

    async function handleTimeoutIncrement() {
      if (!state.disableButtons) {
        try {
          state.disableButtons = true;
          await store.dispatch(
            CounterActionTypes.COUNTER__HANDLE_TIMEOUT_INCREMENT,
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
