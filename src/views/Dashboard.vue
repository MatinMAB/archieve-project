<template>
  <div>
    <DashboardHeader @change-drawer="drawerHandler()"/>
    <DashboardNavigation :drawer="drawer"/>
  </div>
</template>

<script>
import DashboardHeader from "../components/Dashboard/DashboardHeader.vue";
import DashboardNavigation from '../components/Dashboard/DashboardNavigation.vue';
export default {
  name: "Dashboard",
  data() {
    return {
      drawer : true,
    }
  },
  methods: {
    drawerHandler(){
      this.drawer = !this.drawer;
    }
  },
  components: { DashboardHeader, DashboardNavigation },
};
</script>

<style scoped></style>
