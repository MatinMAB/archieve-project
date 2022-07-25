<template>
  <div>
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
            label="جستجوی فایل"
            append-icon="mdi-arrow-left-bold-circle"
            @click:append="search()"
            color="#5fb7e4"
            background-color="pallete4"
            clearable
          ></v-text-field>
        </v-col>
        <v-col cols="0" lg="3" sm="2"></v-col>
      </v-row>
    </v-form>
    <v-row class="mt-10 mx-16">
      <v-col cols="12" lg="3" md="4" sm="6" v-for="col in 14" :key="col">
        <v-card class="pa-4" outlined tile color="grey lighten-3" height="150">
          <div class="d-flex justify-between align-center">
            <v-card-title class="pa-0 text-h5 font-weight-bold"
              >فایل</v-card-title
            >
            <v-spacer></v-spacer>
            <v-icon> mdi-cloud-upload </v-icon>
          </div>
        </v-card>
      </v-col>
    </v-row>
    <div class="text-center">
      <v-pagination
        class="mt-12 mb-16"
        v-model="page"
        :length="10"
        circle
        color="pallete1"
        :total-visible="6"
        prev-icon="mdi-menu-left"
        next-icon="mdi-menu-right"
      ></v-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: "EmployeeDashboardCompany",
  data() {
    return {
      page: 1,
    };
  },
};
</script>

<style scoped></style>
