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
    TOGGLE_TODO(state, todo) {
      const todoToUpdate = state.todos.find(t => t.name === todo.name);
      todoToUpdate.done = !todoToUpdate.done;
    },
  },
  actions: {
    toggleTodo({ commit }, todo) {
      setTimeout(() => {
        commit('TOGGLE_TODO', todo);
      }, 1000);
    },
  },
};
