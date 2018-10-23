<template>
<div>
  <label class="todo-task">
    <input :checked="todo.done" @change="onTodoChange" type="checkbox" />
    {{ todo.name }}
  </label>
</div>
</template>

<script>
import { mapActions } from 'vuex';
import Todo from './Todo.class';

export default {
  name: 'TodoTask',
  props: {
    todo: Todo,
  },
  methods: {
    ...mapActions(['toggleTodo']),
    onTodoChange(e) {
      this.toggleTodo(this.todo);
    },
  },
}
</script>

<style scoped>
.done-task {
  text-decoration: line-through;
  color: #AAA;
}
.todo-task {
  cursor: pointer;
}
</style>
