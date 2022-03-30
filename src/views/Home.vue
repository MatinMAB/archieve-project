<template>
  <div>
    <HomeNavbar />
    <Particle/>
    <HomeTypedTitle />
  </div>
</template>

<script>
import HomeNavbar from "../components/Home/HomeNavbar.vue";
import HomeTypedTitle from "../components/Home/HomeTypedTitle.vue";
import Particle from "../components/Shared/Particle.vue";
export default {
  name: "Home",
  components: { Particle, HomeNavbar, HomeTypedTitle },
};
</script>

<style scoped>

</style>
