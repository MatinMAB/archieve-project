<template>
  <div>
    <div v-if="message">
      <v-alert
      outlined
      type="warning"
      prominent
      border="left"
      class="ma-12"
    >
      {{message}}
    </v-alert>
      
    </div>
    <div v-else>
      <div class="d-flex justify-center align-center mt-16 flex-column">
        <v-img
          class="company-avatar"
          lazy-src="https://picsum.photos/id/11/10/6"
          max-height="100"
          max-width="100"
          src="https://picsum.photos/id/11/500/300"
        ></v-img>

        <h2 class="text-h3 font-weight-black text-center mt-2">
          شرکت {{ $route.params.id }}
        </h2>
      </div>
      <v-form>
        <v-row class="mt-12 mx-16">
          <v-col cols="0" lg="3" sm="2"></v-col>
          <v-col cols="12" lg="6" sm="8">
            <v-text-field
              filled
              v-model="searchedText"
              label="جستجوی فایل"
              @input="search()"
              color="#5fb7e4"
              background-color="pallete4"
              clearable
            ></v-text-field>
          </v-col>
          <v-col cols="0" lg="3" sm="2"></v-col>
        </v-row>
      </v-form>
      <v-row class="mt-10 mx-16">
        <template v-if="searchedFiles.length > 0">
          <v-col
            cols="12"
            lg="3"
            md="4"
            sm="6"
            v-for="file in searchedFiles"
            :key="file.id"
          >
            <v-card
              class="pa-4"
              elevation="6"
              outlined
              shaped
              tile
              :color="file.access ? 'amber lighten-2' : 'grey lighten-3'"
              height="150"
            >
              <div class="d-flex justify-between align-center">
                <v-card-title class="pa-0 text-h5 font-weight-bold">{{
                  file.name
                }}</v-card-title>
                <v-spacer></v-spacer>
                <v-tooltip bottom v-if="file.access == true">
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn icon v-bind="attrs" v-on="on">
                      <v-icon> mdi-cloud-upload </v-icon>
                    </v-btn>
                  </template>
                  <span>Download</span>
                </v-tooltip>
                <v-tooltip bottom v-else>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn icon v-bind="attrs" v-on="on">
                      <v-icon> mdi-access-point-plus </v-icon>
                    </v-btn>
                  </template>
                  <span>Send Request</span>
                </v-tooltip>
              </div>
            </v-card>
          </v-col>
        </template>

        <v-alert v-else shaped prominent type="error">
          فایلی برای این شرکت یافت نشد ...
        </v-alert>
      </v-row>
      <div class="text-center">
        <v-pagination
          v-show="searchedFiles.length > 0"
          class="mt-12 mb-16"
          v-model="page"
          :length="1"
          circle
          color="pallete1"
          :total-visible="6"
          prev-icon="mdi-menu-left"
          next-icon="mdi-menu-right"
        ></v-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "EmployeeDashboardCompany",
  data() {
    return {
      files: [],
      searchedFiles: [],
      searchedText: "",
      page: 1,
      userData: JSON.parse(localStorage.getItem("user")) || false,
      message: "",
    };
  },
  methods: {
    search() {
      this.searchedFiles = this.files.filter((file) =>
        file.name.toLowerCase().includes(this.searchedText.toLowerCase())
      );
    },
    getFiles() {
      axios
        .get(`http://127.0.0.1:8008/file/employee/${this.$route.params.id}/`, {
          headers: {
            Authorization: "Bearer " + this.userData.tokens.access,
          },
        })
        .then((res) => {
          if (res.data.message) {
          } else {
            this.files = res.data;
            this.search();
            this.message = "";
            console.log(this.files);
          }
        })
        .catch((res) => {
          if (res.response.status === 404) {
            this.message =
              "شما اجازه دسترسی به فایل های شرکت " +
              this.$route.params.id +
              " را ندارید.";
          } else {
            this.message = "در برقراری ارتباط با سرور مشکلی پیش آمده است.";
          }
        });
    },
  },
  watch: {
    $route(to, from) {
      if (to.path !== from.path) {
        this.getFiles();
      }
    },
  },
  created() {
    this.getFiles();
  },
};
</script>

<style scoped></style>
