import {
  Store as VuexStore,
  CommitOptions,
  ActionContext,
  DispatchOptions,
} from "vuex";
import { StateTypes as RootStateTypes } from "@/store/modules/root/types";
import { MutationEnums, ActionEnums } from "./enums";
import {
  MergedTechnology,
  Technology,
  TechnologySkillBreakpointLabel,
  Tool,
} from "./state-types";

export interface StateTypes {
  technologiesLoaded: boolean;
  technologies: Technology[];
  labelBreakpoints: TechnologySkillBreakpointLabel[];
  tools: Tool[];
}

export interface GetterTypes {
  technologiesLoaded(state: StateTypes): boolean;
  technologies(state: StateTypes): MergedTechnology[];
  tools(state: StateTypes): Tool[];
}

export type MutationTypes<S = StateTypes> = {
  [MutationEnums.SET_LOADED](state: S): void;
};

type AugmentedActionContext = Omit<
  ActionContext<StateTypes, RootStateTypes>,
  "getters" | "commit" | "dispatch"
> & {
  getters: {
    [K in keyof GetterTypes]: ReturnType<GetterTypes[K]>;
  };
  commit<K extends keyof MutationTypes>(
    key: K,
    payload?: Parameters<MutationTypes[K]>[1]
  ): ReturnType<MutationTypes[K]>;
  dispatch<K extends keyof ActionTypes>(
    key: K,
    payload?: Parameters<ActionTypes[K]>[1],
    options?: DispatchOptions
  ): Promise<ReturnType<ActionTypes[K]>>;
};

export interface ActionTypes {
  [ActionEnums.COMMIT_PUSH](
    { commit }: AugmentedActionContext,
    payload: Technology
  ): void;
}

export type StoreModuleTypes<S = StateTypes> = Omit<
  VuexStore<S>,
  "getters" | "commit" | "dispatch"
> & {
  getters: {
    [K in keyof GetterTypes]: ReturnType<GetterTypes[K]>;
  };
  commit<
    K extends keyof MutationTypes,
    P extends Parameters<MutationTypes[K]>[1]
  >(
    key: K,
    payload?: P,
    options?: CommitOptions
  ): ReturnType<MutationTypes[K]>;
  dispatch<K extends keyof ActionTypes>(
    key: K,
    payload?: Parameters<ActionTypes[K]>[1],
    options?: DispatchOptions
  ): Promise<ReturnType<ActionTypes[K]>>;
};
