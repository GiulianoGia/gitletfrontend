<template>
    <div class="carousel">
        <div class="carousel__container">
            <div class="container__card">
                <button :class="active ? 'card__button--front' : 'card__button--back'" class="card__button" @click="flipCard">
                    <p v-if="active">{{words[currentWordNumber]?.firstWord.word}}</p>
                    <p v-else>{{words[currentWordNumber]?.secondWord.word}}</p>
                </button>
            </div>
        </div>
        <div class="carousel__step">
            <button class="step__button" @click="previousCard">←</button>
            <p class="button__count">{{(currentWordNumber + 1)}}/{{words.length}}</p>
            <button class="step__button" @click="nextCard">→</button>
        </div>
    </div>
</template>
<script lang="ts" src="./Carousel.ts"></script>
<style lang="scss" scoped src="./Carousel.scss"></style>
