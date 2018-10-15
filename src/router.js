import Vue from 'vue';
import Router from 'vue-router';
import Progress from '@/views/Progress/Progress.vue';
import Todo from '@/views/Todo/Todo.vue';
import Weather from '@/views/Weather/Weather.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/todo',
    },
    {
      path: '/progress',
      name: 'progress',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: Progress,
    },
    {
      path: '/todo',
      name: 'todo',
      component: Todo,
    },
    {
      path: '/weather',
      name: 'weather',
      component: Weather,
    },
  ],
});
