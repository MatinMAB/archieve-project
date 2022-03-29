<template>
  <div>
    <HomeNavbar />
    <Particle />
  </div>
</template>

<script>
import HomeNavbar from "../components/Home/HomeNavbar.vue";
import Particle from "../components/Home/Particle.vue";
export default {
  name: "Home",
  components: { Particle, HomeNavbar },
};
</script>

<style scoped></style>
