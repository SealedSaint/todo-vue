/* eslint no-param-reassign: 0 */
import _ from 'lodash';

import { getCityWeather } from '@/lib/openweather.lib';

export default {
  // Localized data store
  state: {
    cityWeather: {},
  },
  // Transformations of state
  getters: {
    alphabeticCityWeather(state) {
      return _(state.cityWeather)
        .values()
        .sortBy('city')
        .value();
    },
  },
  // ONLY MUTATE STATE HERE
  mutations: {
    ADD_CITY_WEATHER(state, cityWeatherData) {
      state.cityWeather = {
        ...state.cityWeather,
        [cityWeatherData.city]: cityWeatherData,
      };
    },
  },
  // Asynchronous "actions" that call "mutations"
  // DOES NOT UPDATE STATE
  actions: {
    async getWeatherForCity({ commit }, city) {
      // Call api for weather data
      const cityWeatherData = await getCityWeather(city);
      // Commit mutation
      commit('ADD_CITY_WEATHER', cityWeatherData);
    },
  },
};
