<template>
  <div class="login-page">
    <v-card class="login-box pa-4 mx-2" color="pallete2" width="400" dark>
      <v-card-title class="login-title mb-3">ورود به داشبورد</v-card-title>
      <v-form ref="loginForm">
        <v-container>
          <v-row>
            <v-col cols="12">
              <v-text-field
                v-model="user.email"
                :rules="[(value) => !!value || 'فیلد ایمیل الزامی است']"
                append-icon="mdi-email"
                label="ایمیل *"
                outlined
                shaped
              ></v-text-field>
            </v-col>
            <v-col cols="12" class="mt-n3">
              <v-text-field
                :type="showPassword ? 'text' : 'password'"
                v-model="user.password"
                label="رمز عبور *"
                :rules="[(value) => !!value || 'فیلد رمز عبور الزامی است']"
                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append="showPassword = !showPassword"
                outlined
                shaped
              ></v-text-field>
            </v-col>
            <p
              class="text-h6 mr-4 mt-n3 pallete3--text forget-password"
              @click="goToRecoverPassword"
            >
              رمز عبور خود را فراموش کرده‌ام !
            </p>
          </v-row>
          <div class="login-button mt-4">
            <v-btn
              :loading="loading"
              light
              elevation="3"
              large
              color="pallete3"
              @click="login()"
              ><span>ورود</span></v-btn
            >
          </div>
          <div class="text-center mt-4 text-h6">
            <p>
              هنوز حساب کاربری ندارید ؟
              <router-link :to="{ name: 'sign-up' }" class="pallete3--text"
                >ایجاد حساب</router-link
              >
            </p>
          </div>
        </v-container>
      </v-form>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "LoginForm",
  data() {
    return {
      user: {
        email: "",
        password: "",
      },
      showPassword: false,
      loading: false,
    };
  },
  methods: {
    login() {
      if (this.$refs.loginForm.validate()) {
        this.loading = true;
      } else {
        this.$refs.loginForm.validate();
      }
    },
    goToRecoverPassword() {
      this.$router.push({ name: "forget-password" });
    },
  },
};
</script>

<style scoped>
.login-page {
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99;
}
.login-box {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.login-title {
  font-size: 2.6rem;
}
.login-button {
  display: flex;
  justify-content: center;
  align-items: center;
}
.login-button span {
  font-size: 1.6rem;
}
.forget-password {
  text-decoration: underline;
  cursor: pointer;
  display: inline-block;
}
</style>
