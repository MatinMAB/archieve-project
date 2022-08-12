<template>
  <v-container>
    <v-card class="ma-6 mx-10 pa-8">
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
              :value="userData.user.username"
              color="pallete2"
              readonly
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
              :value="userData.user.email"
              readonly
              color="pallete2"
            ></v-text-field>
          </v-col>
        </v-row>
        <div class="text-left my-4">
          <v-btn
            text
            outlined
            class="text-h5 font-weight-bold"
            @click="showPasswordBox()"
            >تغییر رمز عبور</v-btn
          >
        </div>
        <v-row v-if="isShowGhangePassword" class="password-box mb-1">
          <v-col cols="12" sm="6">
            <v-text-field
              :type="showPassword ? 'text' : 'password'"
              v-model="password.current"
              label="رمز عبور فعلی"
              :rules="[(value) => !!value || 'فیلد رمز عبور فعلی الزامی است']"
              prepend-inner-icon="mdi-lock"
              :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
              @click:append="showPassword = !showPassword"
              counter
              color="pallete2"
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6"> </v-col>
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
          <v-col cols="12" sm="6">
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
          <v-col cols="12">
            <p v-if="response" class="mb-n12 mr-2 text-h6 " :class="response == 'رمز عبور با موفقیت تغییر کرد.' ? 'green--text' : 'red--text'">
              {{ response }}
            </p>
          </v-col>
          <v-col cols="12" class="d-flex align-center">
            <v-btn color="warning" class="ma-1 text-h6" @click="edit">
              ویرایش
            </v-btn>
          </v-col>
        </v-row>
      </v-form>
    </v-card>
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  name: "MyAccount",
  data() {
    return {
      userData: JSON.parse(localStorage.getItem("user")) || false,
      isShowGhangePassword: false,
      password: {
        new: "",
        again: "",
        current: "",
      },
      showPassword: false,
      response: "",
    };
  },
  methods: {
    showPasswordBox() {
      this.isShowGhangePassword = !this.isShowGhangePassword;
      this.password.current = "";
      this.password.again = "";
      this.password.new = "";
      this.response = "";
    },
    edit() {
      if (this.$refs.editAccountForm.validate()) {
        axios
          .post(
            "http://127.0.0.1:8008/user/change_password/",
            {
              current_password: this.password.current,
              new_password: this.password.new,
              new_password_confirm: this.password.again,
            },
            {
              headers: {
                Authorization: "Bearer " + this.userData.tokens.access,
              },
            }
          )
          .then((res) => {
            this.response = res.data.message;
          })
          .catch((res) => {
            this.response = "برقراری ارتباط با سرور دچار مشکل است";
          });
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
