<template>
  <div class="interaction-lernset-view">
    <h1>Lernset erstellen</h1>
    <div>
      <div class="interaction-lernset-view__action">
        <input class="action__input" placeholder="Lernset-Name" />
        <br />
        <input class="action__input" placeholder="Beschreibung" />
      </div>
      <div class="interaction-lernset-view__word-set">
        <div v-for="i in numberOfWords" :key="i" class="word-set__container">
          <input class="container__input" placeholder="Begriff" @input="addFirstWordToList">
          <input class="container__input" placeholder="Definition" @input="addSecondWordToList" />
        </div>
      </div>
      <Button label="add Word" type="button" size="medium" @click="addWord()">add new Word</Button>
    </div>
  </div>
</template>
<script lang="ts" src="./InteractionLernsetView.ts"></script>
<style scoped lang="scss" src="./InteractionLernsetView.scss">

</style>
