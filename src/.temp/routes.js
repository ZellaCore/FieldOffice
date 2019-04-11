export default [
  {
    name: "vblogHtmlBlogPostOne",
    path: "/vblog-html/blog-post-one",
    component: () => import(/* webpackChunkName: "component--vblog-html-blog-post-one" */ "/home/ian/Codes/fo-git/FieldOffice/src/pages/VblogHtml/blogPostOne.vue"),
    meta: { isStatic: true }
  },
  {
    name: "team",
    path: "/team",
    component: () => import(/* webpackChunkName: "component--team" */ "/home/ian/Codes/fo-git/FieldOffice/src/pages/Team.vue"),
    meta: { isStatic: true }
  },
  {
    name: "jir",
    path: "/jir",
    component: () => import(/* webpackChunkName: "component--jir" */ "/home/ian/Codes/fo-git/FieldOffice/src/pages/JIR.vue"),
    meta: { isStatic: true }
  },
  {
    name: "home",
    path: "/",
    component: () => import(/* webpackChunkName: "component--home" */ "/home/ian/Codes/fo-git/FieldOffice/src/pages/Index.vue"),
    meta: { isStatic: true }
  },
  {
    name: "employees",
    path: "/employees",
    component: () => import(/* webpackChunkName: "component--employees" */ "/home/ian/Codes/fo-git/FieldOffice/src/pages/Employees.vue"),
    meta: { isStatic: true }
  },
  {
    name: "employeeIndex",
    path: "/employee-index",
    component: () => import(/* webpackChunkName: "component--employee-index" */ "/home/ian/Codes/fo-git/FieldOffice/src/pages/EmployeeIndex.vue"),
    meta: { isStatic: true }
  },
  {
    name: "about",
    path: "/about",
    component: () => import(/* webpackChunkName: "component--about" */ "/home/ian/Codes/fo-git/FieldOffice/src/pages/About.vue")
  },
  {
    name: "404",
    path: "/404",
    component: () => import(/* webpackChunkName: "component--404" */ "/home/ian/Codes/fo-git/FieldOffice/node_modules/gridsome/app/pages/404.vue"),
    meta: { isStatic: true, isIndex: false }
  },
  {
    path: "/blog/blog-post-one",
    component: () => import(/* webpackChunkName: "component--post" */ "/home/ian/Codes/fo-git/FieldOffice/src/templates/Post.vue")
  },
  {
    path: "/blog/blog-post-three",
    component: () => import(/* webpackChunkName: "component--post" */ "/home/ian/Codes/fo-git/FieldOffice/src/templates/Post.vue")
  },
  {
    path: "/blog/blog-post-two",
    component: () => import(/* webpackChunkName: "component--post" */ "/home/ian/Codes/fo-git/FieldOffice/src/templates/Post.vue")
  },
  {
    name: "*",
    path: "*",
    component: () => import(/* webpackChunkName: "component--404" */ "/home/ian/Codes/fo-git/FieldOffice/node_modules/gridsome/app/pages/404.vue"),
    meta: { isStatic: true, isIndex: false }
  }
]

