<template>
  <div class="back-button">
    <v-btn
      class="mx-2"
      fab
      dark
      medium
      color="pallete2"
      @click="$router.push('/')"
    >
      <v-icon large color="pallete3"> mdi-home </v-icon>
    </v-btn>
    <v-btn
      class="mx-2"
      fab
      dark
      medium
      color="pallete2"
      @click="$router.go(-1)"
    >
      <v-icon large color="pallete3"> mdi-arrow-left-bold </v-icon>
    </v-btn>
  </div>
</template>

<script>
export default {
  name: "BackButton",
};
</script>

<style scoped>
.back-button {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  position: absolute;
  top: 2.5rem;
  left: 1.5rem;
  z-index: 100;
}
</style>
