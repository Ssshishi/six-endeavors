export const themeData = {
  "repo": "",
  "contributors": false,
  "lastUpdated": false,
  "editLinks": false,
  "docsDir": "",
  "editLinkText": "",
  "nav": [
    {
      "text": "首页",
      "link": "/"
    },
    {
      "text": "github",
      "link": "https://github.com/Ssshishi"
    },
    {
      "text": "我的",
      "children": [
        {
          "text": "个人网站",
          "link": "https://tianyuhao.cn"
        },
        {
          "text": "Gitee",
          "link": "https://gitee.com/tyh666999"
        },
        {
          "text": "微博",
          "link": "https://weibo.com/tyh2001"
        }
      ]
    },
    {
      "text": "相关链接",
      "ariaLabel": "Language Menu",
      "children": [
        {
          "text": "Vue3",
          "link": "https://v3.cn.vuejs.org"
        },
        {
          "text": "Vite",
          "link": "https://cn.vitejs.dev/"
        },
        {
          "text": "Pinia",
          "link": "https://pinia.esm.dev"
        },
        {
          "text": "VuePress",
          "link": "https://v2.vuepress.vuejs.org/zh/"
        }
      ]
    }
  ],
  "sidebar": {},
  "locales": {
    "/": {
      "selectLanguageName": "English"
    }
  },
  "navbar": [],
  "logo": null,
  "darkMode": true,
  "selectLanguageText": "Languages",
  "selectLanguageAriaLabel": "Select language",
  "sidebarDepth": 2,
  "editLink": true,
  "lastUpdatedText": "Last Updated",
  "contributorsText": "Contributors",
  "notFound": [
    "There's nothing here.",
    "How did we get here?",
    "That's a Four-Oh-Four.",
    "Looks like we've got some broken links."
  ],
  "backToHome": "Take me home",
  "openInNewWindow": "open in new window",
  "toggleDarkMode": "toggle dark mode",
  "toggleSidebar": "toggle sidebar"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
