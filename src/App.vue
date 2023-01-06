<template>
  <Navbar />
  <SideBar v-if="isActive" />
  <Notification />
  <router-view />
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Navbar from '@/components/Navbar/Navbar.vue'
import Notification from "./components/Notification/Notification.vue";
import SideBar from "./components/SideBar/SideBar.vue";
import sideBar from "./store/sideBar";

export default defineComponent({
  name: "app",
  components: {
    Navbar,
    Notification,
    SideBar
  },
  computed: {
    isActive() {
      return sideBar.state.isActive;
    }
  }

});
</script>
<style>
html {
  background-color: #0e1014;
  color: white;
  font-family: sans-serif;
}

html::-webkit-scrollbar {
  display: none;
}

body {
  margin: 0px;
}
</style>
