/* eslint no-param-reassign: 0 */
import _ from 'lodash';

import { getCityWeather } from '@/lib/openweather.lib';

export default {
  state: {
    cityWeather: {},
  },
  getters: {
    alphabeticCityWeather(state) {
      return _(state.cityWeather)
        .values()
        .sortBy('city')
        .value();
    },
  },
  mutations: {
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
};
