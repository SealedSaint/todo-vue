import Vue from 'vue';
import Router from 'vue-router';
import Progress from '@/components/Todo/Progress.vue';
import Todo from '@/components/Todo/Todo.vue';
import Weather from '@/components/Weather/Weather.vue';

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
