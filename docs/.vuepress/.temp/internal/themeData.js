export const themeData = {
  "repo": "",
  "contributors": false,
  "lastUpdated": false,
  "editLinks": false,
  "docsDir": "",
  "editLinkText": "",
  "navbar": [
    {
      "text": "首页",
      "link": "/"
    },
    {
      "text": "Github",
      "link": "https://github.com/Ssshishi/six-endeavors"
    },
    {
      "text": "tyh-Ui",
      "ariaLabel": "Language Menu",
      "children": [
        {
          "text": "tyh-ui",
          "link": "https://tianyuhao.cn/tyhui"
        },
        {
          "text": "tyh-ui2",
          "link": "https://tianyuhao.cn/tyhui/v3"
        }
      ]
    },
    {
      "text": "关于我",
      "ariaLabel": "Language Menu",
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
  "sidebar": [
    "/doc/hello",
    "/doc/milestone",
    {
      "text": "前端笔记",
      "collapsable": true,
      "children": [
        "/doc/fronted/framework/react",
        "/doc/fronted/framework/vue",
        "/doc/fronted/framework/flutter",
        "/doc/fronted/framework/micro-fronted",
        "/doc/fronted/build/rust",
        "/doc/fronted/build/vite",
        "/doc/fronted/runtime/deno",
        "/doc/fronted/runtime/node",
        "/doc/fronted/runtime/serverless",
        "/doc/fronted/scripts/js",
        "/doc/fronted/scripts/ts",
        "/doc/fronted/style/base",
        "/doc/fronted/style/framework",
        "/doc/fronted/style/tool"
      ]
    },
    "/doc/comment",
    "/doc/summary"
  ],
  "locales": {
    "/": {
      "selectLanguageName": "English"
    }
  },
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
