<template>
  <div class="lernset-view">
    <div class="lernset-view__container">
      <h1 class="container__title">{{ lernset.name }}</h1>
      <p class="container__description">{{ lernset.description }}</p>
      <div class="container__options">
        <div v-for="option in options" :key="option">
          <p class="options__option">{{ option }}</p>
        </div>
      </div>
      <Carousel />
      <h3>Alle Begriffe</h3>
      <div class="container__overview">
        <div class="overview__section" v-for="word in words" :key="word.id">
            <p>{{ word.firstWord.word }}</p>
            <p>{{ word.secondWord.word }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" src="./LernsetView.ts"></script>
<style lang="scss" src="./LernsetView.scss" scoped></style>
