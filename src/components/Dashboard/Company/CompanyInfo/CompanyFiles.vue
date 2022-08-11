<template>
  <v-container>
    <v-card class="mt-8 mb-16">
      <v-card-title class="text-h4 font-weight-bold">
        جدول فایل‌های موجود در شرکت {{ $route.params.id }}
        <v-spacer></v-spacer>
        <AddNewFileButton />
        <v-text-field
          class="mr-2"
          v-model="search"
          label="جستجوی فایل"
          append-icon="mdi-magnify"
          color="#5fb7e4"
          clearable
        ></v-text-field>
      </v-card-title>
      <v-data-table
        :headers="headers"
        :items="desserts"
        :search="search"
        :loading="desserts"
        loading-text="موردی یافت نشد"
        :footer-props="{ 'items-per-page-text': 'تعداد فایل در هر صفحه' }"
      >
        <!-- data Table Headers -->

        <template v-slot:header.name="{ header }">
          <span class="text-h5">{{ header.text }}</span>
        </template>

        <template v-slot:header.dateAdd="{ header }">
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

        <template v-slot:item.dateAdd="{ item }">
          <span class="text-h6">{{ item.added.substring(0, 10) }}</span>
        </template>

        <template v-slot:item.accesses="{ item }">
          <span class="text-h6">
            <v-btn icon color="light-blue accent-3" @click="showAccesses(item)">
              <v-icon>mdi-connection</v-icon>
            </v-btn>
            <v-dialog v-model="dialog" max-width="490">
              <v-card>
                <v-card-title class="text-h5">
                  لیست افراد دارای دسترس به فایل {{ accessedPerson.name }}
                </v-card-title>

                <v-simple-table>
                  <template v-slot:default>
                    <thead>
                      <tr>
                        <th class="text-right text-h6">نام کاربر</th>
                        <th class="text-right text-h6">ایمیل کاربر</th>
                        <th class="text-center text-h6">حذف دسترسی</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                        v-for="item in accessedPerson.users_who_have_access"
                        :key="item.id"
                      >
                        <td class="text-h6">{{ item.username }}</td>
                        <td class="text-h6">{{ item.email }}</td>
                        <td class="text-h6 text-center">
                          <v-btn
                            icon
                            color="red accent-3 d-block text-center"
                            @click="removeAccess(item.id)"
                          >
                            <v-icon>mdi-close-octagon</v-icon>
                          </v-btn>
                        </td>
                      </tr>
                    </tbody>
                  </template>
                </v-simple-table>

                <v-card-actions>
                  <v-spacer></v-spacer>

                  <v-btn color="red darken-1" text @click="dialog = false">
                    بستن
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
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
    <v-snackbar
      color="red accent-3 white--text"
      v-model="snackbar"
      :timeout="5000"
    >
      دسترسی کاربر مورد نظر حذف شد.

      <template v-slot:action="{ attrs }">
        <v-btn color="white" text v-bind="attrs" @click="snackbar = false">
          بستن
        </v-btn>
      </template>
    </v-snackbar>
  </v-container>
</template>

<script>
import axios from "axios";
import AddNewFileButton from "./AddNewFileForm.vue";

export default {
  name: "CompanyFiles",
  components: {
    AddNewFileButton,
  },
  data() {
    return {
      search: "",
      headers: [
        {
          text: "نام فایل",
          align: "start",
          value: "name",
        },

        { text: "تاریخ افزودن", value: "dateAdd" },

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
      accessedPerson: [],
      dialog: false,
      snackbar: false,
    };
  },
  methods: {
    getFiles() {
      axios
        .get(`http://127.0.0.1:8008/file/manager/${this.$route.params.id}/`, {
          headers: {
            Authorization: "Bearer " + this.userData.tokens.access,
          },
        })
        .then((res) => {
          this.desserts = res.data;
        })
        .catch((res) => {
          console.log(res.data);
        });
    },
    showAccesses(item) {
      this.dialog = true;
      console.log(item);
      this.accessedPerson = { ...item };
    },
    removeAccess(itemId) {
      axios
        .post(
          "http://127.0.0.1:8008/file/access_remove/",
          {
            user: itemId,
            file: this.accessedPerson.id,
          },
          {
            headers: {
              Authorization: "Bearer " + this.userData.tokens.access,
            },
          }
        )
        .then((res) => {
          this.getFiles();
          this.dialog = false;
          this.snackbar = true;
        })
        .catch((res) => {
          console.log(res.data);
        });
      console.log(itemId);
      console.log(this.accessedPerson.id);
    },
  },
  created() {
    this.getFiles();
  },
};
</script>

<style scoped></style>
