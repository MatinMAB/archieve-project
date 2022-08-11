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
          color="#5fb7e4"
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
        =

        <template v-slot:header.name="{ header }">
          <span class="text-h5">{{ header.text }}</span>
        </template>

        <template v-slot:header.email="{ header }">
          <span class="text-h5">{{ header.text }}</span>
        </template>
==
=

        <template v-slot:header.accesses="{ header }">
          <span class="text-h5">{{ header.text }}</span>
        </template>

        <template v-slot:header.delete="{ header }">
          <span class="text-h5">{{ header.text }}</span>
        </template>

        <!-- data Table Items -->
        <template v-slot:item.imageUrl="{ item }">
          <v-list-item-avatar>
            <img src="https://randomuser.me/api/portraits/men/78.jpg" />
          </v-list-item-avatar>
        </template>

        <template v-slot:item.name="{ item }">
          <span class="text-h6">{{ item.username }}</span>
        </template>

        <template v-slot:item.email="{ item }">
          <span class="text-h6">{{ item.email }}</span>
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
            <v-btn icon color="red accent-3" @click="deleteUser(item)""">
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

    <v-snackbar
      color="red accent-3 white--text"
      v-model="snackbar"
      :timeout="5000"
    >
      کاربر مورد نظر از شرکت شما حذف شد.

      <template v-slot:action="{ attrs }">
        <v-btn color="white" text v-bind="attrs" @click="snackbar = false">
          بستن
        </v-btn>
      </template>
    </v-snackbar>
  </v-container>
</template>

<script>
import axios from 'axios'

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
      desserts: [],
      userData: JSON.parse(localStorage.getItem("user")) || false,
      snackbar : false,
    };
  },
  methods: {
    getUsers() {
      axios
        .get(`http://127.0.0.1:8008/company/users/${this.$route.params.id}/`, {
          headers: {
            Authorization: "Bearer " + this.userData.tokens.access,
          },
        })
        .then((res) => {
          this.desserts = res.data;
          console.log(res.data);
        })
        .catch((res) => {
          console.log(res.data);
        });
    },
    deleteUser(user){
      axios
        .post(
          `http://127.0.0.1:8008/company/users/${this.$route.params.id}/`,
          {
            user: user.id,
          },
          {
            headers: {
              Authorization: "Bearer " + this.userData.tokens.access,
            },
          }
        )
        .then((res) => {
          this.getUsers();
          this.snackbar = true;
        })
        .catch((res) => {
          console.log(res.data);
        });

    }
  },
  created() {
    this.getUsers();
  },
};
</script>

<style scoped></style>
