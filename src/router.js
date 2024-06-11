import { createRouter, createWebHistory } from "vue-router";
import Movie from "./components/Movie.vue";
import Cart from "./components/cart.vue";
import SelectSit from "./components/selectSit.vue";

const routes = [
  {
    path: "/",
    name: "movie",
    component: Movie,
  },
  {
    path: "/cart",
    name: "cart",
    component: Cart,
  },
  {
    path: "/selectSit",
    name: "selectSit",
    component: SelectSit,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
