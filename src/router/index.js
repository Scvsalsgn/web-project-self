import { createWebHistory, createRouter } from "vue-router";
import App from "../App.vue";
import InteractiveCommunity from "../../pages/mainPage/InteractiveCommunity.vue";

const routes = [
  {
    path: "/App",
    name: "App",
    component: App,
  },
  {
    path: "/community",
    name: "community",
     component: InteractiveCommunity,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;