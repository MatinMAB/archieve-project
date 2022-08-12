<template>
  <v-form ref="addNewCompanyForm">
    <v-row justify="end">
      <v-dialog v-model="dialog" persistent max-width="600px">
        <template v-slot:activator="{ on, attrs }">
          <v-btn class="add-company-icon" icon v-bind="attrs" v-on="on">
            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <v-btn icon v-bind="attrs" v-on="on">
                  <v-icon color="light-green accent-2">mdi-plus-box</v-icon>
                </v-btn>
              </template>
              <span>ثبت شرکت جدید</span>
            </v-tooltip>
          </v-btn>
        </template>
        <v-card>
          <v-card-title>
            <span class="text-h4 ma-4 mb-0 font-weight-bold new-company-title"
              >ایجاد شرکت جدید</span
            >
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    v-model="company.name"
                    label="نام شرکت *"
                    :rules="[(value) => !!value || 'فیلد نام شرکت الزامی است']"
                    prepend-inner-icon="mdi-domain"
                    color="pallete2"
                  ></v-text-field>
                </v-col>

                <v-col cols="12">
                  <v-file-input
                    v-model="company.image"
                    accept="image/png, image/jpeg, image/bmp"
                    prepend-inner-icon="mdi-image"
                    label="لوگوی شرکت"
                    hint="فرمت فایل های قابل قبول : png , jpeg , bmp"
                    color="pallete2"
                  ></v-file-input>
                </v-col>
                <v-col cols="12">
                  <v-textarea
                    v-model="company.description"
                    label="توضیحات شرکت"
                    color="pallete2"
                    prepend-inner-icon="mdi-text-long"
                  ></v-textarea>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
          <p v-show="error" class="mr-8 mt-n4 pb-4 red--text text-h6">
            {{ error }}
          </p>
          <v-card-actions class="mr-4 mt-n4 pb-4">
            <v-btn
              color="red darken-1 text-h6"
              dark
              @click="cancelAddCompany()"
            >
              انصراف
            </v-btn>
            <v-btn
              color="green darken-1 text-h6"
              dark
              @click="addCompany()"
              :loading="loading"
            >
              ثبت
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <v-snackbar
        color="green accent-3 black--text"
        v-model="snackbar"
        :timeout="5000"
      >
        ثبت شرکت شما با موفقیت انجام شد

        <template v-slot:action="{ attrs }">
          <v-btn color="red" text v-bind="attrs" @click="snackbar = false">
            بستن
          </v-btn>
        </template>
      </v-snackbar>
    </v-row>
  </v-form>
</template>

<script>
import axios from "axios";

export default {
  name: "AddNewCompanyForm",
  data() {
    return {
      dialog: false,
      company: {
        name: "",
        image: null,
        description: "",
      },
      error: "",
      userData: JSON.parse(localStorage.getItem("user")) || false,
      snackbar: false,
      loading: false,
    };
  },
  methods: {
    addCompany() {
      if (this.$refs.addNewCompanyForm.validate()) {
        this.loading = true;
        let data = new FormData();
        data.append("manager", "");
        data.append("name", this.company.name);
        data.append("image", this.company.image);
        data.append("description", this.company.description);
        axios
          .post("http://127.0.0.1:8008/company/create/", data, {
            headers: {
              Authorization: "Bearer " + this.userData.tokens.access,
            },
          })
          .then((response) => {
            if (!!response.data.message) {
              this.error =
                "امکان ثبت شرکت جدید نیست. شما صاحب شرکت " +
                response.data.message +
                " هستید.";
              this.loading = false;
            } else if (
              response.data.name[0] == "company with this name already exists."
            ) {
              this.error = "شرکتی با این نام قبلا در سیستم ثبت شده است.";
              this.loading = false;
            } else {
              this.dialog = false;
              this.snackbar = true;
              this.error = "";
              this.loading = false;
            }
          })
          .catch((response) => {
            console.log(response.data);
            this.loading = false;
          });
      } else {
        this.$refs.addNewCompanyForm.validate();
      }
    },
    cancelAddCompany() {
      this.dialog = false;
      this.company.name = "";
      this.company.image = null;
      this.company.description = "";
    },
  },
};
</script>

<style scoped>
.add-company-icon {
  margin-left: 1.2rem;
}
.new-company-title {
  color: #5fb7e4;
}
</style>
