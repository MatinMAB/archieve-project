<template>
  <div>
    <HomeHeader />
    <Particle/>
    <HomeTypedTitle />
  </div>
</template>

<script>
import HomeHeader from "../components/Home/HomeHeader.vue";
import HomeTypedTitle from "../components/Home/HomeTypedTitle.vue";
import Particle from "../components/Shared/Particle.vue";
export default {
  name: "Home",
  components: { Particle, HomeHeader, HomeTypedTitle },
};
</script>

<style scoped>

</style>
