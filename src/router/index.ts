import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "page-index",
    component: () =>
      import(/* webpackChunkName: "page-index" */ "../views/index.vue"),
  },
  {
    path: "/about",
    name: "page-about",
    component: () =>
      import(/* webpackChunkName: "page-about" */ "../views/about.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return {
        top: 0,
      };
    }
  },
});

export default router;
