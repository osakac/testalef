import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/form",
    name: "form",
    component: () => import("../views/FormPage.vue"),
  },
  {
    path: "/preview",
    name: "preview",
    component: () => import("../views/PreviewPage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
