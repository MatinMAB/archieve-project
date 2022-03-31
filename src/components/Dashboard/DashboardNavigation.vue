<template>
  <div>
    <v-navigation-drawer absolute permanent right>
      <template v-slot:prepend>
        <v-list-item two-line>
          <v-list-item-avatar>
            <img src="https://randomuser.me/api/portraits/women/81.jpg" />
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title class="text-h5">نام کاربری</v-list-item-title>
            <v-list-item-subtitle>نقش</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </template>

      <v-divider></v-divider>

      <v-list shaped>
        <v-list-item
        
          class="cursor-pointer hover-navigation-link"
        >
          <v-list-item-icon>
            <v-icon>mdi-view-dashboard</v-icon>
          </v-list-item-icon>

          <v-list-item-title class="text-h5">داشبورد</v-list-item-title>
        </v-list-item>

        <v-list-group prepend-icon="mdi-domain" color="#ada84e">
          <template v-slot:activator>
            <v-list-item-title class="text-h5">شرکت ها</v-list-item-title>
          </template>

          <v-list-item class="hover-navigation-link">
            <v-list-item-title class="text-h6 pr-8 cursor-pointer"
              >شرکت 1</v-list-item-title
            >
          </v-list-item>
          <v-list-item class="hover-navigation-link">
            <v-list-item-title class="text-h6 pr-8 cursor-pointer"
              >شرکت 2</v-list-item-title
            >
          </v-list-item>
          <v-list-item class="hover-navigation-link">
            <v-list-item-title class="text-h6 pr-8 cursor-pointer"
              >شرکت 3</v-list-item-title
            >
          </v-list-item>
        </v-list-group>
        <v-list-group prepend-icon="mdi-history" color="#ada84e">
          <template v-slot:activator>
            <v-list-item-title class="text-h5"
              >درخواست‌های من</v-list-item-title
            >
          </template>

          <v-list-item class="hover-navigation-link">
            <v-list-item-title class="text-h6 pr-8 cursor-pointer"
              >درخواست ملحق شدن به شرکت</v-list-item-title
            >
          </v-list-item>
          <v-list-item class="hover-navigation-link">
            <v-list-item-title class="text-h6 pr-8 cursor-pointer"
              >درخواست دسترسی به فایل</v-list-item-title
            >
          </v-list-item>
        </v-list-group>
        <v-list-group prepend-icon="mdi-archive-eye-outline" color="#ada84e">
          <template v-slot:activator>
            <v-list-item-title class="text-h6"
              >درخواست‌های دیگران</v-list-item-title
            >
          </template>

          <v-list-item class="hover-navigation-link">
            <v-list-item-title class="text-h6 pr-8 cursor-pointer"
              >بررسی درخواست به شرکت</v-list-item-title
            >
          </v-list-item>
          <v-list-item class="hover-navigation-link">
            <v-list-item-title class="text-h6 pr-8 cursor-pointer"
              >بررسی دسترسی به فایل</v-list-item-title
            >
          </v-list-item>
        </v-list-group>
        <v-list-item class="cursor-pointer hover-navigation-link">
          <v-list-item-icon>
            <v-icon>mdi-account-cog</v-icon>
          </v-list-item-icon>

          <v-list-item-title class="text-h5">تنظیمات حساب کاربری</v-list-item-title>
        </v-list-item>
        <v-list-item class="cursor-pointer hover-navigation-link">
          <v-list-item-icon>
            <v-icon>mdi-logout</v-icon>
          </v-list-item-icon>

          <v-list-item-title class="text-h5">خروج</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: "DashboardNavigation",
  data() {
    return {
      admins: [
        ["Management", "mdi-account-multiple-outline"],
        ["Settings", "mdi-cog-outline"],
      ],
      cruds: [
        ["Create", "mdi-plus-outline"],
        ["Read", "mdi-file-outline"],
        ["Update", "mdi-update"],
        ["Delete", "mdi-delete"],
      ],
    };
  },
  created() {
    console.log(this.$route);
  },
};
</script>

<style scoped>
.active-navigation {
  background-color: #e0ddaa;
}
.cursor-pointer {
  cursor: pointer;
}
.hover-navigation-link:hover{
  background-color: #f6f6f6;
}
</style>
