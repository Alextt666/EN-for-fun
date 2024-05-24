import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    redirect: "/el",
  },
  {
    path: "/el",
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
  history: createWebHistory(),
  routes, // short for `routes: routes`
});

export default router;
