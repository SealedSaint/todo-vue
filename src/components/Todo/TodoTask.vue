<template>
<div>
  <label class="todo-task">
    <input v-model="todo.done" type="checkbox" />
    {{ todo.name }}
  </label>
</div>
</template>

<script>
import { Todo } from '@/classes';

export default {
  name: 'TodoTask',
  props: {
    todo: Todo,
  }
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
