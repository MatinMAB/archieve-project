<template>
  <div>
    <div v-if="message">
      <v-alert outlined type="warning" prominent border="left" class="ma-12">
        {{ message }}
      </v-alert>
    </div>
    <div>
      <v-row class="align-center">
        <v-badge
          bordered
          color="pallete1"
          icon="4"
          class="ma-8"
          overlap
          md="mr-16 mt-16"
        >
          <v-btn class="white--text text-h6" color="pallete1" depressed>
            درخواست‌های جدید
          </v-btn>
        </v-badge>
        <v-spacer></v-spacer>
        <div class="ma-8 company-user-file-category-btn">
          <v-btn
            color="light-blue lighten-2"
            class="text-h5 ma-2"
            @click="
              $router.push(`/dashboard/companies/${$route.params.id}/users`)
            "
          >
            <v-icon left dark> mdi-account-group </v-icon>
            اعضاء
          </v-btn>
          <v-btn
            color="light-green lighten-2"
            class="text-h5 ma-2"
            @click="
              $router.push(`/dashboard/companies/${$route.params.id}/files`)
            "
          >
            <v-icon left dark> mdi-file-multiple </v-icon>
            فایل ها
          </v-btn>
        </div>
      </v-row>
      <div class="d-flex justify-center align-center flex-column">
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
      <v-form ref="access">
        <v-row class="mt-8 mx-16 mb-n12">
          <v-col cols="12" md="5"> </v-col>
          <v-col cols="0" md="2">
            <v-btn
              tile
              color="success"
              block
              class="text-h5"
              @click="makeAccess()"
            >
              <v-icon left> mdi-plus-thick </v-icon>
              ایجاد دسترسی
            </v-btn>
            <v-dialog v-model="dialog" max-width="290">
              <v-card>
                <v-card-title class="text-h4"> ایجاد دسترسی ؟ </v-card-title>

                <v-card-text class="text-h5">
                  آیا از ایجاد دسترسی مطمئن هستید؟
                </v-card-text>

                <v-card-actions>
                  <v-spacer></v-spacer>

                  <v-btn color="red darken-1" text @click="declineSending()">
                    مخالفم
                  </v-btn>

                  <v-btn color="green darken-1" text @click="acceptSending()">
                    موافقم
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-col>
          <v-col cols="12" md="5"> </v-col>
        </v-row>
        <v-row class="mt-12 mx-16 mb-10">
          <v-col cols="12" md="5">
            <v-container fluid>
              <v-combobox
                v-model="selectedFiles"
                :items="fileNames"
                :search-input.sync="search"
                :rules="[
                  (value) => value.length > 0 || 'انتخاب فایل الزامی است.',
                ]"
                hint="فایل های خود را جستجو و انتخاب کنید."
                label="جستجوی فایل"
                multiple
                persistent-hint
                small-chips
                deletable-chips
                color="#5fb7e4"
                item-color="#5fb7e4"
              >
                <template v-slot:no-data>
                  <v-list-item>
                    <v-list-item-content>
                      <v-list-item-title>
                        هیچ نتیجه ای برای "<strong>{{ search }}</strong
                        >" یافت نشد
                      </v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </template>
              </v-combobox>
            </v-container>
          </v-col>
          <v-col cols="0" md="2"></v-col>
          <v-col cols="12" md="5">
            <v-container fluid>
              <v-combobox
                v-model="selectedMembers"
                :items="memberNames"
                :search-input.sync="search"
                :rules="[
                  (value) => value.length > 0 || 'انتخاب عضو الزامی است.',
                ]"
                hint="اعضای خود را جستجو و انتخاب کنید."
                label="جستجوی عضو"
                multiple
                persistent-hint
                small-chips
                deletable-chips
                color="#5fb7e4"
                item-color="#5fb7e4"
              >
                <template v-slot:no-data>
                  <v-list-item>
                    <v-list-item-content>
                      <v-list-item-title>
                        هیچ نتیجه ای برای "<strong>{{ search }}</strong
                        >" یافت نشد
                      </v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </template>
              </v-combobox>
            </v-container>
          </v-col>
        </v-row>
      </v-form>
      <v-snackbar
        color="green accent-3 black--text"
        v-model="snackbar"
        :timeout="5000"
      >
    ایجاد دسترسی فایل ها برای کاربران مورد نظر شما با موفقیت انجام شد.

        <template v-slot:action="{ attrs }">
          <v-btn color="red" text v-bind="attrs" @click="snackbar = false">
            بستن
          </v-btn>
        </template>
      </v-snackbar>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "BossDashboardCompany",
  data: () => ({
    dialog: false,
    files: [],
    fileNames: [],
    fileIds: [],
    selectedFiles: [],
    members: [],
    memberNames: [],
    memberIds: [],
    selectedMembers: [],
    search: null,
    message: "",
    userData: JSON.parse(localStorage.getItem("user")) || false,
    snackbar: false,
  }),
  methods: {
    makeAccess() {
      if (this.$refs.access.validate()) {
        this.files.forEach((file) => {
          this.selectedFiles.forEach((selectedFile) => {
            if (file.name == selectedFile) {
              this.fileIds.push(file.id);
            }
          });
        });
        this.members.forEach((member) => {
          this.selectedMembers.forEach((selectedMember) => {
            if (member.username == selectedMember) {
              this.memberIds.push(member.id);
            }
          });
        });
        this.dialog = true;
        console.log(this.memberIds);
        console.log(this.fileIds);
      } else {
        this.$refs.access.validate();
      }
    },
    getFiles() {
      axios
        .get(`http://127.0.0.1:8008/file/manager/${this.$route.params.id}/`, {
          headers: {
            Authorization: "Bearer " + this.userData.tokens.access,
          },
        })
        .then((res) => {
          if (res.data.message) {
            this.message =
              "شما اجازه دسترسی به فایل های شرکت " +
              this.$route.params.id +
              " را ندارید.";
          } else {
            this.files = res.data;
            const newFiles = res.data;
            newFiles.forEach((newFile) => {
              this.fileNames.push(newFile.name);
            });
            this.message = "";
          }
        })
        .catch((res) => {
          console.log(res.data);
        });
    },
    getUsers() {
      axios
        .get(`http://127.0.0.1:8008/company/users/${this.$route.params.id}/`, {
          headers: {
            Authorization: "Bearer " + this.userData.tokens.access,
          },
        })
        .then((res) => {
          this.members = res.data;
          const newMembers = res.data;
          newMembers.forEach((newMember) => {
            this.memberNames.push(newMember.username);
          });
          this.message = "";
        })
        .catch((res) => {
          console.log(res.data);
        });
    },
    acceptSending() {
      axios
        .post(
          `http://127.0.0.1:8008/file/access_create/`,
          {
            user: this.memberIds,
            file: this.fileIds,
          },
          {
            headers: {
              Authorization: "Bearer " + this.userData.tokens.access,
            },
          }
        )
        .then((res) => {
          console.log(res.data);
          this.dialog = false;
          this.snackbar = true;
          this.fileIds = [];
          this.memberIds = [];
          console.log(this.fileIds, this.memberIds);
        })
        .catch((res) => {
          console.log(res.data);
        });
    },
    declineSending() {
      this.dialog = false;
      this.fileIds = [];
      this.memberIds = [];
      console.log(this.fileIds, this.memberIds);
    },
  },
  created() {
    this.getFiles();
    this.getUsers();
  },
};
</script>

<style scoped>
.lists {
  overflow-y: auto;
}
</style>
