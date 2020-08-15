import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/components/pages/Home";
import Viewer from "@/components/pages/Viewer";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/viewer",
    name: "Viewer",
    component: Viewer
  }
];

const router = new VueRouter({
  mode: "history",
  base: "/",
  routes
});

export default router;
