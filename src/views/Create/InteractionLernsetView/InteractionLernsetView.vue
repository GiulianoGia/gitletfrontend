<template>
  <div class="interaction-lernset-view">
    <div>
      <div class="interaction-lernset-view__top">
        <h1>Lernset erstellen</h1>
        <Button @click="createNewLernset" :disabled="createButton" label="create Lernset" type="button" size="max" />
      </div>
      <div class="interaction-lernset-view__action">
        <label class="action__label" v-if="lernsetName">Titel</label>
        <input class="action__input" v-model="lernsetName"
          placeholder="Gib einen Titel für dein Lernset ein wie 'Chemie: Lektion 22'" />
        <br />
        <label class="action__label" v-if="lernsetDescription">Beschreibung</label>
        <input class="action__input" v-model="lernsetDescription"
          placeholder="Das sollte eine kurze Beschreibung sein" />
      </div>
      <div class="interaction-lernset-view__selection">
        <Selection v-model="firstWordLanguage" :selection="languages" label="Begriff Language" />
        <Selection v-model="secondWordLanguage" :selection="languages" label="Definition Language" />
      </div>
      <div class="interaction-lernset-view__word-set">
        <div v-for="(i, index) in lernsetWords" :key="i" class="word-set__container">
          <p class="container__count">{{ index + 1 }}</p>
          <button class="container__delete" @click="deleteWord(i)">x</button>
          <div>
            <label class="container__label" v-if="i.firstWord">Begriff</label>
            <input class="container__input" v-model="i.firstWord" placeholder="Begriff" />
          </div>
          <div>
            <label class="container__label" v-if="i.secondWord">Definition</label>
            <input class="container__input" v-model="i.secondWord" placeholder="Definition" />
          </div>
        </div>
        <div class="word-set__container" style="padding: 30px; border: 1px solid #3f85ed8f">
          <input class="container__input" id="firstInput" placeholder="Begriff" @input="addFirstWordToList">
          <input class="container__input" id="secondInput" placeholder="Definition" @input="addSecondWordToList" />
        </div>
      </div>
      <Button :disabled="addButton" label="add Word" type="button" size="medium" @click="addWord()">add new
        Word</Button>
    </div>
  </div>
</template>
<script lang="ts" src="./InteractionLernsetView.ts"></script>
<style scoped lang="scss" src="./InteractionLernsetView.scss"></style>
