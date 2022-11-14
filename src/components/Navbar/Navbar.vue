<template>
    <div class="navbar">
        <nav class="navbar__top-section">
            <div class="top-section__logo">
                <p class="logo__title">GitLet</p>
            </div>
            <div class="top-section__items">
                <div class="items__item">
                    <p>Home</p>
                </div>
                <div class="items__item">
                    <p>Learn</p>
                </div>
                <div class="items__item">
                    <p>Create</p>
                </div>
            </div>
            <div class="top-section__features">
                <div class="features__feature">
                    <img class="icon" src="@/assets/icons/search.png">
                </div>
                <div class="features__feature">
                    <img class="icon" src="@/assets/icons/setting.png">
                </div>
                <div class="features__feature">
                    <img class="icon" src="@/assets/icons/profile.png">
                </div>
            </div>
        </nav>
        <div class="navbar__menu">
            <div class="menu__items">
                <p class="items__item">Lernsets</p>
                <p class="items__item">Group</p>
            </div>
        </div>
    </div>
</template>
<script lang="ts" src="./Navbar.ts"></script>
<style lang="scss" scoped src="./Navbar.scss"></style>