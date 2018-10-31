<script>
import { mapGetters } from 'vuex'
import Todo from './Todo.class.js';
import TextSubmit from '@/components/TextSubmit.component.vue';
import TodoTaskList from './TodoTaskList.component.vue';

export default {
  name: 'todo',
  components: {
    TextSubmit,
    TodoTaskList,
  },
  data: () => ({
    addTodoInput: '',
  }),
  computed: {
    ...mapGetters(['incompleteTodos']),
  },
  methods: {
    addTodo() {
      if (this.addTodoInput === '') return;

      this.$store.commit('ADD_TODO', new Todo(this.addTodoInput));
      this.addTodoInput = '';
    },
  },
};
</script>

<template>
<v-container fluid>
  <v-layout justify-center>
    <v-flex sm6>
      <TextSubmit v-model="addTodoInput" :submit="addTodo" buttonText="Add Todo" label="Todo Name" />
    </v-flex>
  </v-layout>
  <v-layout justify-center>
    <v-flex sm6>
      <TodoTaskList :todos="incompleteTodos" header="Yet to Complete" />
    </v-flex>
  </v-layout>
</v-container>
</template>
