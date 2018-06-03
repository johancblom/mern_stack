import landing from './components/layout/Landing.vue';
import register from './components/auth/Register.vue';
import login from './components/auth/Login.vue';

export default [
  { path: '/', component: landing },
  { path: '/register', component: register },
  { path: '/login', component: login }
];
