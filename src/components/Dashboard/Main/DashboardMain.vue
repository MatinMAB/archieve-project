<template>
  <v-container>
    <SearchCompanyForm />
    <v-row class="my-10 mx-16">
      <v-col cols="12" lg="4" sm="6">
        <v-card class="pa-4" outlined tile color="red lighten-4" height="150">
          <div class="d-flex justify-between align-center">
            <v-card-title class="pa-0 text-h5 font-weight-bold"
              >پیام ها</v-card-title
            >
            <v-spacer></v-spacer>
            <v-badge
              content="1"
              value="1"
              color="red lighten-1"
              overlap
              class="ml-2"
            >
            </v-badge>
          </div>
          <v-card-text class="text-h6 pa-0 pt-6 text-justify"
            >پیام های خود را همواره بازبینی کنید تا فایل‌ها و شرکت‌ خود را در
            بهترین حالت حفظ نمایید.</v-card-text
          >
        </v-card>
      </v-col>
      <v-col cols="12" lg="4" sm="6">
        <v-card
          class="pa-4"
          outlined
          tile
          color="orange lighten-4"
          height="150"
        >
          <div class="d-flex justify-between align-center">
            <v-card-title class="pa-0 text-h5 font-weight-bold"
              >گفتگو ها</v-card-title
            >
            <v-spacer></v-spacer>
            <v-badge
              content="0"
              value="0"
              color="orange lighten-1"
              overlap
              class="ml-2"
            >
            </v-badge>
          </div>
          <v-card-text class="text-h6 pa-0 pt-6 text-justify"
            >متاسفانه در حال حاضر در هیچ گروه یا شرکتی عضو نیستید.</v-card-text
          >
        </v-card>
      </v-col>
      <v-col cols="12" lg="4" sm="6">
        <v-card class="pa-4" outlined tile color="blue lighten-4" height="150">
          <div class="d-flex justify-between align-center">
            <v-card-title class="pa-0 text-h5 font-weight-bold"
              >اطلاع رسانی ها</v-card-title
            >
            <v-spacer></v-spacer>
            <v-badge
              content="0"
              value="0"
              color="blue lighten-1"
              overlap
              class="ml-2"
            >
            </v-badge>
          </div>
          <v-card-text class="text-h6 pa-0 pt-6 text-justify"
            >از این طریق همواره از آخرین تغییرات و آپدیت های سامانه مطلع
            باشید.</v-card-text
          >
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import SearchCompanyForm from "./SearchCompanyForm.vue";

export default {
  name: "DashboardMain",
  components: {
    SearchCompanyForm,
  },
};
</script>

<style scoped>
.center {
  display: flex;
  justify-content: center;
}
</style>
