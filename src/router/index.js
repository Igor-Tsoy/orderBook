import { createRouter, createWebHistory } from 'vue-router';

import guards from '@/router/guards';

import Settings from '@/views/AppSettings.vue';
import OrderBook from '@/views/OrderBook.vue';

const routes = [
  { path: '/', redirect: '/settings' },
  { path: '/settings', component: Settings, name: 'Settings' },
  {
    path: '/order-book',
    component: OrderBook,
    name: 'OrderBook',
    beforeEnter: guards.hasData,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
