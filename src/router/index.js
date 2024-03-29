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
    component: () =>
      import(/* webpackChunkName: "dashboard" */ "../views/Dashboard.vue"),
    children: [
      {
        path: "",
        name: "dashboard-main",
        component: () =>
          import(
            /* webpackChunkName: "dashboard-main" */ "../components/Dashboard/Main/DashboardMain.vue"
          ),
      },
      {
        path: "my-company/:id",
        name: "dashboard-my-company",
        component: () =>
          import(
            /* webpackChunkName: "dashboard-company" */ "../components/Dashboard/Company/BossDashboardCompany.vue"
          ),
      },
      {
        path: "companies/:id",
        name: "dashboard-companies",
        component: () =>
          import(
            /* webpackChunkName: "dashboard-company" */ "../components/Dashboard/Company/EmployeeDashboardCompany.vue"
          ),
      },
      {
        path: "companies/:id/users",
        name: "company-users",
        component: () =>
          import(
            /* webpackChunkName: "company-users" */ "../components/Dashboard/Company/CompanyInfo/CompanyUsers.vue"
          ),
      },
      {
        path: "companies/:id/files",
        name: "company-files",
        component: () =>
          import(
            /* webpackChunkName: "company-files" */ "../components/Dashboard/Company/CompanyInfo/CompanyFiles.vue"
          ),
      },
      {
        path: "my-account",
        name: "my-account",
        component: () =>
          import(
            /* webpackChunkName: "my-account" */ "../components/Dashboard/Account/MyAccount.vue"
          ),
      },
      {
        path: "my-history-company",
        name: "my-history-company",
        component: () =>
          import(
            /* webpackChunkName: "my-history-company'" */ "../components/Dashboard/MyHistory/MyHistoryCompany.vue"
          ),
      },
      {
        path: "my-history-file",
        name: "my-history-file",
        component: () =>
          import(
            /* webpackChunkName: "my-history-file'" */ "../components/Dashboard/MyHistory/MyHistoryFile.vue"
          ),
      },
      {
        path: "requests-company",
        name: "requests-company",
        component: () =>
          import(
            /* webpackChunkName: "requests-company'" */ "../components/Dashboard/Requests/RequestsForCompany.vue"
          ),
      },
      {
        path: "requests-file",
        name: "requests-file",
        component: () =>
          import(
            /* webpackChunkName: "requests-file'" */ "../components/Dashboard/Requests/RequestsForFile.vue"
          ),
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
