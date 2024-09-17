<template>
  <div class="container">
    <form @submit.prevent :class="css.form">
      <div :class="css.personal">
        <h3>Персональные данные</h3>
        <div :class="css.formControls">
          <div :class="css.formControl">
            <span>Имя</span>
            <input type="text" v-model="person.name" placeholder="Введите имя" />
          </div>
          <div :class="css.formControl">
            <span>Возраст</span>
            <input type="number" v-model="person.age" placeholder="Введите возраст" />
          </div>
        </div>
      </div>

      <div :class="css.children">
        <h3>
          Дети (макс. 5)
          <button @click.stop="addChild" v-if="children.length < 5" :class="css.addChildBtn">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M2.13332 7.85555C1.50125 7.85555 0.988866 8.36794 0.988867 9C0.988867 9.63206 1.50126 10.1445 2.13332 10.1445L7.85544 10.1445L7.85545 15.8668C7.85545 16.4989 8.36784 17.0113 8.9999 17.0113C9.63196 17.0113 10.1444 16.4989 10.1444 15.8668L10.1443 10.1445L15.8667 10.1445C16.4988 10.1445 17.0112 9.63207 17.0112 9.00001C17.0112 8.36795 16.4988 7.85556 15.8667 7.85556L10.1443 7.85556L10.1443 2.13338C10.1443 1.50132 9.63195 0.988927 8.99989 0.988927C8.36783 0.988927 7.85544 1.50131 7.85544 2.13338L7.85544 7.85555L2.13332 7.85555Z"
                fill="#none"
              />
            </svg>

            Добавить ребенка
          </button>
        </h3>
        <div :class="css.formControls">
          <div v-for="child in children" :key="child.id" :class="css.formControlsWrapper">
            <div :class="css.formControl">
              <span>Имя</span>
              <input type="text" v-model="child.name" placeholder="Введите имя" />
            </div>
            <div :class="css.formControl">
              <span>Возраст</span>
              <input type="number" v-model="child.age" placeholder="Введите возраст" />
            </div>
            <button @click="deleteChild(child.id)" :class="css.deleteBtn">Удалить</button>
          </div>
        </div>
      </div>

      <button @click.stop="onSubmit" :class="css.submitBtn">Сохранить</button>
    </form>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import { useStore } from "vuex";
import css from "./FormPage.module.css";

const store = useStore();

const person = computed(() => structuredClone(store.getters.getPerson));
const children = ref(structuredClone(store.getters.getChildren));

function addChild() {
  children.value.push({
    id: Date.now(),
    name: "",
    age: null,
  });
}

function deleteChild(id) {
  children.value = children.value.filter((child) => child.id !== id);
}

function onSubmit() {
  if (!person.value.name?.trim() || !person.value.age) return;

  store.commit("setChildren", children.value);
  store.commit("setPerson", person.value);
}
</script>
