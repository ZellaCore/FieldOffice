export default [
  {
    name: "jir",
    path: "/jir",
    component: () => import(/* webpackChunkName: "component--jir" */ "/home/ian/Codes/vrstanClient/vrstan-fc/src/pages/JIR.vue"),
    meta: { isStatic: true }
  },
  {
    name: "home",
    path: "/",
    component: () => import(/* webpackChunkName: "component--home" */ "/home/ian/Codes/vrstanClient/vrstan-fc/src/pages/Index.vue"),
    meta: { isStatic: true }
  },
  {
    name: "employees",
    path: "/employees",
    component: () => import(/* webpackChunkName: "component--employees" */ "/home/ian/Codes/vrstanClient/vrstan-fc/src/pages/Employees.vue"),
    meta: { isStatic: true }
  },
  {
    name: "employeeIndex",
    path: "/employee-index",
    component: () => import(/* webpackChunkName: "component--employee-index" */ "/home/ian/Codes/vrstanClient/vrstan-fc/src/pages/EmployeeIndex.vue"),
    meta: { isStatic: true }
  },
  {
    name: "about",
    path: "/about",
    component: () => import(/* webpackChunkName: "component--about" */ "/home/ian/Codes/vrstanClient/vrstan-fc/src/pages/About.vue")
  },
  {
    name: "404",
    path: "/404",
    component: () => import(/* webpackChunkName: "component--404" */ "/home/ian/Codes/vrstanClient/vrstan-fc/node_modules/gridsome/app/pages/404.vue"),
    meta: { isStatic: true, isIndex: false }
  },
  {
    name: "*",
    path: "*",
    component: () => import(/* webpackChunkName: "component--404" */ "/home/ian/Codes/vrstanClient/vrstan-fc/node_modules/gridsome/app/pages/404.vue"),
    meta: { isStatic: true, isIndex: false }
  }
]

