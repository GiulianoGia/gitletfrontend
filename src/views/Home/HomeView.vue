<template>
  <div class="home">
    <h1 class="home__title">Guten Tag {{ user.username }}  🤟</h1>
    <div class="home__lernsets">
      <h2>Deine Lernsets</h2>
      <Lernsets />
    </div>
    <div class="home__features">
      <Features />
    </div>
    <div class="home__groups">
      <Groups />
    </div>
  </div>
</template>
<script lang="ts" src="./HomeView.ts"></script>
<style lang="scss" src="./HomeView.scss"></style>
