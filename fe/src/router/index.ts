import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("../views/El/El.vue"),
    meta: {
      transition: "animate__animated animate__fadeIn",
    },
  },
  {
    path: "/update",
    component: () => import("../views/Update.vue"),
    transition: "animate__animated animate__fadeIn",
  },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
});

export default router;
