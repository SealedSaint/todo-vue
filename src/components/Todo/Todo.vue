<template>
<div>
  <h1>Todo</h1>
  <div class="add-todo">
    <TextSubmit v-model="addTodoInput" :submit="addTodo" buttonText="Add Todo" />
  </div>
  <div class="todo-list">
    <div class="incomplete-todos">
      <TodoTask v-for="(todo, i) in incompleteTodos" :key="i" :todo="todo" />
    </div>
  </div>
</div>
</template>

<script>
import { mapGetters } from 'vuex'
import { Todo } from '@/classes';
import TextSubmit from '@/components/TextSubmit.vue';
import TodoTask from './TodoTask.vue';

export default {
  name: 'todo',
  components: {
    TextSubmit,
    TodoTask,
  },
  computed: {
    ...mapGetters(['incompleteTodos']),
  },
  data: () => ({
    addTodoInput: '',
  }),
  methods: {
    addTodo() {
      if (this.addTodoInput === '') return;

      this.$store.commit('ADD_TODO', new Todo(this.addTodoInput));
      this.addTodoInput = '';
    },
  },
};
</script>

<style scoped>
.add-todo {
  margin: 10px 0px;
}
</style>
