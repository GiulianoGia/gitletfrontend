<template>
    <div class="register">
        <h1>Register</h1>
        <div class="register__modal">
            <form class="modal__form">
                <div  class="form__section">
                    <InputField type="text" v-model="user.username" label="username" />
                </div>
                <div class="form__section">
                    <InputField type="password" v-model="user.password" label="password" />
                    <InputField type="password" label="repeat password" />
                </div>
                <div class="form__section">
                    <InputField type="email" v-model="user.email" label="email" />
                </div>
                <div class="form__section">
                    <InputField type="number" v-model="user.age" label="age" />
                </div>
                <button type="button" @click="createNewUser">Register</button>
            </form>
        </div>
        <router-link to="login">Have already an Account</router-link>
        <p v-if="error">Error!</p>
    </div>
</template>
<script lang="ts" src="./Register.ts"></script>
<style lang="scss" src="./Register.scss"></style>
