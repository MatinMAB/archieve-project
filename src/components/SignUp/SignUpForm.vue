<template>
  <div class="signup-page">
    <v-card class="signup-box pa-4 mx-2" color="pallete2" width="450" dark>
      <v-card-title class="signup-title mb-3"
        >ایجاد حساب در سامانه</v-card-title
      >
      <v-form ref="SignUpForm">
        <v-container>
          <v-row>
            <v-col cols="12">
              <v-text-field
                v-model="user.name"
                :rules="[(value) => !!value || 'فیلد نام کاربری الزامی است']"
                label="نام کاربری *"
                append-icon="mdi-account-tie"
                outlined
                shaped
              ></v-text-field>
            </v-col>
            <v-col cols="12" class="mt-n4">
              <v-text-field
                v-model="user.email"
                label="ایمیل *"
                :rules="[
                  (value) => !!value || 'فیلد ایمیل الزامی است',
                  (value) =>
                    /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/.test(value) ||
                    'لطفا ایمیل معتبر وارد کنید',
                ]"
                append-icon="mdi-email"
                outlined
                shaped
              ></v-text-field>
            </v-col>
            <v-col cols="12" class="mt-n4">
              <v-text-field
                :type="showPassword ? 'text' : 'password'"
                v-model="user.password"
                label="رمز عبور *"
                :rules="[
                  (value) => !!value || 'فیلد رمز عبور الزامی است',
                  (value) =>
                    value.length >= 8 ||
                    'تعداد ارقام رمز عبور شما باید بیشتر از 7 باشد',
                ]"
                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append="showPassword = !showPassword"
                counter
                outlined
                shaped
              ></v-text-field>
            </v-col>
            <v-col cols="12" class="mt-n4">
              <v-text-field
                :type="showPassword ? 'text' : 'password'"
                v-model="user.againPassword"
                label="تکرار رمز عبور *"
                :rules="[
                  (value) => !!value || 'فیلد رمز عبور الزامی است',
                  (value) =>
                    value === user.password || 'تکرار رمز عبور نادرست است',
                ]"
                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append="showPassword = !showPassword"
                counter
                outlined
                shaped
              ></v-text-field>
            </v-col>
          </v-row>
          <div class="signup-button">
            <v-btn
              :loading="loading"
              light
              elevation="3"
              large
              color="pallete3"
              @click="login()"
              ><span>ثبت نام</span></v-btn
            >
          </div>
          <div class="text-center mt-4 text-h6">
            <p>
              از قبل حساب کاربری دارید ؟
              <router-link :to="{ name: 'login' }" class="pallete3--text"
                >ورود به حساب</router-link
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
  name: "ُSignUpForm",
  data() {
    return {
      user: {
        name: "",
        email: "",
        password: "",
        againPassword: "",
      },
      showPassword: false,
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
