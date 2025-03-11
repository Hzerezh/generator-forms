import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/pages/HelloWorld/index.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  }
  // Добавляйте новые маршруты в соответствии с FSD (например, фичи, страницы)
];

export default createRouter({
  history: createWebHistory(),
  routes
});