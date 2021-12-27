const { description } = require('../../package')

module.exports = {
  
  title: 'Cishy',
  description: description,

  head: [
    ['link', {rel:'icon', href: './princess.jpeg'}]
  ],

  themeConfig: {
    repo: '',
    contributors: false,
    lastUpdated: '更新时间',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: '首页',
        link: '/',
      },
      {
        text: 'github',
        link: 'https://github.com/Ssshishi',
      },
      {
        text: '我的',
        children: [
          { text: '个人网站', link: 'https://tianyuhao.cn' },
          { text: 'Gitee', link: 'https://gitee.com/tyh666999' },
          { text: '微博', link: 'https://weibo.com/tyh2001' }
        ]
      },
      {
        text: '相关链接',
        ariaLabel: 'Language Menu',
        children: [
          { text: 'Vue3', link: 'https://v3.cn.vuejs.org' },
          { text: 'Vite', link: 'https://cn.vitejs.dev/' },
          { text: 'Pinia', link: 'https://pinia.esm.dev' },
          { text: 'VuePress', link: 'https://v2.vuepress.vuejs.org/zh/' }
        ]
      }
    ],
    sidebar: {}
  },

  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
