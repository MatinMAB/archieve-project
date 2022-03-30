<template>
  <div>
    <BackButton />
    <Particle />
    <ForgetPasswordForm />
  </div>
</template>

<script>
import Particle from "../components/Shared/Particle.vue";
import BackButton from "../components/Shared/BackButton.vue";
import ForgetPasswordForm from "../components/ForgetPassword/ForgetPasswordForm.vue";
export default {
  name: "Login",
  components: { BackButton, Particle, ForgetPasswordForm },
};
</script>

<style scoped></style>
