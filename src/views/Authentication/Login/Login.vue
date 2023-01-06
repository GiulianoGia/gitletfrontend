<template>
    <div class="login">
        <div class="login__modal">
            <h1>Login</h1>
            <form class="modal__form">
                <InputField id="firstInput" type="text" v-model="user.username" label="username" />
                <InputField id="secondInput" :disableValidation="true" type="password" v-model="user.password"
                    label="password" />
                <Button label="Login" type="button" size="max" @click="loginUser" />
            </form>
            <div class="modal__link">
                <router-link class="link__item" to="register">Don't have an Account</router-link>
                <router-link class="link__item" to="">Forgot Password</router-link>
            </div>
        </div>
    </div>
</template>
<script lang="ts" src="./Login.ts"></script>
<style lang="scss" scoped src="./Login.scss"></style>
