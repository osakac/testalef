<template>
  <header :class="css.headerWrapper">
    <div class="container" :class="css.header">
      <img src="../../assets/svg/logo.svg" alt="Alef development logo" />

      <nav>
        <ul :class="css.list">
          <li>
            <router-link to="/form" :exact-active-class="css.active">Форма</router-link>
          </li>
          <li>
            <router-link to="/preview" :exact-active-class="css.active">Превью</router-link>
          </li>
        </ul>
      </nav>

      <div></div>
    </div>
  </header>
</template>

<script setup>
import css from "./TheHeader.module.css";
</script>
