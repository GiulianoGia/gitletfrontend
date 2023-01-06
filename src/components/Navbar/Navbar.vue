<template>
  <div class="navbar">
    <nav class="navbar__top-section">
      <div class="top-section__title">
        <router-link class="link" to="/">
          <p>GitLet</p>
        </router-link>
      </div>
      <div class="top-section__features">
        <div class="features__items">
          <div class="items__item">
            <router-link class="link" to="/">
              <p>Home</p>
            </router-link>
          </div>
          <div class="items__item">
            <p>Learn</p>
          </div>
          <div class="items__item">
            <router-link class="link" to="/interaction/lernset">
              <p>Editor</p>
            </router-link>
          </div>
          <div class="items__item">
            <p>Groups</p>
          </div>
          <div class="items__item">
            <button @click="!isSidebarActive ? showSidebar() : hideSidebar()" class="item__button"><p>Profile</p></button>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>
<script lang="ts" src="./Navbar.ts"></script>
<style lang="scss" scoped src="./Navbar.scss">

</style>
