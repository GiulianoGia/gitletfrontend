<template>
    <div class="select">
        <label class="select__label">{{ label }}:</label>
        <select @change="updateSelection($event)" name="select" class="select__selection">
            <option class="selection__option" v-for="select in arrayList" :key="select" :value="select.toUpperCase()">{{ select }}</option>
          </select>
    </div>
</template>
<script lang="ts" src="./Selection.ts"></script>
<style lang="scss" scoped src="./Selection.scss"></style>
