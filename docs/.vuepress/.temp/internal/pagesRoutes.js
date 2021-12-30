import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-8daa1a0e","/",{"title":""},["/index.html","/index.md"]],
  ["v-9a7e70ae","/comment/",{"title":"阅读心得"},["/comment/index.html","/comment/README.md"]],
  ["v-fe51d454","/hello/",{"title":"不一样的烟火"},["/hello/index.html","/hello/README.md"]],
  ["v-20156478","/milestone/",{"title":"里程碑"},["/milestone/index.html","/milestone/README.md"]],
  ["v-6e373742","/summary/",{"title":"总结与计划"},["/summary/index.html","/summary/README.md"]],
  ["v-c9cc3b3e","/fronted/framework/react/",{"title":"react框架"},["/fronted/framework/react/index.html","/fronted/framework/react/README.md"]],
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
