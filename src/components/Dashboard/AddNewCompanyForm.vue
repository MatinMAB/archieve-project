<template>
  <v-form ref="addNewCompanyForm">
    <v-row justify="end">
      <v-dialog v-model="dialog" persistent max-width="600px">
        <template v-slot:activator="{ on, attrs }">
          <v-btn class="add-company-icon" icon v-bind="attrs" v-on="on">
            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <v-btn icon v-bind="attrs" v-on="on">
                  <v-icon color="success">mdi-plus-box</v-icon>
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
                  <v-text-field
                    v-model="company.phoneNumber"
                    label="شماره همراه *"
                    :rules="[
                      (value) => !!value || 'فیلد شماره همراه الزامی است',
                      (value) =>
                        !!Number(value) === true ||
                        'لطفا شماره همراه معتبر وارد کنید',
                      (value) =>
                        value.length == 11 ||
                        'لطفا شماره همراه معتبر وارد کنید',
                    ]"
                    prepend-inner-icon="mdi-phone"
                    color="pallete2"
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-file-input
                    v-model="company.imageUrl"
                    accept="image/png, image/jpeg, image/bmp"
                    prepend-inner-icon="mdi-image"
                    label="لوگوی شرکت"
                    hint="فرمت فایل های قابل قبول : png , jpeg , bmp"
                    color="pallete2"
                  ></v-file-input>
                </v-col>
                <v-col cols="12">
                  <v-textarea
                    v-model="company.extraText"
                    label="توضیحات شرکت"
                    color="pallete2"
                    prepend-inner-icon="mdi-text-long"
                  ></v-textarea>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
          <v-card-actions class="mr-4 mt-n4 pb-4">
            <v-btn
              color="red darken-1 text-h6"
              dark
              @click="cancelAddCompany()"
            >
              انصراف
            </v-btn>
            <v-btn color="green darken-1 text-h6" dark @click="addCompany()">
              ثبت
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </v-form>
</template>

<script>
export default {
  name: "AddNewCompanyForm",
  data() {
    return {
      dialog: false,
      company: {
        name: "",
        phoneNumber: "",
        imageUrl: null,
        extraText: "",
      },
    };
  },
  methods: {
    addCompany() {
      if (this.$refs.addNewCompanyForm.validate()) {
        this.dialog = false;
      } else {
        this.$refs.addNewCompanyForm.validate();
      }
    },
    cancelAddCompany() {
      this.dialog = false;
    },
  },
  created() {
    console.log(!!Number("dsa1698d9as62"));
  },
};
</script>

<style scoped>
.add-company-icon {
  margin-left: 1.2rem;
}
.new-company-title {
  color: #c2bc5b;
}
</style>
