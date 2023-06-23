import { createWebHistory, createRouter } from "vue-router";
import Home from "@/Home.vue"
import Alert from "@/pages/Alert.vue";
import Badge from "@/pages/Badge.vue";
import Breadcrumb from "@/pages/Breadcrumb.vue";

const routes = [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/alert",
      name: "Alert",
      component: Alert,
    },
    {
      path: "/badge",
      name: "Badge",
      component: Badge,
    },
    {
      path: "/breadcrumb",
      name: "Breadcrumb",
      component: Breadcrumb,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});
  
export default router;