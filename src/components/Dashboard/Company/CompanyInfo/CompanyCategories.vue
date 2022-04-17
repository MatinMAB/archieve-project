<template>
  <v-container>
    <v-card class="mt-8 mb-16">
      <v-card-title class="text-h4 font-weight-bold">
        جدول دسته‌بندی های موجود در شرکت {{ $route.params.id }}
        <v-spacer></v-spacer>
        <AddNewCategoryButton />
        <v-text-field
          class="mr-2"
          v-model="search"
          label="جستجوی دسته‌بندی"
          append-icon="mdi-magnify"
          color="#ada84e"
          clearable
        ></v-text-field>
      </v-card-title>
      <v-data-table
        :headers="headers"
        :items="desserts"
        :search="search"
        :footer-props="{ 'items-per-page-text': 'تعداد دسته‌بندی در هر صفحه' }"
      >
        <!-- data Table Headers -->

        <template v-slot:header.name="{ header }">
          <span class="text-h5">{{ header.text }}</span>
        </template>

        <template v-slot:header.files="{ header }">
          <span class="text-h5">{{ header.text }}</span>
        </template>

        <template v-slot:header.dateCreated="{ header }">
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

        <template v-slot:item.files="{ item }">
          <span class="text-h6">{{ item.files }}</span>
        </template>

        <template v-slot:item.dateCreated="{ item }">
          <span class="text-h6">{{ item.dateCreated }}</span>
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
          {{
            `از ${pageStart} - ${pageStop} --- کل دسته‌بندی ها ${itemsLength}`
          }}
        </template>
      </v-data-table>
    </v-card>
  </v-container>
</template>

<script>
import AddNewCategoryButton from "./AddNewCategoryForm.vue";

export default {
  name: "CompanyCategories",
  components: {
    AddNewCategoryButton,
  },
  data() {
    return {
      search: "",
      headers: [
        {
          text: "نام دسته‌بندی",
          align: "start",
          value: "name",
        },
        { text: "فایل ها", value: "files" },
        { text: "تاریخ ایجاد", value: "dateCreated" },
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
          files: "communication , ..",
          dateCreated: "1400/01/01",
          details: {},
        },
        {
          name: "Ice cream sandwich",
          files: "communication , ..",
          dateCreated: "1400/01/01",
          details: {},
        },
        {
          name: "Eclair",
          files: "communication , ..",
          dateCreated: "1400/01/01",
          details: {},
        },
        {
          name: "Cupcake",
          files: "communication , ..",
          dateCreated: "1400/01/01",
          details: {},
        },
        {
          name: "Gingerbread",
          files: "communication , ..",
          dateCreated: "1400/01/01",
          details: {},
        },
        {
          name: "Jelly bean",
          files: "communication , ..",
          dateCreated: "1400/01/01",
          details: {},
        },
        {
          name: "Lollipop",
          files: "communication , ..",
          dateCreated: "1400/01/01",
          details: {},
        },
        {
          name: "Honeycomb",
          files: "communication , ..",
          dateCreated: "1400/01/01",
          details: {},
        },
        {
          name: "Donut",
          files: "communication , ..",
          dateCreated: "1400/01/01",
          details: {},
        },
        {
          name: "KitKat",
          files: "communication , ..",
          dateCreated: "1400/01/01",
          details: {},
        },
      ],
    };
  },
};
</script>

<style scoped></style>
