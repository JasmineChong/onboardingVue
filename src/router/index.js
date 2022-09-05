import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home-page.vue";
import Dragdrop from "@/views/Drag-drop.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/dragdrop",
    name: "Drag & Drop",
    component: Dragdrop,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
