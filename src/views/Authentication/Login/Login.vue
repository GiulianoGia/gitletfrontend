<template>
    <div class="login">
        <div class="login__modal">
            <h1>Login</h1>
            <form class="modal__form">
                <InputField type="text" label="username" />
                <InputField type="password" label="password" />
                <Button label="Login" size="max" />
            </form>
            <div class="modal__link">
                <router-link class="link__item" to="register">Don't have an Account</router-link>
                <router-link class="link__item" to="">Forgot Password</router-link>
            </div>
            <p v-if="error">Error!</p>
        </div>
    </div>
</template>
<script lang="ts" src="./Login.ts"></script>
<style lang="scss" scoped src="./Login.scss">

</style>
