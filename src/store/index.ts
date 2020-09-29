//#region Imports
import { createLogger, createStore } from "vuex";
import {
  State as CounterState,
  CounterStore,
  CounterModule,
} from "./modules/counter";
//#endregion

//#region State
export type State = {
  counter: CounterState;
};
//#endregion

//#region Store
export type Store = CounterStore<Pick<State, "counter">>;

export const store = createStore({
  plugins: process.env.NODE_ENV === "production" ? [] : [createLogger()],
  modules: {
    counter: CounterModule,
  },
});

export function useStore(): Store {
  return store as Store;
}

export default store;
//#endregion
