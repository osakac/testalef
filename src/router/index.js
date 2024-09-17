import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/form",
    name: "form",
    component: () => import("../views/FormPage/FormPage.vue"),
  },
  {
    path: "/preview",
    alias: "/",
    name: "preview",
    component: () => import("../views/PreviewPage/PreviewPage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
