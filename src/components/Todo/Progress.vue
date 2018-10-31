<script>
import { mapGetters } from 'vuex';
import TodoTaskList from './TodoTaskList.component.vue';

export default {
  name: 'todo',
  components: {
    TodoTaskList,
  },
  computed: {
    ...mapGetters([
      'completeTodos',
    ]),
  },
};
</script>

<template>
<v-container fluid>
  <v-layout v-if="completeTodos.length" justify-center>
    <v-flex sm6>
      <TodoTaskList :todos="completeTodos" header="Completed" />
    </v-flex>
  </v-layout>
  <h1 v-else>No Complete Todos!</h1>
</v-container>
</template>
