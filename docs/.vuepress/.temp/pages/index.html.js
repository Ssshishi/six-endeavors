export const data = {
  "key": "v-8daa1a0e",
  "path": "/",
  "title": "",
  "lang": "en-US",
  "frontmatter": {
    "home": true,
    "heroImage": "/princess.png",
    "heroText": "Cishy",
    "tagline": "The six endeavors. ——稻盛和夫",
    "actionText": "start",
    "actions": [
      {
        "text": "开始",
        "link": "/hello",
        "type": "primary"
      },
      {
        "text": "Github",
        "link": "https://github.com/Tyh2001/my-blog",
        "type": "secondary"
      }
    ],
    "features": [
      {
        "title": "技术记录",
        "details": "记录自己日常开发以及精进的记录"
      },
      {
        "title": "阅读积累",
        "details": "记录自己所见，所阅的内容与心得"
      },
      {
        "title": "个人扩充",
        "details": "一些读书笔记"
      }
    ],
    "footer": "Made by cishy with ❤️"
  },
  "excerpt": "",
  "headers": [],
  "filePathRelative": "index.md"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
