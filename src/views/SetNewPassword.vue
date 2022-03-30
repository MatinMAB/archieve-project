<template>
  <div>
    <BackButton />
    <Particle />
    <SetNewPasswordForm />
  </div>
</template>

<script>
import Particle from "../components/Shared/Particle.vue";
import SetNewPasswordForm from "../components/SetNewPassword/SetNewPasswordForm.vue";

import BackButton from "../components/Shared/BackButton.vue";
export default {
  name: "SetNewPassword",
  components: { SetNewPasswordForm, BackButton, Particle },
};
</script>

<style scoped></style>
