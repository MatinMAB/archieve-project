<template>
  <v-app-bar color="pallete3" dense elevation="3" app>
    <v-app-bar-nav-icon @click="$emit('change-drawer')"></v-app-bar-nav-icon>

    <v-toolbar-title class="text-h5">داشبورد</v-toolbar-title>

    <v-spacer></v-spacer>

    <AddNewCompanyIcon />

    <v-tooltip bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-btn icon v-bind="attrs" v-on="on">
          <v-badge content="1" value="1" color="pallete1" overlap>
            <v-icon>mdi-bell</v-icon>
          </v-badge>
        </v-btn>
      </template>
      <span>اعلان ها</span>
    </v-tooltip>

    <v-tooltip bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-btn icon v-bind="attrs" v-on="on" @click="logout()">
          <v-icon>mdi-logout</v-icon>
        </v-btn>
      </template>
      <span>خروج</span>
    </v-tooltip>
  </v-app-bar>
</template>

<script>
import AddNewCompanyIcon from "./AddNewCompanyForm.vue";

export default {
  name: "DashboardHeader",
  components: {
    AddNewCompanyIcon,
  },
  data() {
    return {};
  },
  methods: {
    logout() {
      this.$router.push("/login");
    },
  },
};
</script>

<style scoped></style>
