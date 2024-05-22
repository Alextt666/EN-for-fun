import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    redirect: "/el",
  },
  {
    path: "/el",
    component: () => import("../views/El.vue"),
  },
  {
    path: "/update",
    component: () => import("../views/Update.vue"),
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes, // short for `routes: routes`
});

export default router;
