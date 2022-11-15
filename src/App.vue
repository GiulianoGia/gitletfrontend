<template>
  <Navbar />
  <Notification />
  <router-view />
</template>
<script lang="ts">
import { defineComponent } from "vue";
import  Navbar from '@/components/Navbar/Navbar.vue'
import Notification from "./components/Notification/Notification.vue";

export default defineComponent({
  name: "app",
  components: {
    Navbar,
    Notification
  }
});
</script>
<style>
  html {
    background-color: black;
    color: white;
    font-family: sans-serif;
  }
  body {
    margin: 0px;
  }
</style>
