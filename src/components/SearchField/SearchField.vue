<template>
    <div class="search-field">
        <input :disabled="disabled" v-model="input" :placeholder="label" id="search-field"/>
    </div>
</template>
<script lang="ts" src="./SearchField.ts"></script>
<style scoped lang="scss" src="./SearchField.scss"></style>
