import { createRouter, createWebHistory } from "vue-router";
import FirstPage from "../views/FirstPage.vue";

const routes = [
  { path: "/", name: "FirstPage", component: FirstPage },
  {
    path: "/products",
    name: "Products",
    component: () => import("../views/ProductsPage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
