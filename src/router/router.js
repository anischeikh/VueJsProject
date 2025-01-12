import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';
import tmp from '../components/template.vue';
import third from '../components/thirdScreen.vue';
import second from '../components/secondScreen.vue';
import first from '../components/firstScreen.vue';
import inscription from '../components/Inscription';

const routes = [
  {
    path: '/',
    redirect: '/home',  // Rediriger explicitement vers "/home"
  },
  {
    path:  '/Inscription',
    name: inscription,
    component: inscription // Rediriger explicitement vers "/home"
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/template',
    name: 'template',
    component: tmp
  },
  { path: '/ThirdScreen', name: 'third', component: third },

  { path: '/secondScreen', name: 'second', component: second },
  { path: '/firstScreen', name: 'first', component: first },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
