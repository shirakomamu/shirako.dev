import { Module, GetterTree, MutationTree, ActionTree, ModuleTree } from "vuex";
import generalModule from "@/store/modules/general";
import { MutationEnums, ActionEnums } from "./enums";
import { StateTypes, GetterTypes, MutationTypes, ActionTypes } from "./types";

const state: StateTypes = {
  root: true,
  version: "0.0.1",
};

const getters: GetterTree<StateTypes, StateTypes> & GetterTypes = {
  getVersion: (state) => state.version,
};

const mutations: MutationTree<StateTypes> & MutationTypes = {
  [MutationEnums.SET_VERSION](state, payload) {
    state.version = payload;
  },
};

const actions: ActionTree<StateTypes, StateTypes> & ActionTypes = {
  [ActionEnums.COMMIT_VERSION]({ commit }, payload) {
    commit(MutationEnums.SET_VERSION, payload);
  },
};

// Modules
const modules: ModuleTree<StateTypes> = {
  generalModule,
};

export default {
  state,
  getters,
  mutations,
  actions,
  modules,
} as Module<StateTypes, StateTypes>;
