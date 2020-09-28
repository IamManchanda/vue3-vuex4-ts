//#region Imports
import {
  ActionContext,
  ActionTree,
  CommitOptions,
  createLogger,
  createStore,
  DispatchOptions,
  GetterTree,
  MutationTree,
  Store as VuexStore,
} from "vuex";
//#endregion

//#region State
export type State = {
  counter: number;
};

const state: State = {
  counter: 0,
};
//#endregion

//#region Getters
export type Getters = {
  doubleCounter(state: State): number;
};

const getters: GetterTree<State, State> & Getters = {
  doubleCounter: state => state.counter * 2,
};
//#endregion

//#region Mutations
export enum MutationTypes {
  INCREMENT_COUNTER = "INCREMENT_COUNTER",
}

export interface Mutations {
  [MutationTypes.INCREMENT_COUNTER](state: State, payload: number): void;
}

const mutations: MutationTree<State> & Mutations = {
  [MutationTypes.INCREMENT_COUNTER](state: State, payload: number) {
    state.counter += payload;
  },
};
//#endregion

//#region Actions
export type AugmentedActionContext = {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1],
  ): ReturnType<Mutations[K]>;
} & Omit<ActionContext<State, State>, "commit">;

export enum ActionTypes {
  ASYNC_INCREMENT_COUNTER = "ASYNC_INCREMENT_COUNTER",
}

export interface Actions {
  [ActionTypes.ASYNC_INCREMENT_COUNTER](
    { commit }: AugmentedActionContext,
    payload: number,
  ): Promise<void>;
}

const actions: ActionTree<State, State> & Actions = {
  [ActionTypes.ASYNC_INCREMENT_COUNTER]({ commit }, payload: number) {
    return new Promise(resolve => {
      setTimeout(() => {
        commit(MutationTypes.INCREMENT_COUNTER, payload);
        resolve();
      }, 1000);
    });
  },
};
//#endregion

//#region Store
export type Store = Omit<
  VuexStore<State>,
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

export const store = createStore({
  state,
  getters,
  mutations,
  actions,
  plugins: [createLogger()],
});

export const useStore = () => store as Store;
//#endregion
