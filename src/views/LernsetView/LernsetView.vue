<template>
  <div class="lernset-view">
    <div class="lernset-view__container" v-if="lernset">
      <h1 class="container__title">{{ lernset.name }}</h1>
      <p class="container__description">{{ lernset.description }}</p>
      <div class="container__options">
        <div v-for="option in options" :key="option">
          <p class="options__option">{{ option }}</p>
        </div>
      </div>
      <Carousel v-if="lernset.name" :lernsetName="lernset.name" />
      <h3>Alle Begriffe</h3>
      <div class="container__overview">
        <div class="overview__section" v-for="word in words" :key="word.firstWord.word">
          <p>{{ word.firstWord.word }}</p>
          <p>{{ word.secondWord.word }}</p>
        </div>
      </div>
    </div>
    <div v-else>
      <h1>Not Found corresponding Lernset 😥</h1>
    </div>
  </div>
</template>
<script lang="ts" src="./LernsetView.ts"></script>
<style lang="scss" src="./LernsetView.scss" scoped></style>
