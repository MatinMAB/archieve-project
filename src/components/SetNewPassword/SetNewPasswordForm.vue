<template>
  <div class="set-new-password-page">
    <v-card
      class="set-new-password-box pa-4 mx-2"
      color="pallete2"
      width="400"
      dark
    >
      <v-card-title class="set-new-password-title mb-3"
        >تنظیم رمز عبور جدید</v-card-title
      >
      <v-form ref="setNewPasswordForm">
        <v-container>
          <v-row>
            <v-col cols="12">
              <v-text-field
                :value="user.email"
                disabled
                :rules="[(value) => !!value || 'فیلد ایمیل الزامی است']"
                append-icon="mdi-email"
                label="ایمیل"
                outlined
                shaped
              ></v-text-field>
            </v-col>
            <v-col cols="12" class="mt-n3">
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
          <div class="set-new-password-button mt-4">
            <v-btn
              :loading="loading"
              light
              elevation="3"
              large
              color="pallete3"
              @click="login()"
              ><span>ثبت رمز جدید</span></v-btn
            >
          </div>
        </v-container>
      </v-form>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "SetNewPasswordForm",
  data() {
    return {
      user: {
        email: "sample@gmail.com",
        password: "",
        againPassword: "",
      },
      showPassword: false,
      loading: false,
    };
  },
  methods: {
    login() {
      if (this.$refs.setNewPasswordForm.validate()) {
        this.loading = true;
      } else {
        this.$refs.setNewPasswordForm.validate();
      }
    },
  },
};
</script>

<style scoped>
.set-new-password-page {
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99;
}
.set-new-password-box {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.set-new-password-title {
  font-size: 2.6rem;
}
.set-new-password-button {
  display: flex;
  justify-content: center;
  align-items: center;
}
.set-new-password-button span {
  font-size: 1.6rem;
}
</style>
