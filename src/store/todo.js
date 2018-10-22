/* eslint no-param-reassign: 0 */
export default {
  state: {
    todos: [],
  },
  getters: {
    completeTodos(state) {
      return state.todos.filter(({ done }) => done);
    },
    incompleteTodos(state) {
      return state.todos.filter(({ done }) => !done);
    },
  },
  mutations: {
    ADD_TODO(state, todo) {
      state.todos = [...state.todos, todo];
    },
  },
};
