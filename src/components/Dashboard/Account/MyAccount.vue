<template>
  <div>
    <v-container fluid>
      <v-card class="ma-6 mx-16 pa-8">
        <v-form ref="editAccountForm">
          <v-card-title class="text-h4 font-weight-bold">
            <v-icon large color="pallete3 darken-1"> mdi-cog </v-icon>
            <span class="mr-2"> ویرایش حساب کاربری</span></v-card-title
          >
          <v-divider class="mb-8"></v-divider>
          <v-row>
            <v-col cols="12" sm="6">
              <v-text-field
                label="نام کاربری"
                :rules="[(value) => !!value || 'فیلد نام کاربری الزامی است']"
                prepend-inner-icon="mdi-account-tie"
                value="ali_1235"
                color="pallete2"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6">
              <v-text-field
                label="ایمیل"
                :rules="[
                  (value) => !!value || 'فیلد ایمیل الزامی است',
                  (value) =>
                    /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/.test(value) ||
                    'لطفا ایمیل معتبر وارد کنید',
                ]"
                prepend-inner-icon="mdi-email"
                value="matinmab789@gamil.com"
                color="pallete2"
              ></v-text-field>
            </v-col>
          </v-row>
          <div class="text-left my-4">
            <v-btn
              text
              outlined
              class="text-h5 font-weight-bold"
              @click="isShowGhangePassword = !isShowGhangePassword"
              >تغییر رمز عبور</v-btn
            >
          </div>
          <v-row v-if="isShowGhangePassword" class="password-box mb-1">
            <v-col cols="12" sm="6">
              <v-text-field
                :type="showPassword ? 'text' : 'password'"
                v-model="password.new"
                label="رمز عبور جدید"
                :rules="[
                  (value) => !!value || 'فیلد رمز عبور الزامی است',
                  (value) =>
                    value.length >= 8 ||
                    'تعداد ارقام رمز عبور شما باید بیشتر از 7 باشد',
                ]"
                prepend-inner-icon="mdi-lock"
                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append="showPassword = !showPassword"
                counter
                color="pallete2"
              ></v-text-field>
            </v-col>
            <v-col>
              <v-text-field
                :type="showPassword ? 'text' : 'password'"
                v-model="password.again"
                label="تکرار رمز عبور جدید"
                :rules="[
                  (value) => !!value || 'فیلد رمز عبور الزامی است',
                  (value) =>
                    value === password.new || 'تکرار رمز عبور نادرست است',
                ]"
                prepend-inner-icon="mdi-lock"
                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append="showPassword = !showPassword"
                counter
                color="pallete2"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" class="d-flex align-center">
              <p class="text-h5">جنسیت :</p>
              <v-radio-group
                v-model="gender"
                mandatory
                row
                class="radio-button"
              >
                <v-radio color="pallete2" label="نامشخص" value="null"></v-radio>
                <v-radio color="pallete2" label="آقا" value="male"></v-radio>
                <v-radio color="pallete2" label="خانم" value="female"></v-radio>
              </v-radio-group>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" class="d-flex align-center">
              <p class="text-h5">دریافت اعلان درخواست‌ها از طریق پیامک :</p>
              <v-switch
                v-model="isGetNotif"
                class="mt-n5 mr-4"
                color="pallete2"
                :value="isGetNotif"
                hide-details
              ></v-switch>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" class="d-flex align-center">
              <v-btn color="success" class="ma-1 text-h6" @click="edit">
                ویرایش
              </v-btn>
              <v-btn color="warning" class="ma-1 text-h6">
                بازگردانی مقادیر
              </v-btn>
            </v-col>
          </v-row>
        </v-form>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "MyAccount",
  data() {
    return {
      gender: null,
      isGetNotif: true,
      isShowGhangePassword: false,
      password: {
        new: "",
        again: "",
      },
      showPassword: false,
    };
  },
  methods: {
    edit() {
      if (this.$refs.editAccountForm.validate()) {
        console.log("ok");
      } else {
        this.$refs.editAccountForm.validate();
      }
    },
  },
};
</script>

<style scoped>
.radio-button {
  margin-top: 0.2rem;
}
.password-box {
  animation: passwordBox 0.3s linear forwards;
}

@keyframes passwordBox {
  0% {
    transform: translateY(-8rem);
    opacity: 0;
    visibility: hidden;
  }
  100% {
    transform: translateY(0rem);
    opacity: 1;
    visibility: visible;
  }
}
</style>
