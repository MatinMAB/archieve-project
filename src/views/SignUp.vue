<template>
  <div>
    <BackButton />
    <Particle />
    <SignUpForm />
  </div>
</template>

<script>
import Particle from "../components/Shared/Particle.vue";
import BackButton from "../components/Shared/BackButton.vue";
import SignUpForm from "../components/SignUp/SignUpForm.vue";
export default {
  name: "SignUp",
  components: { BackButton, Particle, SignUpForm },
};
</script>

<style scoped></style>
