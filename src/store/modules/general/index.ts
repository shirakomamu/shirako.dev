import { Module, GetterTree, MutationTree, ActionTree } from "vuex";
import { StateTypes as RootStateTypes } from "@/store/modules/root/types";
import { StateTypes, GetterTypes, MutationTypes, ActionTypes } from "./types";
import { MutationEnums } from "./enums";

const state: StateTypes = {
  isBioRead: false,
  technologies: [
    {
      name: "HTML5",
      skill: 0.85,
      link: "https://html.com/html5/#What_is_HTML5",
      logoSrc: "/vendor-icons/html5.svg",
      logoAlt: "HTML5 logo",
    },
    {
      name: "CSS3",
      skill: 0.8,
      link: "https://www.w3.org/Style/CSS/Overview.en.html",
      logoSrc: "/vendor-icons/css3.svg",
      logoAlt: "CSS3 logo",
    },
    {
      name: "ES2020 JavaScript",
      skill: 1,
      link: "https://www.ecma-international.org/publications-and-standards/standards/ecma-262/",
      logoSrc: "/vendor-icons/javascript.svg",
      logoAlt: "JavaScript logo",
    },
    {
      name: "TypeScript",
      skill: 0.85,
      link: "https://www.typescriptlang.org/",
      logoSrc: "/vendor-icons/typescript.svg",
      logoAlt: "TypeScript logo",
    },
    {
      name: "Vue.js",
      skill: 0.9,
      link: "https://vuejs.org/",
      logoSrc: "/vendor-icons/vue.svg",
      logoAlt: "Vue logo",
    },
    {
      name: "Nuxt.js",
      skill: 0.95,
      link: "https://nuxtjs.org/",
      logoSrc: "/vendor-icons/nuxt.svg",
      logoSrcWhenDark: "/vendor-icons/nuxt-white.svg",
      logoAlt: "Nuxt logo",
    },
    {
      name: "Node.js",
      skill: 0.85,
      link: "https://nodejs.org/",
      logoSrc: "/vendor-icons/nodejs.svg",
      logoSrcWhenDark: "/vendor-icons/nodejs-white.svg",
      logoAlt: "Node.js logo",
    },
    {
      name: "Express",
      skill: 0.9,
      link: "https://expressjs.com/",
      logoSrc: "/vendor-icons/expressjs.svg",
      logoSrcWhenDark: "/vendor-icons/expressjs-white.svg",
      logoAlt: "Express logo",
    },
    {
      name: "MySQL",
      skill: 0.85,
      link: "https://www.mysql.com/",
      logoSrc: "/vendor-icons/mysql.svg",
      logoAlt: "MySQL logo",
    },
    {
      name: "PostgreSQL",
      skill: 0.75,
      link: "https://www.postgresql.org/",
      logoSrc: "/vendor-icons/postgresql.svg",
      logoAlt: "PostgreSQL logo",
    },
    // {
    //   name: "Docker",
    //   skill: 0.55,
    //   link: "https://www.docker.com/",
    //   logoSrc: "/vendor-icons/docker.svg",
    //   logoAlt: "Docker logo",
    // },
    {
      name: "Google Apps Script",
      skill: 1,
      link: "https://developers.google.com/apps-script/",
      logoSrc: "/vendor-icons/google-apps-script.svg",
      logoAlt: "Google Apps Script logo",
    },
    { name: "REST APIs", skill: 0.85 },
    { name: "OAuth 2.0", skill: 0.85, link: "https://oauth.net/2/" },
    { name: "Progressive Web Apps (PWA)", skill: 0.65 },
    { name: "JSON Web Tokens (JWT)", skill: 0.8 },
    { name: "Responsive Design", skill: 0.85 },
    {
      name: "Google Cloud Platform",
      skill: 0.85,
      link: "https://cloud.google.com/",
      logoSrc: "/vendor-icons/gcp.svg",
      logoAlt: "Google Cloud Platform logo",
    },
    {
      name: "Git",
      skill: 0.8,
      link: "https://git-scm.com/",
      logoSrc: "/vendor-icons/git-color.png",
      logoSrcWhenDark: "/vendor-icons/git-white.png",
      logoAlt: "Git logo",
    },
    {
      name: "MikroORM",
      skill: 0.75,
      link: "https://mikro-orm.io/",
      logoSrc: "/vendor-icons/mikroorm.svg",
      logoSrcWhenDark: "/vendor-icons/mikroorm-white.svg",
      logoAlt: "MikroORM logo",
    },
    {
      name: "Redis",
      skill: 0.75,
      link: "https://redis.io/",
      logoSrc: "/vendor-icons/redis.svg",
      logoAlt: "Redis logo",
    },
  ],
  tools: [
    {
      name: "Jira",
      logoSrc: "/vendor-icons/jira.svg",
      logoAlt: "Jira logo",
    },
    {
      name: "Confluence",
      logoSrc: "/vendor-icons/confluence.svg",
      logoAlt: "Confluence logo",
    },
    {
      name: "Visual Studio Code",
      logoSrc: "/vendor-icons/vscode.svg",
      logoAlt: "Visual Studio Code logo",
    },
    {
      name: "GitHub",
      logoSrc: "/vendor-icons/github-black.svg",
      logoSrcWhenDark: "/vendor-icons/github-white.svg",
      logoAlt: "GitHub logo",
    },
    {
      name: "Bitbucket",
      logoSrc: "/vendor-icons/bitbucket.svg",
      logoAlt: "Bitbucket logo",
    },
    {
      name: "Insomnia",
      logoSrc: "/vendor-icons/insomnia.svg",
      logoAlt: "Insomnia logo",
    },
    {
      name: "Microsoft Office",
      logoSrc: "/vendor-icons/ms-office.svg",
      logoAlt: "Microsoft Office logo",
    },
    {
      name: "Google Workspace",
      logoSrc: "/vendor-icons/google-drive.png",
      logoAlt: "Google Drive logo",
    },
    {
      name: "Adobe Photoshop",
      logoSrc: "/vendor-icons/photoshop.svg",
      logoAlt: "Adobe Photoshop logo",
    },
    {
      name: "Slack",
      logoSrc: "/vendor-icons/slack.svg",
      logoAlt: "Slack logo",
    },
    {
      name: "Discord",
      logoSrc: "/vendor-icons/discord-color.svg",
      logoSrcWhenDark: "/vendor-icons/discord-white.svg",
      logoAlt: "Discord logo",
    },
  ],
};

const getters: GetterTree<StateTypes, RootStateTypes> & GetterTypes = {
  isBioRead: (state) => state.isBioRead,
  technologies: (state) => state.technologies.sort((a, b) => b.skill - a.skill),
  tools: (state) => state.tools,
};

const mutations: MutationTree<StateTypes> & MutationTypes = {
  [MutationEnums.SET_BIO_AS_READ](state, readState) {
    state.isBioRead = readState;
  },
};

const actions: ActionTree<StateTypes, RootStateTypes> & ActionTypes = {};

export default {
  state,
  getters,
  mutations,
  actions,
} as Module<StateTypes, RootStateTypes>;
