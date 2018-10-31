/* eslint no-param-reassign: 0 */
import Vue from 'vue';
import Vuex from 'vuex';

import todo from '@/components/Todo/todo.store';
import weather from '@/components/Weather/weather.store';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    todo,
    weather,
  },
  strict: true,
});
