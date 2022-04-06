<template>
  <div>
    <h2 class="text-h3 font-weight-black text-center mt-16">
      شرکت {{ $route.params.id }}
    </h2>
    <v-form>
      <v-row class="mt-16 mx-16">
        <v-col cols="0" lg="3" sm="2"></v-col>
        <v-col cols="12" lg="6" sm="8">
          <v-text-field
            v-model="message3"
            filled
            label="جستجوی فایل"
            append-icon="mdi-arrow-left-bold-circle"
            @click:append="search()"
            color="#ada84e"
            background-color="pallete4"
            clearable
          ></v-text-field>
        </v-col>
        <v-col cols="0" lg="3" sm="2"></v-col>
      </v-row>
    </v-form>
    <div class="text-center">
    <v-pagination
      v-model="page"
      :length="4"
      prev-icon="mdi-menu-left"
      next-icon="mdi-menu-right"
    ></v-pagination>
  </div>
  </div>
</template>

<script>
export default {
  name: "DashboardCompany",
};
</script>

<style scoped></style>
