<template>
    <div class="button">
        <button :disabled="disabled" class="button__item" type="button"
            :class="[{ 'small': size === 'small' }, { 'medium': size === 'medium' }, { 'large': size === 'large' }, { 'max': size === 'max' }, { 'disabled': disabled }]">
            {{ label }}
        </button>
    </div>
</template>
<script lang="ts" src="./Button.ts"></script>
<style lang="scss" scoped src="./Button.scss"></style>
