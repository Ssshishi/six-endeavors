const { description } = require("../../package");
const { navBarArr } = require("./config/navbar");
const { sideBarArr } = require("./config/sidebar");

module.exports = {
  title: "Cishy",
  description: description,

  head: [["link", { rel: "icon", href: "./princess.jpeg" }]],

  themeConfig: {
    repo: "",
    contributors: false,
    lastUpdated: "更新时间",
    editLinks: false,
    docsDir: "",
    editLinkText: "",
    lastUpdated: false,
    navbar: navBarArr,
    sidebar: sideBarArr,
  },

  plugins: ["@vuepress/plugin-back-to-top", "@vuepress/plugin-medium-zoom"],
};
