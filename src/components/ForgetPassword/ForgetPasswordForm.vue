<template>
  <div class="forget-password-page">
    <v-card class="forget-password-box pa-4 mx-2" color="pallete2" width="350" dark>
      <v-card-title class="forget-password-title mb-3"
        >فراموشی رمز عبور</v-card-title
      >
      <v-form ref="forgetPasswordForm">
        <v-container>
          <v-row>
            <v-col cols="12">
              <v-text-field
                v-model="user.email"
                label="ایمیل *"
                :rules="[
                  (value) => !!value || 'فیلد ایمیل الزامی است',
                  (value) =>
                    /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/.test(value) ||
                    'لطفا برای بازیابی رمز عبور ایمیل معتبر وارد کنید',
                ]"
                append-icon="mdi-email"
                outlined
                shaped
              ></v-text-field>
            </v-col>
          </v-row>
          <div class="forget-password-button mt-2">
            <v-btn
              :loading="loading"
              light
              elevation="3"
              large
              color="pallete3"
              @click="Recovery()"
              ><span>بازیابی رمز عبور</span></v-btn
            >
          </div>
  
        </v-container>
      </v-form>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "ُForgetPasswordForm",
  data() {
    return {
      user: {
        email: "",
      },
      loading: false,
    };
  },
  methods: {
    login() {
      if (this.$refs.forgetPasswordForm.validate()) {
        this.loading = true;
      } else {
        this.$refs.forgetPasswordForm.validate();
      }
    },
  },
};
</script>

<style scoped>
.forget-password-page {
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99;
}
.forget-password-box {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.forget-password-title {
  font-size: 2.2rem;
}
.forget-password-button {
  display: flex;
  justify-content: center;
  align-items: center;
}
.forget-password-button span {
  font-size: 1.6rem;
}
</style>
