<template>
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
        <v-btn
          color="yellow lighten-2"
          class="text-h5 ma-2"
          @click="
            $router.push(`/dashboard/companies/${$route.params.id}/categories`)
          "
        >
          <v-icon left dark> mdi-shape </v-icon>
          دسته‌بندی ها
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
    <v-row class="mt-8 mx-16 mb-n12">
      <v-col cols="12" md="5"> </v-col>
      <v-col cols="0" md="2">
        <v-btn tile color="success" block class="text-h5">
          <v-icon left> mdi-plus-thick </v-icon>
          ایجاد دسترسی
        </v-btn>
      </v-col>
      <v-col cols="12" md="5"> </v-col>
    </v-row>
    <v-row class="mt-12 mx-16 mb-10">
      <v-col cols="12" md="5">
        <v-text-field
          filled
          label="جستجوی فایل"
          append-icon="mdi-magnify"
          color="#ada84e"
          background-color="pallete4"
          clearable
        ></v-text-field>
        <v-card outlined class="lists" height="260">
          <v-list-item v-for="list in 16" :key="list">
            <v-list-item-content>
              <v-list-item-title class="text-h5 mb-1">
                فایل شماره {{ list }}
              </v-list-item-title>
            </v-list-item-content>
            <v-card-actions>
              <v-btn icon color="green">
                <v-icon>mdi-plus-thick</v-icon>
              </v-btn>
              <v-btn icon color="blue">
                <v-icon>mdi-information-outline</v-icon>
              </v-btn>
              <v-btn icon color="red">
                <v-icon>mdi-trash-can-outline</v-icon>
              </v-btn>
            </v-card-actions>
          </v-list-item>
        </v-card>
      </v-col>
      <v-col cols="0" md="2"></v-col>
      <v-col cols="12" md="5">
        <v-text-field
          filled
          label="جستجوی عضو"
          append-icon="mdi-magnify"
          color="#ada84e"
          background-color="pallete4"
          clearable
        ></v-text-field>
        <v-card outlined class="lists" height="260">
          <v-list-item v-for="list in 16" :key="list">
            <v-list-item-content>
              <v-list-item-title class="text-h5 mb-1">
                عضو شماره {{ list }}
              </v-list-item-title>
            </v-list-item-content>
            <v-card-actions>
              <v-btn icon color="green">
                <v-icon>mdi-plus-thick</v-icon>
              </v-btn>
              <v-btn icon color="blue">
                <v-icon>mdi-information-outline</v-icon>
              </v-btn>
              <v-btn icon color="red">
                <v-icon>mdi-trash-can-outline</v-icon>
              </v-btn>
            </v-card-actions>
          </v-list-item>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "BossDashboardCompany",
};
</script>

<style scoped></style>
