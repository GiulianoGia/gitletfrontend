<template>
  <div class="flex-box">
    <div class="flex-box__lernset" v-for="lernset in lernsets" :key="lernset.name">
      <p class="lernset__title">{{lernset.name}}</p>
      <p class="lernset__description">{{lernset.description}}</p>
    </div>
  </div>
</template>
<script lang="ts" src="./Lernsets.ts"></script>
<style lang="scss" scoped src="./Lernsets.scss"></style>
