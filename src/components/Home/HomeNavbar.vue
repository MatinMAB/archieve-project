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
      <v-btn tile color="pallete3" light class="text-h5">
        <v-icon left> mdi-login </v-icon>
        <span>ورود</span>
      </v-btn>
      <v-btn tile color="pallete3" class="mr-3 text-h5" light>
        <v-icon left> mdi-account-plus </v-icon>
        <span>ثبت نام</span>
      </v-btn>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "HomeNavbar",
};
</script>

<style scoped>
.navbar {
  position: sticky;
  top: 0;
  right: 0;
  z-index: 99;
  transform: translateY(-8rem);
  animation: navbar 0.9s ease-in-out forwards;
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
