<template>
  <v-container>
    <v-card class="mt-8 mb-16">
      <v-card-title class="text-h4 font-weight-bold">
        جدول اعضای شرکت {{ $route.params.id }}
        <v-spacer></v-spacer>
        <v-text-field
          v-model="search"
          label="جستجوی کاربر"
          append-icon="mdi-magnify"
          color="#ada84e"
          clearable
        ></v-text-field>
      </v-card-title>
      <v-data-table
        :headers="headers"
        :items="desserts"
        :search="search"
        :footer-props="{ 'items-per-page-text': 'تعداد کاربر در هر صفحه' }"
      >
        <!-- data Table Headers -->
        <template v-slot:header.imageUrl="{ header }">
          <span class="text-h5">{{ header.text }}</span>
        </template>

        <template v-slot:header.name="{ header }">
          <span class="text-h5">{{ header.text }}</span>
        </template>

        <template v-slot:header.email="{ header }">
          <span class="text-h5">{{ header.text }}</span>
        </template>

        <template v-slot:header.dateEntry="{ header }">
          <span class="text-h5">{{ header.text }}</span>
        </template>

        <template v-slot:header.details="{ header }">
          <span class="text-h5">{{ header.text }}</span>
        </template>

        <template v-slot:header.requests="{ header }">
          <span class="text-h5">{{ header.text }}</span>
        </template>

        <template v-slot:header.accesses="{ header }">
          <span class="text-h5">{{ header.text }}</span>
        </template>

        <template v-slot:header.delete="{ header }">
          <span class="text-h5">{{ header.text }}</span>
        </template>

        <!-- data Table Items -->
        <template v-slot:item.imageUrl="{ item }">
          <v-list-item-avatar>
            <img :src="item.imageUrl" />
          </v-list-item-avatar>
        </template>

        <template v-slot:item.name="{ item }">
          <span class="text-h6">{{ item.name }}</span>
        </template>

        <template v-slot:item.email="{ item }">
          <span class="text-h6">{{ item.email }}</span>
        </template>

        <template v-slot:item.dateEntry="{ item }">
          <span class="text-h6">{{ item.dateEntry }}</span>
        </template>

        <template v-slot:item.details="{ item }">
          <span
            class="text-h6 text-decoration-underline"
            style="cursor: pointer"
            >بیشتر</span
          >
        </template>

        <template v-slot:item.requests="{ item }">
          <span class="text-h6">
            <v-btn icon color="yellow darken-3">
              <v-icon>mdi-history</v-icon>
            </v-btn>
          </span>
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
          {{ `از ${pageStart} - ${pageStop} --- کل کاربران ${itemsLength}` }}
        </template>
      </v-data-table>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "CompanyUsers",
  data() {
    return {
      search: "",
      headers: [
        {
          text: "",
          value: "imageUrl",
          sortable: false,
          align: "end",
          width: "80px",
        },
        {
          text: "نام کاربری",
          align: "start",
          value: "name",
        },
        { text: "ایمیل", value: "email" },
        { text: "تاریخ ملحق شدن", value: "dateEntry" },
        { text: "جزئیات", value: "details", sortable: false },

        { text: "", value: "", sortable: false },
        {
          text: "درخواست‌ها",
          value: "requests",
          sortable: false,
          align: "center",
          width: "90px",
        },
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
          imageUrl: "https://randomuser.me/api/portraits/women/75.jpg",
          name: "Frozen Yogurt",
          email: "sample125_ds@gmail.com",
          dateEntry: "1400/01/01",
          details: {},
        },
        {
          imageUrl: "https://randomuser.me/api/portraits/women/79.jpg",
          name: "Ice cream sandwich",
          email: "sample125_ds@gmail.com",
          dateEntry: "1400/01/01",
          details: {},
        },
        {
          imageUrl: "https://randomuser.me/api/portraits/women/69.jpg",
          name: "Eclair",
          email: "sample125_ds@gmail.com",
          dateEntry: "1400/01/01",
          details: {},
        },
        {
          imageUrl: "https://randomuser.me/api/portraits/women/80.jpg",
          name: "Cupcake",
          email: "sample125_ds@gmail.com",
          dateEntry: "1400/01/01",
          details: {},
        },
        {
          imageUrl: "https://randomuser.me/api/portraits/women/90.jpg",
          name: "Gingerbread",
          email: "sample125_ds@gmail.com",
          dateEntry: "1400/01/01",
          details: {},
        },
        {
          imageUrl: "https://randomuser.me/api/portraits/women/77.jpg",
          name: "Jelly bean",
          email: "sample125_ds@gmail.com",
          dateEntry: "1400/01/01",
          details: {},
        },
        {
          imageUrl: "https://randomuser.me/api/portraits/women/71.jpg",
          name: "Lollipop",
          email: "sample125_ds@gmail.com",
          dateEntry: "1400/01/01",
          details: {},
        },
        {
          imageUrl: "https://randomuser.me/api/portraits/women/80.jpg",
          name: "Honeycomb",
          email: "sample125_ds@gmail.com",
          dateEntry: "1400/01/01",
          details: {},
        },
        {
          imageUrl: "https://randomuser.me/api/portraits/women/90.jpg",
          name: "Donut",
          email: "sample125_ds@gmail.com",
          dateEntry: "1400/01/01",
          details: {},
        },
        {
          imageUrl: "https://randomuser.me/api/portraits/women/40.jpg",
          name: "KitKat",
          email: "sample125_ds@gmail.com",
          dateEntry: "1400/01/01",
          details: {},
        },
      ],
    };
  },
};
</script>

<style scoped></style>
