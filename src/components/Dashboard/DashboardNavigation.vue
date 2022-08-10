<template>
  <v-navigation-drawer app right width="276" v-model="drawer" color="pallete3">
    <template v-slot:prepend>
      <v-list-item two-line>
        <v-list-item-avatar>
          <img src="https://randomuser.me/api/portraits/men/75.jpg" />
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title class="text-h5">{{
            userData.user.username
          }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </template>

    <v-divider></v-divider>

    <v-list shaped>
      <v-list-item
        @click="$router.push('/dashboard')"
        :class="{ 'active-navigation': $route.fullPath === '/dashboard' }"
        class="cursor-pointer hover-navigation-link"
      >
        <v-list-item-icon>
          <v-icon>mdi-view-dashboard</v-icon>
        </v-list-item-icon>

        <v-list-item-title class="text-h5">داشبورد</v-list-item-title>
      </v-list-item>

      <v-list-group prepend-icon="mdi-domain" color="#fff">
        <template v-slot:activator>
          <v-list-item-title class="text-h5">شرکت ها</v-list-item-title>
        </template>

        <div v-if="allMyCompanies.length > 0">
          <v-list-item
            v-for="(myCompany, i) in allMyCompanies"
            :key="i"
            class="hover-navigation-link"
            @click="$router.push(`/dashboard/companies/${myCompany.name}`)"
            :class="{
              'active-navigation': $route.fullPath.includes(
                `/dashboard/companies/${myCompany.name}`
              ),
            }"
          >
            <v-list-item-title class="text-h6 pr-8 cursor-pointer">{{
              myCompany.name
            }}</v-list-item-title>
          </v-list-item>
        </div>
        <div v-else>
          <v-list-item class="hover-navigation-link">
            <v-list-item-title class="pr-8 cursor-pointer subtitle-2">
              در حال حاضر در هیچ شرکتی عضو نمی باشید
            </v-list-item-title>
          </v-list-item>
        </div>

        <!-- <v-list-item
          class="hover-navigation-link"
          @click="$router.push('/dashboard/companies/2')"
          :class="{
            'active-navigation': $route.fullPath.includes(
              '/dashboard/companies/2'
            ),
          }"
        >
          <v-list-item-title class="text-h6 pr-8 cursor-pointer"
            >شرکت 2</v-list-item-title
          >
        </v-list-item>
        <v-list-item
          class="hover-navigation-link"
          @click="$router.push('/dashboard/companies/3')"
          :class="{
            'active-navigation': $route.fullPath.includes(
              '/dashboard/companies/3'
            ),
          }"
        >
          <v-list-item-title class="text-h6 pr-8 cursor-pointer"
            >شرکت 3</v-list-item-title
          >
        </v-list-item> -->
      </v-list-group>
      <v-list-group prepend-icon="mdi-history" color="#fff">
        <template v-slot:activator>
          <v-list-item-title class="text-h5">درخواست‌های من</v-list-item-title>
        </template>

        <v-list-item
          class="hover-navigation-link"
          @click="$router.push('/dashboard/my-history-company')"
          :class="{
            'active-navigation': $route.fullPath.includes(
              '/dashboard/my-history-company'
            ),
          }"
        >
          <v-list-item-title class="text-h6 pr-8 cursor-pointer"
            >درخواست ملحق شدن به شرکت</v-list-item-title
          >
        </v-list-item>
        <v-list-item
          class="hover-navigation-link"
          @click="$router.push('/dashboard/my-history-file')"
          :class="{
            'active-navigation': $route.fullPath.includes(
              '/dashboard/my-history-file'
            ),
          }"
        >
          <v-list-item-title class="text-h6 pr-8 cursor-pointer"
            >درخواست دسترسی به فایل</v-list-item-title
          >
        </v-list-item>
      </v-list-group>
      <v-list-group prepend-icon="mdi-archive-eye-outline" color="#fff">
        <template v-slot:activator class="hover-navigation-link">
          <v-list-item-title class="text-h5"
            >درخواست‌های دیگران</v-list-item-title
          >
        </template>

        <v-list-item
          class="hover-navigation-link"
          @click="$router.push('/dashboard/requests-company')"
          :class="{
            'active-navigation': $route.fullPath.includes(
              '/dashboard/requests-company'
            ),
          }"
        >
          <v-list-item-title class="text-h6 pr-8 cursor-pointer"
            >بررسی درخواست به شرکت</v-list-item-title
          >
        </v-list-item>
        <v-list-item
          class="hover-navigation-link"
          @click="$router.push('/dashboard/requests-file')"
          :class="{
            'active-navigation': $route.fullPath.includes(
              '/dashboard/requests-file'
            ),
          }"
        >
          <v-list-item-title class="text-h6 pr-8 cursor-pointer"
            >بررسی دسترسی به فایل</v-list-item-title
          >
        </v-list-item>
      </v-list-group>
      <v-list-item
        class="cursor-pointer hover-navigation-link"
        @click="$router.push('/dashboard/my-account')"
        :class="{
          'active-navigation': $route.fullPath.includes(
            '/dashboard/my-account'
          ),
        }"
      >
        <v-list-item-icon>
          <v-icon>mdi-account-cog</v-icon>
        </v-list-item-icon>

        <v-list-item-title class="text-h5"
          >تنظیمات حساب کاربری</v-list-item-title
        >
      </v-list-item>
      <v-list-item
        class="cursor-pointer hover-navigation-link"
        @click="logout()"
      >
        <v-list-item-icon>
          <v-icon>mdi-logout</v-icon>
        </v-list-item-icon>

        <v-list-item-title class="text-h5">خروج</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import axios from "axios";

export default {
  name: "DashboardNavigation",
  data() {
    return {
      allMyCompanies: [{}],
      userData: JSON.parse(localStorage.getItem("user")) || false,
    };
  },
  props: {
    drawer: Boolean,
  },
  methods: {
    logout() {
      localStorage.removeItem('user')
      this.$router.push("/login");
    },
  },
  created() {
    axios
      .get("http://127.0.0.1:8008/company/receive/", {
        headers: {
          Authorization: "Bearer " + this.userData.tokens.access,
        },
      })
      .then((response) => {
        this.allMyCompanies = response.data;
      })
      .catch((response) => {
        console.log(response.data);
      });
  },
};
</script>

<style scoped>
.active-navigation {
  background-color: #fff !important;
}
.cursor-pointer {
  cursor: pointer;
}
.hover-navigation-link:hover {
  background-color: rgba(255, 255, 255, 0.367);
}
</style>
