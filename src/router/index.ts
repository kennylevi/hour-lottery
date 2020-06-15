import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../components/Default/pages/Home.vue";
import Index from "../components/Default/Index.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    component: Index,
    children: [
      {
        path: '',
        component: Home
      },
      {
        path: "/about",
        name: "About",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "about" */ "../components/Default/pages/About.vue")
      }
    ]
  },
  { path: '', redirect: to => {
    return '/';
  }},
];
const router = new VueRouter({
  routes
});

export default router;
