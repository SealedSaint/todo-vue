<script>
import { mapActions } from 'vuex';
import Todo from './Todo.class';

export default {
  name: 'TodoTask',
  props: {
    todo: Todo,
  },
  data() {
    return {
      checked: this.todo.done,
    };
  },
  methods: {
    ...mapActions(['toggleTodo']),
    handleTodoClick(e) {
      this.checked = !this.checked;
      this.toggleTodo(this.todo);
    },
  },
}
</script>

<template>
<v-list-tile @click="handleTodoClick">
  <v-list-tile-action>
    <v-checkbox v-model="checked"></v-checkbox>
  </v-list-tile-action>

  <v-list-tile-content>
    <v-list-tile-title>{{ todo.name }}</v-list-tile-title>
  </v-list-tile-content>
</v-list-tile>
</template>
