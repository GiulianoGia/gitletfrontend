<template>
    <div class="input" :class="[{'error': !validate(text, type)}, {'active': active}]">
        <label v-if="text !== ''" class="input__label" for="field">{{ label }}</label>
        <div class="input__sub"><input :type="type === 'password' ? 'password' : 'text'" @input="$emit('update:modelValue', text)" v-model="text" class="sub__field" :placeholder="label">
            <p v-if="text !== '' && withMaxNumber">{{ maxNumber }}</p>
            <!-- <button v-if="type === 'password'" type="button">show</button> -->
        </div>
    </div>
</template>
<script lang="ts" src="./InputField.ts"></script>
<style lang="scss" src="./InputField.scss"></style>
