import { Module, GetterTree, MutationTree, ActionTree } from "vuex";
import { StateTypes as RootStateTypes } from "@/store/modules/root/types";
import { MutationEnums, ActionEnums } from "./enums";
import { StateTypes, GetterTypes, MutationTypes, ActionTypes } from "./types";

const state: StateTypes = {
  technologiesLoaded: false,
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
    {
      name: "Docker",
      skill: 0.55,
      link: "https://www.docker.com/",
      logoSrc: "/vendor-icons/docker.svg",
      logoAlt: "Docker logo",
    },
    // { name: "CI/CD", skill: 0.6 },
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
    {
      name: "Jira",
      // description: `I used, created, and administered projects for both software
      //   and business projects. I architected workflows to meet business and
      //   operational needs and to ensure operational efficiency. I also developed
      //   automation rules and systems integrations to connect the platform with
      //   custom web applications.`,
      disclaimer: "* Jira is a registered trademark of Atlassian.",
      logoSrc: "/vendor-icons/jira.svg",
      logoAlt: "Jira logo",
    },
    {
      name: "Confluence",
      // description: `I have extensively used Confluence to document apps' architectures
      //   professionally. Its powerful features and deep integration with Jira
      //   ensured that my applications were always easy to understand and easy to work
      //   on. Accurate documentation ensured smooth coordination not only with the
      //   other developers, but also Systems Administrators who support the systems.`,
      disclaimer: "* Confluence is a registered trademark of Atlassian.",
      logoSrc: "/vendor-icons/confluence.svg",
      logoAlt: "Confluence logo",
    },
    {
      name: "Visual Studio Code",
      // description: `My code editor of choice. Its powerful integration with
      //   numerous plugins ensures that I work quickly, efficiently, and effectively.
      //   Built-in code formatters also ensure that my code style is consistent,
      //   readable, and adheres to best practices.`,
      disclaimer: "* Visual Studio Code is copyrighted by Microsoft.",
      logoSrc: "/vendor-icons/vscode.svg",
      logoAlt: "Visual Studio Code logo",
    },
    {
      name: "GitHub",
      // description: `I use Git on a daily basis, both personally and professionally.
      //   It allows me to ensure that my code only gets deployed when it's ready,
      //   and it enables me to collaborate with other developers smoothly. I have
      //   used both GitHub (and Bitbucket) to host my repositories and am familiar with
      //   the various workflows available on the platform.`,
      disclaimer: "* GitHub is a registered trademark of GitHub, Inc.",
      logoSrc: "/vendor-icons/github-black.svg",
      logoSrcWhenDark: "/vendor-icons/github-white.svg",
      logoAlt: "GitHub logo",
    },
    {
      name: "Bitbucket",
      // description: `I use Git on a daily basis, both personally and professionally.
      //   It allows me to ensure that my code only gets deployed when it's ready,
      //   and it enables me to collaborate with other developers smoothly. I have
      //   used both GitHub (and Bitbucket) to host my repositories and am familiar with
      //   the various workflows available on the platform.`,
      disclaimer: "* Bitbucket is a registered trademark of Atlassian.",
      logoSrc: "/vendor-icons/bitbucket.svg",
      logoAlt: "Bitbucket logo",
    },
    {
      name: "Insomnia",
      // description: `I document my REST API endpoints in a manner conformant to the
      //   OpenAPI 3 standard, ensuring reusability and clarity for both front-end and
      //   back-end developers. Well-documented APIs reduce the potential for error, serve
      //   as a contract for efficient collaboration between developers, and ensures that
      //   applications are easily maintainable and extensible for the future.`,
      disclaimer: "* Insomnia is copyrighted by Kong Inc.",
      logoSrc: "/vendor-icons/insomnia.svg",
      logoAlt: "Insomnia logo",
    },
    {
      name: "Microsoft Office",
      // description: `Of course, I am an excellent user of with traditional office
      //   productivity software like Word, Excel, and Powerpoint. I use such software
      //   to create or compile reports whenever necessary and with ease.`,
      disclaimer: "* Microsoft Office is a trademark of Microsoft.",
      logoSrc: "/vendor-icons/ms-office.svg",
      logoAlt: "Microsoft Office logo",
    },
    {
      name: "Google Workspace",
      // description: `I am well-versed with Google's productivity suite, which
      //   has been becoming more popular due to its cloud-first approach, allowing it to
      //   integrate with other web services easily and securely.`,
      disclaimer: "* Google Workspace is a registered trademark of Google.",
      logoSrc: "/vendor-icons/google-drive.png",
      logoAlt: "Google Drive logo",
    },
    {
      name: "Adobe Photoshop",
      // description: `I have been using Adobe Photoshop for over 15 years, and I can
      //   use it to supplement gaps in web design quickly. For example, I can rapidly create
      //   prototype designs, logos, and images to supplement the web design when needed.`,
      disclaimer: "* Adobe and Photoshop are registered trademarks of Adobe.",
      logoSrc: "/vendor-icons/photoshop.svg",
      logoAlt: "Adobe Photoshop logo",
    },
    {
      name: "Slack",
      disclaimer:
        "* Slack is a registered trademark of Slack Technologies, Inc.",
      logoSrc: "/vendor-icons/slack.svg",
      logoAlt: "Slack logo",
    },
    {
      name: "Discord",
      disclaimer: "* Discord is a registered trademark of Discord, Inc.",
      logoSrc: "/vendor-icons/discord-color.svg",
      logoSrcWhenDark: "/vendor-icons/discord-white.svg",
      logoAlt: "Discord logo",
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
