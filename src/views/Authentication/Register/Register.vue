<template>
    <div class="register">
        <div class="register__modal">
            <h1>Register</h1>
            <form class="modal__form">
                <div  class="form__section">
                    <InputField  type="text" v-model="user.username" label="username" />
                </div>
                <div class="form__section">
                    <InputField type="password" v-model="user.password" label="password" />
                </div>
                <div class="form__section">
                    <InputField type="email" v-model="user.email" label="email" />
                </div>
                <div class="form__section">
                    <InputField type="number" v-model="user.age" label="age" />
                </div>
                <Button @click="createNewUser" label="Register" size="max" />
            </form>
            <div class="form__links">
                <router-link class="links__link" to="login">Have already an Account</router-link>
            </div>
            <p v-if="error">Error!</p>
        </div>
    </div>
</template>
<script lang="ts" src="./Register.ts"></script>
<style lang="scss" src="./Register.scss"></style>
