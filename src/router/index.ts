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
        path: "",
        component: Home
      },
      {
        path: "/about",
        name: "About",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(
            /* webpackChunkName: "about" */ "../components/Default/pages/About.vue"
          )
      },
      {
        path: "/games",
        name: "Games",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(
            /* webpackChunkName: "games" */ "../components/Default/pages/GameList.vue"
          )
      },
      {
        path: "/winners",
        name: "WinnersList",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(
            /* webpackChunkName: "winners" */ "../components/Default/pages/WinnersList.vue"
          )
      },
      {
        path: "/results",
        name: "Results",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(
            /* webpackChunkName: "results" */ "../components/Default/pages/Results.vue"
          )
      }
    ]
  },
  {
    path: "",
    redirect: to => {
      return "/";
    }
  }
];
const router = new VueRouter({
  routes,
  scrollBehavior (to, from, savedRoute) {
    return { x: 0, y: 0 }
  }
});

export default router;
