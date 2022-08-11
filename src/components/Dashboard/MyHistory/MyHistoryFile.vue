<template>
  <v-container>
    <p class="text-h5 font-weight-bold my-8">
      تاریخچه درخواست مجوز دسترسی من به فایل
    </p>
    <v-row align="center">
      <v-col cols="12" lg="4" md="6">
        <v-select
          @change="changeFilter()"
          v-model="e1"
          :items="states"
          filled
          label="انتخاب کنید ..."
          prepend-icon="mdi-history"
          single-line
          color="pallette3"
          item-color="pallette3"
          :background-color="
            e1 === 'درخواست‌های موفق'
              ? 'light-green lighten-3'
              : e1 === 'درخواست‌های ناموفق'
              ? 'red lighten-4'
              : e1 === 'درخواست‌های در انتظار'
              ? 'light-blue lighten-4'
              : 'grey lighten-2'
          "
        ></v-select>
      </v-col>
    </v-row>
    <v-container>
      <v-data-table
        :headers="headers"
        :items="filteredCompanies"
        class="elevation-1 mb-10"
        :footer-props="{ 'items-per-page-text': 'تعداد فایل در هر صفحه' }"
      >
        <!-- data Table Headers -->
        <template v-slot:header.name="{ header }">
          <span class="text-h5">{{ header.text }}</span>
        </template>

        <template v-slot:header.file="{ header }">
          <span class="text-h5">{{ header.text }}</span>
        </template>

        <template v-slot:header.status="{ header }">
          <span class="text-h5">{{ header.text }}</span>
        </template>

        <template v-slot:header.date="{ header }">
          <span class="text-h5">{{ header.text }}</span>
        </template>

        <template v-slot:header.delete="{ header }">
          <span class="text-h5">{{ header.text }}</span>
        </template>

        <!-- data Table Items -->

        <template v-slot:item.file="{ item }">
          <span class="text-h6">
            <v-icon right> mdi-file </v-icon>
            {{ item.file }}</span
          >
        </template>

        <template v-slot:item.name="{ item }">
          <span class="text-h6">
            <v-icon right> mdi-domain </v-icon>
            {{ item.company.name }}</span
          >
        </template>

        <template v-slot:item.status="{ item }">
          <v-chip :color="getColor(item.status)" dark>
            {{
              item.status === "waiting"
                ? "در انتظار"
                : item.status === "accepted"
                ? "تایید شده"
                : "تایید نشده"
            }}
          </v-chip>
        </template>

        <template v-slot:item.delete="{ item }">
          <span class="text-h6">
            <v-btn v-if="item.status === 'waiting'" icon color="red accent-3">
              <v-icon>mdi-trash-can</v-icon>
            </v-btn>
          </span>
        </template>

        <template v-slot:item.date="{ item }">
          <span class="text-h6">
            {{ item.created.substring(0, 10) }}
          </span>
        </template>

        <!-- data Table Footer -->
        <template
          v-slot:footer.page-text="{ pageStart, pageStop, itemsLength }"
        >
          {{ `از ${pageStart} - ${pageStop} --- کل فایل ها ${itemsLength}` }}
        </template>
      </v-data-table>
    </v-container>
  </v-container>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      e1: "درخواست‌های درانتظار",
      states: [
        "درخواست‌های موفق",
        "درخواست‌های ناموفق",
        "درخواست‌های در انتظار",
      ],
      headers: [
        {
          text: "نام فایل",
          align: "start",
          sortable: true,
          value: "file",
        },
        {
          text: "مشخصات درخواست‌ کننده",
          align: "start",
          sortable: true,
          value: "name",
        },
        {
          text: "نوع درخواست",
          value: "status",
          sortable: false,
          align: "center",
          width: "150px",
        },
        {
          text: "تاریخ",
          value: "date",
          sortable: false,
          align: "center",
          width: "120px",
        },
        {
          text: "حذف",
          value: "delete",
          sortable: false,
          align: "center",
          width: "90px",
        },
      ],
      desserts: [],
      filteredCompanies: [],
      userData: JSON.parse(localStorage.getItem("user")) || false,
    };
  },
  methods: {
    getColor(status) {
      if (status === "failed") return "red";
      else if (status === "waiting") return "blue";
      else return "green";
    },
    changeFilter() {
      if (this.e1 === "درخواست‌های در انتظار") {
        this.filteredCompanies = this.desserts.filter(
          (request) => request.status === "waiting"
        );
      } else if (this.e1 === "درخواست‌های موفق") {
        this.filteredCompanies = this.desserts.filter(
          (request) => request.status === "accepted"
        );
      } else if (this.e1 === "درخواست‌های ناموفق") {
        this.filteredCompanies = this.desserts.filter(
          (request) => request.status === "failed"
        );
      } else {
        this.filteredCompanies = this.desserts;
      }
    },
    getRequests() {
      axios
        .get("http://127.0.0.1:8008/request/file/receive/me/", {
          headers: {
            Authorization: "Bearer " + this.userData.tokens.access,
          },
        })
        .then((response) => {
          this.desserts = response.data;
          this.changeFilter();
        })
        .catch((response) => {
          console.log(response.data);
        });
    },
  },
  created() {
    this.getRequests();
  },
};
</script>

<style></style>
