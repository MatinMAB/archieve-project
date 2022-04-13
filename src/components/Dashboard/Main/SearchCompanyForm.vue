<template>
  <v-form>
    <v-row class="mt-16 mx-16">
      <v-col cols="0" lg="3" sm="2"></v-col>
      <v-col cols="12" lg="6" sm="8">
        <v-text-field
          filled
          label="جستجوی شرکت"
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
</template>

<script>
export default {
  name: "SearchCompanyForm",
  methods: {
    search() {},
  },
};
</script>

<style scoped></style>
