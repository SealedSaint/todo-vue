/* eslint no-param-reassign: 0 */
import _ from 'lodash';
import Vue from 'vue';
import Vuex from 'vuex';

import { getCityWeather } from '@/lib/openweather';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cityWeather: {},
    todos: [],
  },
  getters: {
    alphabeticCityWeather(state) {
      return _(state.cityWeather)
        .values()
        .sortBy('city')
        .value();
    },
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
    ADD_CITY_WEATHER(state, cityWeatherData) {
      state.cityWeather = {
        ...state.cityWeather,
        [cityWeatherData.city]: cityWeatherData,
      };
    },
  },
  actions: {
    async getWeatherForCity({ commit }, city) {
      // Call api for weather data
      const cityWeatherData = await getCityWeather(city);
      // Commit mutation
      commit('ADD_CITY_WEATHER', cityWeatherData);
    },
  },
});
