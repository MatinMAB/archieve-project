<template>
  <v-footer color="pallete3" padless absolute>
    <v-card-text class="py-2 black--text text-center text-h6">
      <strong>پروژه دانشگاهی سامانه مدیریت فایل</strong> — {{ 1400 }}
    </v-card-text>
    <div class="git-button">
      <v-btn
        class="mx-2"
        fab
        dark
        small
        color="pallete2"
        @click="goToProjectRepo()"
      >
        <v-icon medium color="pallete3"> mdi-github </v-icon>
      </v-btn>
    </div>
  </v-footer>
</template>

<script>
export default {
  name: "DashboardFooter",
  data() {
    return {};
  },
  methods: {
    goToProjectRepo() {
      parent.open("https://github.com/MatinMAB/archieve-project");
    },
  },
};
</script>

<style scoped>
.git-button {
  position: absolute;
  bottom: 1rem;
  left: 0.3rem;
  z-index: 100;
}
</style>
