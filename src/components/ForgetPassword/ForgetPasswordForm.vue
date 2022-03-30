<template>
  <div class="signup-page">
    <v-card class="signup-box pa-4 mx-2" color="pallete2" width="350" dark>
      <v-card-title class="signup-title mb-3"
        >فراموشی رمز عبور</v-card-title
      >
      <v-form ref="SignUpForm">
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
          <div class="signup-button mt-2">
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
  name: "ُSignUpForm",
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
      if (this.$refs.SignUpForm.validate()) {
        this.loading = true;
      } else {
        this.$refs.SignUpForm.validate();
      }
    },
  },
};
</script>

<style scoped>
.signup-page {
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99;
}
.signup-box {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.signup-title {
  font-size: 2.2rem;
}
.signup-button {
  display: flex;
  justify-content: center;
  align-items: center;
}
.signup-button span {
  font-size: 1.6rem;
}
</style>
