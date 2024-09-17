<template>
  <div class="container">
    <div :class="css.wrapper">
      <div :class="css.personal">
        <h3 :class="css.title">Персональные данные</h3>
        <p :class="css.text" v-if="person.name && person.age">{{ person.name }}, {{ person.age }} лет</p>
        <p v-else :class="css.text">Нет данных</p>
      </div>

      <div :class="css.children">
        <h3 :class="css.title">Дети</h3>
        <ul :class="css.list" v-if="children.length > 0">
          <li v-for="child in children" :class="[css.listItem, css.text]">{{ child.name }}, {{ child.age }} лет</li>
        </ul>
        <p v-else :class="css.text">Детей нет</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
import css from "./PreviewPage.module.css";

const store = useStore();

const person = computed(() => structuredClone(store.getters.getPerson));
const children = computed(() => structuredClone(store.getters.getChildren));
</script>
