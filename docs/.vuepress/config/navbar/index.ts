export const navBarArr = [
  { text: '首页', link: '/' },
  { text: 'Github', link: 'https://github.com/Tyh2001/my-note-web' },
  {
    text: 'tyh-Ui',
    ariaLabel: 'Language Menu',
    children: [
      { text: 'tyh-ui', link: 'https://tianyuhao.cn/tyhui' },
      { text: 'tyh-ui2', link: 'https://tianyuhao.cn/tyhui/v3' }
    ]
  },
  {
    text: '关于我',
    ariaLabel: 'Language Menu',
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
]