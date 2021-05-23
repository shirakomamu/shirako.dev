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
    { name: "Google Cloud Platform", skill: 0.85 },
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
    // {
    //   name: "Google Cloud Platform",
    //   description: `I have deployed and used Cloud SQL, App Engine, Cloud Run,
    //     Cloud VPC, Secrets Manager, and Compute Engine. Using these technologies,
    //     I deployed stateless web applications that scaled up and down according
    //     to traffic.`,
    // },
    {
      name: "Jira",
      description: `I used, created, and administered projects for both software
        and business projects. I architected workflows to meet business and
        operational needs and to ensure operational efficiency. I also developed
        automation rules and systems integrations to connect the platform with
        custom web applications.`,
    },
    {
      name: "Visual Studio Code",
      description: `My code editor of choice. Its powerful integration with
        numerous plugins ensures that I work quickly, efficiently, and effectively.
        Built-in code formatters also ensure that my code style is consistent,
        readable, and adheres to best practices.`,
    },
    {
      name: "Git",
      description: `I use Git on a daily basis, both personally and professionally.
        It allows me to ensure that my code only gets deployed when it's ready,
        and it enables me to collaborate with other developers smoothly. I have
        used both GitHub and BitBucket to host my repositories and am familiar with
        the various workflows for both platforms.`,
    },
    {
      name: "Confluence",
      description: `I have extensively used Confluence to document apps' architectures
        professionally. Its powerful features and deep integration with Jira
        ensured that my applications were always easy to understand and easy to work
        on. Accurate documentation ensured smooth coordination not only with the
        other developers, but also Systems Administrators who support the systems.`,
    },
    {
      name: "Insomnia (OpenAPI)",
      description: `I document my REST API endpoints in a manner conformant to the
        OpenAPI standard, ensuring reusability and clarity for both front-end and
        back-end developers. Well-documented APIs reduce the potential for error, serve
        as a contract for efficient collaboration between developers, and ensures that
        applications are easily maintainable and extensible for the future.`,
    },
    {
      name: "Microsoft Word, Excel, PowerPoint",
      description: `Of course, I also am extremely familiar with traditional office
        productivity software. I can use this software to create or compile reports
        whenever necessary.`,
    },
    {
      name: "Google Docs, Sheets, Slides",
      description: `Lately, Google's offerings of productivity software has been on
        the rise due to its cloud-first approach, allowing it to integrate with
        other web services easily and securely. Building spreadsheets that contain
        scripted functionality ensures maximum business productivity and efficiency.`,
    },
    {
      name: "Adobe Photoshop",
      description: `I have been using Adobe Photoshop for over 15 years, and I can
        use it to supplement gaps in web design quickly and when necessary. For
        example, the background on this site was made in Adobe Photoshop!`,
    },
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
