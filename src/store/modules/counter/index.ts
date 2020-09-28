//#region Imports
import {
  ActionContext,
  ActionTree,
  CommitOptions,
  DispatchOptions,
  GetterTree,
  Module,
  MutationTree,
  Store as VuexStore,
} from "vuex";
import { State as RootState } from "@/store";
import {
  GETTER_CONSTANTS,
  MUTATION_CONSTANTS,
  ACTION_CONSTANTS,
} from "./constants";
//#endregion

//#region State
export type State = {
  count: number;
};

const state: State = {
  count: 0,
};
//#endregion

//#region Getters
export type Getters = {
  [GETTER_CONSTANTS.COUNTER__GET_DOUBLE_COUNT](state: State): number;
};

const getters: GetterTree<State, RootState> & Getters = {
  [GETTER_CONSTANTS.COUNTER__GET_DOUBLE_COUNT]: state => state.count * 2,
};
//#endregion

//#region Mutations
export interface Mutations {
  [MUTATION_CONSTANTS.COUNTER__HANDLE_INCREMENT](
    state: State,
    payload: number,
  ): void;
}

const mutations: MutationTree<State> & Mutations = {
  [MUTATION_CONSTANTS.COUNTER__HANDLE_INCREMENT](
    state: State,
    payload: number,
  ) {
    state.count += payload;
  },
};
//#endregion

//#region Actions
export type AugmentedActionContext = {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1],
  ): ReturnType<Mutations[K]>;
} & Omit<ActionContext<State, RootState>, "commit">;

export interface Actions {
  [ACTION_CONSTANTS.COUNTER__HANDLE_TIMEOUT_INCREMENT](
    { commit }: AugmentedActionContext,
    payload: number,
  ): Promise<void>;
}

const actions: ActionTree<State, RootState> & Actions = {
  [ACTION_CONSTANTS.COUNTER__HANDLE_TIMEOUT_INCREMENT](
    { commit },
    payload: number,
  ) {
    return new Promise(resolve => {
      setTimeout(() => {
        commit(MUTATION_CONSTANTS.COUNTER__HANDLE_INCREMENT, payload);
        resolve();
      }, 1000);
    });
  },
};
//#endregion

//#region Store Type & Module
export type CounterStore<S = State> = Omit<
  VuexStore<S>,
  "commit" | "getters" | "dispatch"
> & {
  commit<K extends keyof Mutations, P extends Parameters<Mutations[K]>[1]>(
    key: K,
    payload: P,
    options?: CommitOptions,
  ): ReturnType<Mutations[K]>;
} & {
  getters: {
    [K in keyof Getters]: ReturnType<Getters[K]>;
  };
} & {
  dispatch<K extends keyof Actions>(
    key: K,
    payload: Parameters<Actions[K]>[1],
    options?: DispatchOptions,
  ): ReturnType<Actions[K]>;
};

export const CounterModule: Module<State, RootState> = {
  state,
  getters,
  mutations,
  actions,
};
//#endregion
