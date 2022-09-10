import { defineStore } from "pinia";

interface Technology {
  name: string;
  link?: string;
  logoSrc?: string;
  logoSrcWhenDark?: string;
  logoAlt?: string;
}

interface Tool {
  name: string;
  logoSrc?: string;
  logoSrcWhenDark?: string;
  logoAlt?: string;
}

const technologies: Technology[] = [
  {
    name: "HTML5",
    link: "https://www.w3.org/TR/html5/",
    logoSrc: "/vendor-icons/html5.svg",
    logoAlt: "HTML5 logo",
  },
  {
    name: "CSS3",
    link: "https://www.w3.org/Style/CSS/Overview.en.html",
    logoSrc: "/vendor-icons/css3.svg",
    logoAlt: "CSS3 logo",
  },
  {
    name: "JavaScript",
    link: "https://www.ecma-international.org/publications-and-standards/standards/ecma-262/",
    logoSrc: "/vendor-icons/javascript.svg",
    logoAlt: "JavaScript logo",
  },
  {
    name: "TypeScript",
    link: "https://www.typescriptlang.org/",
    logoSrc: "/vendor-icons/typescript.svg",
    logoAlt: "TypeScript logo",
  },
  {
    name: "Vue.js",
    link: "https://vuejs.org/",
    logoSrc: "/vendor-icons/vue.svg",
    logoAlt: "Vue logo",
  },
  {
    name: "Nuxt.js",
    link: "https://nuxtjs.org/",
    logoSrc: "/vendor-icons/nuxt.svg",
    logoSrcWhenDark: "/vendor-icons/nuxt-white.svg",
    logoAlt: "Nuxt logo",
  },
  {
    name: "Node.js",
    link: "https://nodejs.org/",
    logoSrc: "/vendor-icons/nodejs.svg",
    logoSrcWhenDark: "/vendor-icons/nodejs-white.svg",
    logoAlt: "Node.js logo",
  },
  {
    name: "Express",
    link: "https://expressjs.com/",
    logoSrc: "/vendor-icons/expressjs.svg",
    logoSrcWhenDark: "/vendor-icons/expressjs-white.svg",
    logoAlt: "Express logo",
  },
  {
    name: "MySQL",
    link: "https://www.mysql.com/",
    logoSrc: "/vendor-icons/mysql.svg",
    logoAlt: "MySQL logo",
  },
  {
    name: "PostgreSQL",
    link: "https://www.postgresql.org/",
    logoSrc: "/vendor-icons/postgresql.svg",
    logoAlt: "PostgreSQL logo",
  },
  {
    name: "Google Apps Script",
    link: "https://developers.google.com/apps-script/",
    logoSrc: "/vendor-icons/google-apps-script.svg",
    logoAlt: "Google Apps Script logo",
  },
  {
    name: "Google Cloud Platform",
    link: "https://cloud.google.com/",
    logoSrc: "/vendor-icons/gcp.svg",
    logoAlt: "Google Cloud Platform logo",
  },
  {
    name: "Git",
    link: "https://git-scm.com/",
    logoSrc: "/vendor-icons/git-color.png",
    logoSrcWhenDark: "/vendor-icons/git-white.png",
    logoAlt: "Git logo",
  },
  {
    name: "Redis",
    link: "https://redis.io/",
    logoSrc: "/vendor-icons/redis.svg",
    logoAlt: "Redis logo",
  },
  {
    name: "Jest",
    link: "https://jestjs.io/",
    logoSrc: "/vendor-icons/jest.svg",
    logoAlt: "Jest logo",
  },
  {
    name: "Vitest",
    link: "https://vitest.dev/",
    logoSrc: "/vendor-icons/vitest.svg",
    logoAlt: "Vitest logo",
  },
];

const tools: Tool[] = [
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
];

export const useGeneralStore = defineStore({
  id: "general",
  state: () => ({ isBioRead: false, technologies, tools }),
  actions: {
    markBioAsRed(readState: boolean): void {
      this.isBioRead = readState;
    },
  },
});
