<template>
  <div>
    <DashboardHeader />
    <DashboardNavigation/>
  </div>
</template>

<script>
import DashboardHeader from "../components/Dashboard/DashboardHeader.vue";
import DashboardNavigation from '../components/Dashboard/DashboardNavigation.vue';
export default {
  name: "Dashboard",
  components: { DashboardHeader, DashboardNavigation },
};
</script>

<style scoped></style>
