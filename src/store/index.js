/* eslint no-param-reassign: 0 */
import Vue from 'vue';
import Vuex from 'vuex';

import todo from './todo';
import weather from './weather';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    todo,
    weather,
  },
});
