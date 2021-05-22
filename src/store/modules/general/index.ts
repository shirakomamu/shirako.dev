import { Module, GetterTree, MutationTree, ActionTree } from "vuex";
import { StateTypes as RootStateTypes } from "@/store/modules/root/types";
import { MutationEnums, ActionEnums } from "./enums";
import { StateTypes, GetterTypes, MutationTypes, ActionTypes } from "./types";

const state: StateTypes = {
  technologiesLoaded: false,
  technologies: [
    { name: "HTML5", skill: 0.85 },
    { name: "CSS", skill: 0.8 },
    { name: "ES6 JavaScript", skill: 1 },
    { name: "TypeScript", skill: 0.85 },
    { name: "Vue.js 2 & 3", skill: 0.9 },
    { name: "Nuxt.js", skill: 0.95 },
    { name: "Node.js", skill: 0.85 },
    { name: "Express", skill: 0.9 },
    { name: "MySQL", skill: 0.85 },
    { name: "PostgreSQL", skill: 0.7 },
    { name: "Docker containers", skill: 0.55 },
    { name: "CI/CD", skill: 0.6 },
    { name: "Google Apps Script", skill: 1 },
    { name: "REST APIs", skill: 0.85 },
    { name: "OAuth 2.0", skill: 0.85 },
    { name: "Progressive Web Apps (PWA)", skill: 0.65 },
    { name: "JSON Web Tokens (JWT)", skill: 0.8 },
    { name: "Responsive Design", skill: 0.85 },
  ].sort((a, b) => b.skill - a.skill),
  labelBreakpoints: [
    {
      skill: 0,
      label: "No experience",
    },
    {
      skill: 0.5,
      label: "Some experience",
    },
    {
      skill: 0.7,
      label: "Comfortable",
    },
    {
      skill: 0.8,
      label: "Proficient",
    },
    {
      skill: 0.9,
      label: "Confident",
    },
    {
      skill: 1,
      label: "Skilled",
    },
  ].sort((a, b) => b.skill - a.skill),
  tools: [
    "Google Cloud Platform",
    "Jira Software",
    "Visual Studio Code",
    "Git (GitHub, BitBucket)",
    "Microsoft Word, Excel, PowerPoint",
    "Google Docs, Sheets, Slides",
    "Adobe Photoshop",
    "Inkscape",
  ],
};

const getters: GetterTree<StateTypes, RootStateTypes> & GetterTypes = {
  technologiesLoaded: (state) => state.technologiesLoaded,
  technologies: (state) => {
    return state.technologies.map((e) => {
      const breakpoint = state.labelBreakpoints.find((f) => e.skill >= f.skill);

      return {
        ...e,
        label: breakpoint?.label || "",
      };
    });
  },
  tools: (state) => state.tools,
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
