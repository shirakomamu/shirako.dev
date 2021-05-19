import { Module, GetterTree, MutationTree, ActionTree } from "vuex";
import { StateTypes as RootStateTypes } from "@/store/modules/root/types";
import { MutationEnums, ActionEnums } from "./enums";
import { StateTypes, GetterTypes, MutationTypes, ActionTypes } from "./types";

const state: StateTypes = {
  technologies: [
    { name: "HTML5", skill: 0.8 },
    { name: "CSS", skill: 0.7 },
    { name: "ES6 JavaScript", skill: 1 },
    { name: "TypeScript", skill: 0.8 },
    { name: "Vue.js 2 & 3", skill: 0.9 },
    { name: "Nuxt.js", skill: 0.9 },
    { name: "Node.js", skill: 0.8 },
    { name: "Express", skill: 1 },
    { name: "MySQL", skill: 0.8 },
    { name: "PostgreSQL", skill: 0.7 },
    { name: "Docker containers", skill: 0.5 },
    { name: "CI/CD", skill: 0.5 },
    { name: "Google Cloud", skill: 0.9 },
    { name: "Google Apps Script", skill: 1 },
    { name: "Atlassian Jira", skill: 0.8 },
    { name: "Git", skill: 0.7 },
    { name: "REST APIs", skill: 0.8 },
    { name: "OAuth 2.0", skill: 0.9 },
    { name: "Progressive Web Apps (PWA)", skill: 0.7 },
    { name: "JSON Web Tokens (JWT)", skill: 0.7 },
    { name: "Visual Studio Code", skill: 0.8 },
  ],
  technologiesLoaded: false,
};

const getters: GetterTree<StateTypes, RootStateTypes> & GetterTypes = {
  technologies: (state) => {
    return state.technologies;
  },
  technologiesLoaded: (state) => {
    return state.technologiesLoaded;
  },
};

const mutations: MutationTree<StateTypes> & MutationTypes = {
  [MutationEnums.SET_LOADED](state) {
    state.technologiesLoaded = true;
  },
};

const actions: ActionTree<StateTypes, RootStateTypes> & ActionTypes = {
  [ActionEnums.COMMIT_PUSH]({ commit }) {
    commit(MutationEnums.SET_LOADED);
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
} as Module<StateTypes, RootStateTypes>;
