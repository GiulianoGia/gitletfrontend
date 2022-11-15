<template>
    <div :class="isActive ? 'enabled' : 'disabled'" class="notification">
        <p>Error!</p>
    </div>
</template>
<script lang="ts" src="./Notification.ts"></script>
<style lang="scss" scoped src="./Notification.scss"></style>
