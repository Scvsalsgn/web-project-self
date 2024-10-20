import { createWebHistory, createRouter } from "vue-router";
import App from "../App.vue";
import interactiveCommunity from "../../pages/mainPage/interactiveCommunity.vue";

const routes = [
  {
    path: "/App",
    name: "App",
    component: App,
  },
  {
    path: "/community",
    name: "community",
     component: interactiveCommunity,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;