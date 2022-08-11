<template>
  <v-form ref="addNewFileForm">
    <v-row justify="end">
      <v-dialog v-model="dialog" persistent max-width="600px">
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            class="ma-3"
            depressed
            color="pallete4"
            v-bind="attrs"
            v-on="on"
          >
            <span class="text-h6">افزودن فایل جدید</span>
            <v-icon class="mr-1">mdi-file-plus</v-icon>
          </v-btn>
        </template>
        <v-card>
          <v-card-title>
            <span class="text-h4 ma-4 mb-0 font-weight-bold new-file-title"
              >افزودن فایل جدید</span
            >
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    v-model="file.name"
                    label="عنوان فایل *"
                    :rules="[
                      (value) => !!value || 'فیلد عنوان فایل الزامی است',
                    ]"
                    prepend-inner-icon="mdi-file-plus"
                    color="pallete2"
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-file-input
                    v-model="file.selectedInputFile"
                    :rules="[
                      (value) => !!value || 'فیلد انتخاب فایل الزامی است',
                    ]"
                    prepend-inner-icon="mdi-file"
                    label="انتخاب فایل"
                    color="pallete2"
                  ></v-file-input>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
          <v-card-actions class="mr-4 mt-n4 pb-4">
            <v-btn color="red darken-1 text-h6" dark @click="cancelAddFile()">
              انصراف
            </v-btn>
            <v-btn color="green darken-1 text-h6" dark @click="addFile()">
              ثبت
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </v-form>
</template>

<script>
import axios from "axios";

export default {
  name: "AddNewFileForm",
  data() {
    return {
      dialog: false,
      file: {
        name: "",
        selectedInputFile: null,
      },
      userData: JSON.parse(localStorage.getItem("user")) || false,
      snackbar: false,
    };
  },
  methods: {
    cancelAddFile() {
      this.dialog = false;
    },
    addFile() {
      if (this.$refs.addNewFileForm.validate()) {
        let data = new FormData();
        data.append(
          "file",
          new Blob([JSON.stringify(this.file.selectedInputFile)], { type: "application/json" })
        );
        console.log(data);

        console.log(this.file.selectedInputFile);
        // axios
        //   .post(
        //     "http://127.0.0.1:8008/file/add/",
        //     {
        //       company: this.$route.params.id,
        //       name: this.file.name,
        //       file: this.file.selectedInputFile,
        //     },
        //     {
        //       headers: {
        //         Authorization: "Bearer " + this.userData.tokens.access,
        //       },
        //     }
        //   )
        //   .then((response) => {
        //     console.log(response.data);
        //     this.dialog = false;
        //     this.snackbar = true;

        //     console.log(this.companies);
        //   })
        //   .catch((response) => {
        //     console.log(response.data);
        //   });
      } else {
        this.$refs.addNewFileForm.validate();
      }
    },
  },
};
</script>

<style scoped>
.new-file-title {
  color: #5fb7e4;
}
</style>
