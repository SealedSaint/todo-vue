<template>
  <div class="progress">
    <h1>Progress</h1>
    <p>These are the tasks you have completed.</p>
    <div class="todo-list">
      <div class="incomplete-todos">
        <TodoTask v-for="(todo, i) in completeTodos" :key="i" :todo="todo" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { TodoTask } from '@/components';

export default {
  name: 'todo',
  components: {
    TodoTask,
  },
  computed: {
    ...mapGetters([
      'completeTodos',
    ]),
  },
};
</script>
