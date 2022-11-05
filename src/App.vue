<template>
  <Navbar />
  <router-view />
</template>
<script lang="ts">
import { defineComponent } from "vue";
import  Navbar from '@/components/Navbar/Navbar.vue'

export default defineComponent({
  name: "app",
  components: {
    Navbar
  }
});
</script>
<style>
  html {
    background-color: white;
    font-family: sans-serif;
  }
  body {
    margin: 0px;
  }
</style>
