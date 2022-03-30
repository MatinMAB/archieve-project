<template>
  <div>
    <BackButton />
    <Particle/>
    <LoginForm />
  </div>
</template>

<script>
import Particle from '../components/Shared/Particle.vue';
import LoginForm from "../components/Login/LoginForm.vue";
import BackButton from "../components/Shared/BackButton.vue";
export default {
  name: "Login",
  components: { LoginForm, BackButton, Particle },
};
</script>

<style scoped></style>
