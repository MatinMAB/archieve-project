<template>
  <component
    :is="isBoss ? 'BossDashboardCompany' : 'EmployeeDashboardCompany'"
  ></component>
</template>

<script>
import BossDashboardCompany from "./BossDashboardCompany.vue";
import EmployeeDashboardCompany from "./EmployeeDashboardCompany.vue";

export default {
  name: "DashboardCompany",
  components: {
    BossDashboardCompany,
    EmployeeDashboardCompany,
  },
  data() {
    return {
      isBoss: true,
    };
  },
};
</script>

<style scoped>
.company-avatar {
  border-radius: 50% !important;
}
.lists {
  overflow-y: scroll;
}
@media screen and (max-width: 613px) {
  .company-user-file-category-btn {
    margin-top: -1.5rem !important;
  }
}
</style>
