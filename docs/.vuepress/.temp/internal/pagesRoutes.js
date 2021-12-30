import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-8daa1a0e","/",{"title":""},["/index.html","/index.md"]],
  ["v-415e5e20","/doc/comment/",{"title":"阅读心得"},["/doc/comment/index.html","/doc/comment/README.md"]],
  ["v-7da7392f","/doc/milestone/",{"title":"里程碑"},["/doc/milestone/index.html","/doc/milestone/README.md"]],
  ["v-2005de0d","/doc/hello/",{"title":"不一样的烟火"},["/doc/hello/index.html","/doc/hello/README.md"]],
  ["v-0656648e","/doc/summary/",{"title":"总结与计划"},["/doc/summary/index.html","/doc/summary/README.md"]],
  ["v-56c1aad8","/doc/fronted/framework/react/",{"title":"react框架"},["/doc/fronted/framework/react/index.html","/doc/fronted/framework/react/README.md"]],
  ["v-3706649a","/404.html",{},["/404"]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, meta, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta,
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: "404",
      path: "/:catchAll(.*)",
      component: Vuepress,
    }
  ]
)
