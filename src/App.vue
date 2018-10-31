<template>
  <v-app>
    <v-toolbar class="indigo white--text">
      <v-toolbar-title>{{ currentRoute }}</v-toolbar-title>
      <v-spacer />
      <v-toolbar-items>
        <v-btn v-for="page in pages" :key="page.route" flat :to="page.route" class="white--text">{{ page.name }}</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-content>
      <div class="content-container">
        <router-view />
      </div>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    pages: [
      { name: 'Todo', route: 'todo' },
      { name: 'Todo Progress', route: 'progress' },
      { name: 'Weather', route: 'weather' },
    ],
  }),
  computed: {
    currentRoute() {
      return this.$route.name;
    },
  },
  methods: {
    goTo(routeName) {
      this.$router.push(routeName);
    }
  },
};
</script>

<style scoped>
.content-container {
  text-align: center;
  padding: 15px;
}
</style>
