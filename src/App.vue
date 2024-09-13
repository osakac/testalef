<template>
  <TheHeader />

  <main class="page-content">
    <router-view />
  </main>

  <TheFooter />
</template>

<script setup>
import TheFooter from "./components/Footer/TheFooter.vue";
import TheHeader from "./components/Header/TheHeader.vue";
</script>

<style>
@import "./assets/styles/normalize.css";
@import "./assets/styles/reset.css";
@import "./assets/styles/index.css";
</style>
