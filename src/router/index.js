import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import RegistrationView from "../views/RegistrationView.vue";
import ConfirmRegistrationView from "@/views/ConfirmRegistrationView.vue";
import ImprintView from "@/views/ImprintView.vue";
import DataPrivacyView from "@/views/DataPrivacyView.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/registration",
    name: "Registration",
    component: RegistrationView,
  },
  {
    path: "/confirmation",
    name: "ConfirmationScreen",
    component: ConfirmRegistrationView,
  },
  {
    path: "/imprint",
    name: "Imprint",
    component: ImprintView,
  },
  {
    path: "/data-privacy",
    name: "DataPrivacy",
    component: DataPrivacyView,
  },
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});

export default router;
