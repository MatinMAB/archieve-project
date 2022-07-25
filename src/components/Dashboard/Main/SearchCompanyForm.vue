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
                @click="sendRequest()"
              >
                <v-list-item-icon>
                  <v-icon v-text="company.icon"></v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title v-text="company.text"></v-list-item-title>
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
  </v-form>
</template>

<script>
export default {
  name: "SearchCompanyForm",
  data() {
    return {
      searchedText: "",
      companies: [
        { text: "Real-Time", icon: "mdi-clock" },
        { text: "Audience", icon: "mdi-account" },
        { text: "Conversions", icon: "mdi-flag" },
        { text: "Real-Time", icon: "mdi-clock" },
        { text: "Audience", icon: "mdi-account" },
        { text: "Conversions", icon: "mdi-flag" },
        { text: "Real-Time", icon: "mdi-clock" },
        { text: "Audience", icon: "mdi-account" },
        { text: "Conversions", icon: "mdi-flag" },
        { text: "Real-Time", icon: "mdi-clock" },
        { text: "Audience", icon: "mdi-account" },
        { text: "Conversions", icon: "mdi-flag" },
      ],
      searchedCompanies: [],
      isActive: false,
    };
  },
  methods: {
    find() {
      this.searchedCompanies = this.companies.filter((company) =>
        company.text.toLowerCase().includes(this.searchedText.toLowerCase())
      );
      this.isActive = true;
    },
    closeBox() {
      this.isActive = false;
    },
    sendRequest() {
      console.log("send request to company");
    },
  },
};
</script>

<style scoped>

#list{
  overflow :auto;
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
