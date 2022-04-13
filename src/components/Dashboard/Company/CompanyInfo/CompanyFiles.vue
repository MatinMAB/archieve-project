<template>
  <v-container>
    <v-card class="mt-8 mb-16">
      <v-card-title class="text-h4 font-weight-bold">
        جدول فایل‌های موجود در شرکت {{ $route.params.id }}
        <v-spacer></v-spacer>
        <v-btn class="ma-3" depressed color="pallete4">
          <span class="text-h6">افزودن فایل جدید</span>
          <v-icon class="mr-1">mdi-plus-circle</v-icon>
        </v-btn>
        <v-text-field
          v-model="search"
          label="جستجوی فایل"
          append-icon="mdi-magnify"
          color="#ada84e"
          clearable
        ></v-text-field>
      </v-card-title>
      <v-data-table
        :headers="headers"
        :items="desserts"
        :search="search"
        :footer-props="{ 'items-per-page-text': 'تعداد فایل در هر صفحه' }"
      >
        <!-- data Table Headers -->

        <template v-slot:header.name="{ header }">
          <span class="text-h5">{{ header.text }}</span>
        </template>

        <template v-slot:header.categories="{ header }">
          <span class="text-h5">{{ header.text }}</span>
        </template>

        <template v-slot:header.dateAdd="{ header }">
          <span class="text-h5">{{ header.text }}</span>
        </template>

        <template v-slot:header.details="{ header }">
          <span class="text-h5">{{ header.text }}</span>
        </template>

        <template v-slot:header.accesses="{ header }">
          <span class="text-h5">{{ header.text }}</span>
        </template>

        <template v-slot:header.delete="{ header }">
          <span class="text-h5">{{ header.text }}</span>
        </template>

        <!-- data Table Items -->

        <template v-slot:item.name="{ item }">
          <span class="text-h6">{{ item.name }}</span>
        </template>

        <template v-slot:item.categories="{ item }">
          <span class="text-h6">{{ item.categories }}</span>
        </template>

        <template v-slot:item.dateAdd="{ item }">
          <span class="text-h6">{{ item.dateAdd }}</span>
        </template>

        <template v-slot:item.details="{ item }">
          <span
            class="text-h6 text-decoration-underline"
            style="cursor: pointer"
            >بیشتر</span
          >
        </template>

        <template v-slot:item.accesses="{ item }">
          <span class="text-h6">
            <v-btn icon color="light-blue accent-3">
              <v-icon>mdi-connection</v-icon>
            </v-btn>
          </span>
        </template>

        <template v-slot:item.delete="{ item }">
          <span class="text-h6">
            <v-btn icon color="red accent-3">
              <v-icon>mdi-trash-can</v-icon>
            </v-btn>
          </span>
        </template>

        <!-- data Table Footer -->
        <template
          v-slot:footer.page-text="{ pageStart, pageStop, itemsLength }"
        >
          {{ `از ${pageStart} - ${pageStop} --- کل فایل ها ${itemsLength}` }}
        </template>
      </v-data-table>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "CompanyFiles",
  data() {
    return {
      search: "",
      headers: [
        {
          text: "نام فایل",
          align: "start",
          value: "name",
        },
        { text: "دسته ها", value: "categories" },
        { text: "تاریخ افزودن", value: "dateAdd" },
        { text: "جزئیات", value: "details", sortable: false },

        { text: "", value: "", sortable: false },

        {
          text: "دسترسی",
          value: "accesses",
          sortable: false,
          align: "center",
          width: "90px",
        },
        {
          text: "حذف",
          value: "delete",
          sortable: false,
          align: "center",
          width: "90px",
        },
      ],
      desserts: [
        {
          name: "Frozen Yogurt",
          categories: "communication , ..",
          dateAdd: "1400/01/01",
          details: {},
        },
        {
          name: "Ice cream sandwich",
          categories: "communication , ..",
          dateAdd: "1400/01/01",
          details: {},
        },
        {
          name: "Eclair",
          categories: "communication , ..",
          dateAdd: "1400/01/01",
          details: {},
        },
        {
          name: "Cupcake",
          categories: "communication , ..",
          dateAdd: "1400/01/01",
          details: {},
        },
        {
          name: "Gingerbread",
          categories: "communication , ..",
          dateAdd: "1400/01/01",
          details: {},
        },
        {
          name: "Jelly bean",
          categories: "communication , ..",
          dateAdd: "1400/01/01",
          details: {},
        },
        {
          name: "Lollipop",
          categories: "communication , ..",
          dateAdd: "1400/01/01",
          details: {},
        },
        {
          name: "Honeycomb",
          categories: "communication , ..",
          dateAdd: "1400/01/01",
          details: {},
        },
        {
          name: "Donut",
          categories: "communication , ..",
          dateAdd: "1400/01/01",
          details: {},
        },
        {
          name: "KitKat",
          categories: "communication , ..",
          dateAdd: "1400/01/01",
          details: {},
        },
      ],
    };
  },
};
</script>

<style scoped></style>
