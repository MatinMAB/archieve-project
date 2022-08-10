<template>
  <div>
    <DashboardHeader @change-drawer="drawerHandler()"/>
    <DashboardNavigation :drawer="drawer"/>
    <router-view></router-view>
    <DashboardFooter/>
  </div>
</template>

<script>
import DashboardFooter from '../components/Dashboard/DashboardFooter.vue';
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
  created(){
    if(!!!JSON.parse(localStorage.getItem("user"))){
      this.$router.push('/login')
    }
  },
  components: { DashboardHeader, DashboardNavigation, DashboardFooter },
};
</script>

<style scoped></style>
