<script>
import Todo from './Todo.class.js';
import TodoTask from './TodoTask.component.vue';

export default {
  name: 'TodoTaskList',
  components: {
    TodoTask,
  },
  props: {
    header: {
      type: String,
      default: 'Todo',
    },
    todos: {
      type: Array,
      validator: (value) => value.every(item => item instanceof Todo),
    },
  },
}
</script>

<template>
<v-card v-if="todos.length">
  <v-list subheader class="indigo lighten-5">
    <v-subheader>{{ header }}</v-subheader>
    <TodoTask v-for="(todo, i) in todos" :key="todo.name" :todo="todo" />
  </v-list>
</v-card>
</template>
