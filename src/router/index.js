import Vue from "vue";
import VueRouter from "vue-router";

import HomeView from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/login",
    name: "login",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/Login.vue"),
  },
  {
    path: "/sign-up",
    name: "sign-up",
    component: () =>
      import(/* webpackChunkName: "sign-up" */ "../views/SignUp.vue"),
  },
  {
    path: "/forget-password",
    name: "forget-password",
    component: () =>
      import(
        /* webpackChunkName: "forget-password" */ "../views/ForgetPassword.vue"
      ),
  },
  {
    path: "/set-new-password",
    name: "set-new-password",
    component: () =>
      import(
        /* webpackChunkName: "set-new-password" */ "../views/SetNewPassword.vue"
      ),
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: () =>
      import(/* webpackChunkName: "dashboard" */ "../views/Dashboard.vue"),
    children: [
      {
        path: "",
        name: "dashboard-main",
        component: () =>
          import(/* webpackChunkName: "dashboard-main" */ "../components/Dashboard/Main/DashboardMain.vue"),
      },
      {
        path: "companies/:id",
        name: "dashboard-company",
        component: () =>
          import(/* webpackChunkName: "dashboard-company" */ "../components/Dashboard/Company/DashboardCompany.vue"),
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
