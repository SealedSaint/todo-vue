<template>
<div>
  <h1>Weather</h1>
  <div class="add-weather-group">
    <TextSubmit v-model="addCityInput" :submit="addCity" buttonText="Get Weather for City" />
  </div>
  <div class="city-weather-list">
    <div v-for="(weather, i) in alphabeticCityWeather" :key="i" class="city-weather-card">
      <div>{{ weather.city }}</div>
      <div>{{ weather.description }}</div>
      <div>{{ weather.temperature }}</div>
    </div>
  </div>
</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import TextSubmit from '@/components/TextSubmit.vue';

export default {
  name: 'weather',
  components: {
    TextSubmit,
  },
  computed: {
    ...mapGetters(['alphabeticCityWeather']),
  },
  data: () => ({
    addCityInput: '',
  }),
  methods: {
    addCity() {
      if (!this.addCityInput) return;

      this.getWeatherForCity(this.addCityInput);
    },
    ...mapActions(['getWeatherForCity']),
  },
}
</script>

<style>
.city-weather-list {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
}
.city-weather-card {
  border: 1px solid black;
  border-radius: 4px;
  margin: 10px;
  padding: 10px;
}
</style>
