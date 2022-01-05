import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-8daa1a0e","/",{"title":""},["/index.html","/index.md"]],
  ["v-415e5e20","/doc/comment/",{"title":"阅读心得"},["/doc/comment/index.html","/doc/comment/README.md"]],
  ["v-2005de0d","/doc/hello/",{"title":"不一样的烟火"},["/doc/hello/index.html","/doc/hello/README.md"]],
  ["v-7da7392f","/doc/milestone/",{"title":"里程碑"},["/doc/milestone/index.html","/doc/milestone/README.md"]],
  ["v-0656648e","/doc/summary/",{"title":"总结与计划"},["/doc/summary/index.html","/doc/summary/README.md"]],
  ["v-63d12ddb","/doc/fronted/framework/flutter/",{"title":"框架---flutter"},["/doc/fronted/framework/flutter/index.html","/doc/fronted/framework/flutter/README.md"]],
  ["v-72aab9d8","/doc/fronted/framework/micro-fronted/",{"title":"框架---微前端"},["/doc/fronted/framework/micro-fronted/index.html","/doc/fronted/framework/micro-fronted/README.md"]],
  ["v-56c1aad8","/doc/fronted/framework/react/",{"title":"框架---react"},["/doc/fronted/framework/react/index.html","/doc/fronted/framework/react/README.md"]],
  ["v-60cc2db1","/doc/fronted/framework/vue/",{"title":"框架---vue"},["/doc/fronted/framework/vue/index.html","/doc/fronted/framework/vue/README.md"]],
  ["v-c94fa5f0","/doc/fronted/scripts/js/",{"title":"scripts--- javascript相关"},["/doc/fronted/scripts/js/index.html","/doc/fronted/scripts/js/README.md"]],
  ["v-c94f5adc","/doc/fronted/scripts/ts/",{"title":"scripts---typescripts相关"},["/doc/fronted/scripts/ts/index.html","/doc/fronted/scripts/ts/README.md"]],
  ["v-239845bf","/doc/fronted/runtime/deno/",{"title":"运行时---deno"},["/doc/fronted/runtime/deno/index.html","/doc/fronted/runtime/deno/README.md"]],
  ["v-242995bf","/doc/fronted/runtime/node/",{"title":"运行时---node"},["/doc/fronted/runtime/node/index.html","/doc/fronted/runtime/node/README.md"]],
  ["v-6a31b225","/doc/fronted/runtime/serverless/",{"title":"运行时---serverless"},["/doc/fronted/runtime/serverless/index.html","/doc/fronted/runtime/serverless/README.md"]],
  ["v-13d2d71a","/doc/fronted/build/rust/",{"title":"构建---rust相关"},["/doc/fronted/build/rust/index.html","/doc/fronted/build/rust/README.md"]],
  ["v-136d001a","/doc/fronted/build/vite/",{"title":"构建---vite相关"},["/doc/fronted/build/vite/index.html","/doc/fronted/build/vite/README.md"]],
  ["v-5d3f9c29","/doc/fronted/style/base/",{"title":"style---css相关"},["/doc/fronted/style/base/index.html","/doc/fronted/style/base/README.md"]],
  ["v-1be58fb4","/doc/fronted/style/framework/",{"title":"scripts---css框架相关"},["/doc/fronted/style/framework/index.html","/doc/fronted/style/framework/README.md"]],
  ["v-5e439242","/doc/fronted/style/tool/",{"title":"style---css库相关"},["/doc/fronted/style/tool/index.html","/doc/fronted/style/tool/README.md"]],
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
