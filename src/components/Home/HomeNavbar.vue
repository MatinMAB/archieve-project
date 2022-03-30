<template>
  <div class="navbar">
    <v-app-bar color="pallete2 accent-4" dense dark>
      <v-btn icon color="pallete4">
        <v-icon>mdi-school</v-icon>
      </v-btn>
      <v-toolbar-title class="toolbar-title text-h4"
        ><span> پروژه دانشگاهی</span></v-toolbar-title
      >
      <v-spacer></v-spacer>
      <v-menu left bottom v-if="$vuetify.breakpoint.xs">
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <v-icon>mdi-menu</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item @click="goToLogin()">
            <v-list-item-title>
              <v-icon left> mdi-login </v-icon>
              <span class="mr-1">ورود</span>
            </v-list-item-title>
          </v-list-item>

          <v-list-item @click="goToSignUp()">
            <v-list-item-title>
              <v-icon left> mdi-account-plus </v-icon>
              <span class="mr-1">ثبت نام</span>
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <div v-else>
        <v-btn tile color="pallete3" light class="text-h5" @click="goToLogin()">
          <v-icon left> mdi-login </v-icon>
          <span>ورود</span>
        </v-btn>
        <v-btn
          tile
          color="pallete3"
          class="mr-3 text-h5"
          light
          @click="goToSignUp()"
        >
          <v-icon left> mdi-account-plus </v-icon>
          <span>ثبت نام</span>
        </v-btn>
      </div>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "HomeNavbar",
  methods: {
    goToLogin() {
      this.$router.push({ name: "login" });
    },
    goToSignUp() {
      this.$router.push({ name: "sign-up" });
    },
  },
};
</script>

<style scoped>
.navbar {
  position: sticky;
  top: 0;
  right: 0;
  z-index: 99;
  transform: translateY(-8rem);
  animation: navbar 0.5s ease-in-out forwards;
}
.toolbar-title {
  color: #eeedde;
}

@keyframes navbar {
  0% {
    transform: translateY(-8rem);
  }
  100% {
    transform: translateY(0rem);
  }
}
</style>
