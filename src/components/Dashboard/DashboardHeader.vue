<template>
  <div>
    <v-app-bar color="pallete3" dense elevation="3" app>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title class="text-h5">داشبورد</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-home</v-icon>
      </v-btn>

      <v-btn icon>
        <v-badge content="1" value="1" color="pallete1" overlap>
          <v-icon>mdi-bell</v-icon>
        </v-badge>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-logout</v-icon>
      </v-btn>
    </v-app-bar>

    
  </div>
</template>

<script>
export default {
  name: "DashboardHeader",
  data() {
    return {};
  },
};
</script>

<style scoped></style>
