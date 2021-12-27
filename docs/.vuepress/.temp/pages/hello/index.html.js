export const data = {
  "key": "v-fe51d454",
  "path": "/hello/",
  "title": "Hello",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": []
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
