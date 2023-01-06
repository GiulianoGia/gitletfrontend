<template>
    <div class="side-bar" v-if="user.username && user.email">
        <div>
            <p>User: {{ user.username }}</p>
            <p>Email: {{ user.email }}</p>
        </div>
        <Button @click="logout" class="side-bar__button" size="small" label="logout"/>
    </div>
</template>
<script lang="ts" src="./SideBar.ts"></script>
<style lang="scss" scoped src="./SideBar.scss"></style>
