import {
  Store as VuexStore,
  CommitOptions,
  ActionContext,
  DispatchOptions,
} from "vuex";
import { StateTypes as GeneralStateTypes } from "@/store/modules/general/types";
import { StoreActions } from "@/store/interfaces";
import { MutationEnums, ActionEnums } from "./enums";

export interface StateTypes {
  root: boolean;
  version: string;
}

export interface MergedStateTypes extends StateTypes {
  generalModule: GeneralStateTypes;
}

export interface GetterTypes {
  getVersion(state: StateTypes): string;
}

export type MutationTypes<S = StateTypes> = {
  [MutationEnums.SET_VERSION](state: S, payload: string): void;
};

type AugmentedActionContext = {
  commit<K extends keyof MutationTypes>(
    key: K,
    payload?: Parameters<MutationTypes[K]>[1]
  ): ReturnType<MutationTypes[K]>;
} & Omit<ActionContext<StateTypes, StateTypes>, "commit"> & {
    dispatch<K extends keyof StoreActions>(
      key: K,
      payload?: Parameters<StoreActions[K]>[1],
      options?: DispatchOptions
    ): ReturnType<StoreActions[K]>;
  };

export interface ActionTypes {
  [ActionEnums.COMMIT_VERSION](
    { commit }: AugmentedActionContext,
    payload: string
  ): void;
}

export type StoreModuleTypes<S = StateTypes> = Omit<
  VuexStore<S>,
  "commit" | "getters" | "dispatch"
> & {
  commit<
    K extends keyof MutationTypes,
    P extends Parameters<MutationTypes[K]>[1]
  >(
    key: K,
    payload?: P,
    options?: CommitOptions
  ): ReturnType<MutationTypes[K]>;
} & {
  getters: {
    [K in keyof GetterTypes]: ReturnType<GetterTypes[K]>;
  };
} & {
  dispatch<K extends keyof ActionTypes>(
    key: K,
    payload?: Parameters<ActionTypes[K]>[1],
    options?: DispatchOptions
  ): ReturnType<ActionTypes[K]>;
};
