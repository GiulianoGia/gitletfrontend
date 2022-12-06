<template>
    <div class="groups">
        <div class="groups__group" v-for="group in groups" :key="group.name">
            <p class="group__title">{{ group.name }}</p>
            <p class="group__description">{{ group.description }}</p>
        </div>
    </div>
</template>
<script lang="ts" src="./Groups.ts"></script>
<style scoped lang="scss" src="./Groups.scss"></style>
