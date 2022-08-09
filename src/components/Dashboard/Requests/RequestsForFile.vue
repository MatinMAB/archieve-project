<template>
  <v-container>
    <p class="text-h5 font-weight-bold my-8">
      تاریخچه درخواست مجوز دسترسی به فایل های شرکت من
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
            e1 === 'درخواست‌های تایید شده'
              ? 'light-green lighten-3'
              : e1 === 'درخواست‌های تایید نشده'
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

        <template v-slot:header.type="{ header }">
          <span class="text-h5">{{ header.text }}</span>
        </template>

        <template v-slot:header.view="{ header }">
          <span class="text-h5">{{ header.text }}</span>
        </template>

        <template v-slot:header.situation="{ header }">
          <span class="text-h5">{{ header.text }}</span>
        </template>

        <!-- data Table Items -->

        <template v-slot:item.name="{ item }">
          <span class="text-h6">
            <v-icon right> mdi-account </v-icon>
            {{ item.name }}</span
          >
        </template>

        <template v-slot:item.file="{ item }">
          <span class="text-h6">
            <v-icon right> mdi-file </v-icon>
            {{ item.name }}</span
          >
        </template>

        <template v-slot:item.type="{ item }">
          <v-chip :color="getColor(item.type)" dark>
            {{ item.type }}
          </v-chip>
        </template>

        <template v-slot:item.situation="{ item }">
          <span class="text-h6 d-flex justify-center" v-if="item.type === 'در انتظار'">
            <v-btn icon>
              <v-icon color="green accent-3">mdi-check-outline</v-icon>
            </v-btn>
            <v-btn icon>
              <v-icon color="red accent-3">mdi-close-outline</v-icon>
            </v-btn>
          </span>
          <span class="text-h6 d-flex justify-center" v-else-if="item.type === 'تایید شده'">
            <v-btn icon disabled>
              <v-icon color="grey lighten-1 ">mdi-check-outline</v-icon>
            </v-btn>
           
          </span>
          <span class="text-h6 d-flex justify-center" v-else-if="item.type === 'تایید نشده'">
            
            <v-btn icon disabled>
              <v-icon color="grey lighten-1 ">mdi-close-outline</v-icon>
            </v-btn>
          </span>
        </template>

        <template v-slot:item.view="{ item }">
          <span class="text-h6">
            <v-btn icon color="blue accent-3">
              <v-icon>mdi-alert-decagram</v-icon>
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
    </v-container>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      e1: "درخواست‌های درانتظار",
      states: [
        "درخواست‌های تایید شده",
        "درخواست‌های تایید نشده",
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
          value: "type",
          sortable: false,
          align: "center",
          width: "150px",
        },
        {
          text: "بررسی",
          value: "view",
          sortable: false,
          align: "center",
          width: "90px",
        },
        {
          text: "وضعیت",
          value: "situation",
          sortable: false,
          align: "center",
          width: "130px",
        },
      ],
      desserts: [
        {
          name: "Frozen Yogurt",
          type: "در انتظار",
        },
        {
          name: "Ice cream sandwich",
          type: "در انتظار",
        },
        {
          name: "Eclair",
          type: "تایید شده",
        },
        {
          name: "Cupcake",
          type: "تایید نشده",
        },
        {
          name: "Gingerbread",
          type: "تایید نشده",
        },
        {
          name: "Jelly bean",
          type: "در انتظار",
        },
        {
          name: "Lollipop",
          type: "تایید شده",
        },
        {
          name: "Honeycomb",
          type: "تایید نشده",
        },
        {
          name: "Donut",
          type: "تایید نشده",
        },
        {
          name: "KitKat",
          type: "تایید شده",
        },
      ],
      filteredCompanies: [],
    };
  },
  methods: {
    getColor(type) {
      if (type === "تایید نشده") return "red";
      else if (type === "در انتظار") return "blue";
      else return "green";
    },
    changeFilter() {
      console.log("salam");
      if (this.e1 === "درخواست‌های در انتظار") {
        this.filteredCompanies = this.desserts.filter(
          (request) => request.type === "در انتظار"
        );
      } else if (this.e1 === "درخواست‌های تایید شده") {
        this.filteredCompanies = this.desserts.filter(
          (request) => request.type === "تایید شده"
        );
      } else if (this.e1 === "درخواست‌های تایید نشده") {
        this.filteredCompanies = this.desserts.filter(
          (request) => request.type === "تایید نشده"
        );
      } else {
        this.filteredCompanies = this.desserts;
      }
    },
  },
  created() {
    this.changeFilter();
  },
};
</script>

<style></style>
