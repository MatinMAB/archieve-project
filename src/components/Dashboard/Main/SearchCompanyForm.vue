<template>
  <v-form>
    <v-row class="mt-16 mx-16">
      <v-col cols="0" lg="3" sm="2"></v-col>
      <v-col cols="12" lg="6" sm="8">
        <v-text-field
          filled
          label="جستجوی شرکت"
          v-model="searchedText"
          @input="find()"
          @focus="find()"
          color="#5fb7e4"
          background-color="pallete4"
          clearable
          ref="searchInput"
        ></v-text-field>
      </v-col>
      <v-col cols="0" lg="3" sm="2"></v-col>
    </v-row>
    <v-row class="mb-16 mx-16">
      <v-col cols="0" lg="3" sm="2"></v-col>
      <v-col cols="12" lg="6" sm="8" class="searchedBox">
        <v-card
          v-if="searchedCompanies.length > 0"
          class="mx-auto searchedCompany"
          :class="{ active: isActive }"
          max-width="490"
          tile
        >
          <v-list id="list" max-height="280">
            <v-list-item-group color="pallete2">
              <v-list-item
                v-for="(company, i) in searchedCompanies"
                :key="i"
                @click="sendRequest(company)"
              >
                <v-list-item-content>
                  <v-list-item-title v-text="company.name"></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
          <v-row align="center" justify="center">
            <v-btn color="red" dark depressed @click="closeBox()">
              <v-icon left> mdi-close </v-icon>
              Close
            </v-btn>
          </v-row>
        </v-card>
      </v-col>
      <v-col cols="0" lg="3" sm="2"></v-col>
    </v-row>
    <v-row justify="center">
      <v-snackbar color="green accent-3 black--text" v-model="snackbar" :timeout="5000">
        درخواست شما با موفقیت ارسال شد.

        <template v-slot:action="{ attrs }">
          <v-btn color="red" text v-bind="attrs" @click="snackbar = false">
            بستن
          </v-btn>
        </template>
      </v-snackbar>
      <v-dialog v-model="dialog" max-width="290">
        <v-card>
          <v-card-title class="text-h5">
            آیا از ارسال درخواست مطمئن هستید ؟
          </v-card-title>

          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn color="red darken-1" text @click="cancelSending()">
              مخالفم
            </v-btn>

            <v-btn color="green darken-1" text @click="sending()">
              موافقم
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
  name: "SearchCompanyForm",
  data() {
    return {
      searchedText: "",
      companies: [{}],
      searchedCompanies: [],
      isActive: false,
      userData: JSON.parse(localStorage.getItem("user")) || false,
      dialog: false,
      selectedId: "",
      snackbar: false,
    };
  },
  methods: {
    find() {
      this.searchedCompanies = this.companies.filter((company) =>
        company.name.toLowerCase().includes(this.searchedText.toLowerCase())
      );
      this.isActive = true;
    },
    closeBox() {
      this.isActive = false;
    },
    sendRequest(selected) {
      this.dialog = true;
      this.selectedId = selected.id;
    },
    sending() {
      axios
        .post(
          "http://127.0.0.1:8008/request/create/",
          {
            company: this.selectedId,
          },
          {
            headers: {
              Authorization: "Bearer " + this.userData.tokens.access,
              "Access-Control-Allow-Origin": "*",
            },
          }
        )
        .then((response) => {
          this.companies = response.data;
          this.dialog = false;
          this.isActive = false;
          this.snackbar = true;
          
          console.log(this.companies);
        })
        .catch((response) => {
          console.log(response.data);
        });
    },
    cancelSending() {
      this.dialog = false;
    },
  },
  created() {
    console.log(this.userData);
    axios
      .get("http://127.0.0.1:8008/company/receive/all/", {
        headers: {
          Authorization: "Bearer " + this.userData.tokens.access,
        },
      })
      .then((response) => {
        this.companies = response.data;
        console.log(this.companies);
      })
      .catch((response) => {
        console.log(response.data);
      });
  },
};
</script>

<style scoped>
#list {
  overflow: auto;
}
.searchedBox {
  position: relative;
}
.searchedCompany {
  opacity: 0;
  transform: translateY(70px);
  position: absolute;
  width: 100%;
  z-index: 2;
  transition: all 0.4s ease;
}
.active {
  opacity: 1;
  transform: translateY(0px);
  transition: all 0.4s ease;
}
</style>
