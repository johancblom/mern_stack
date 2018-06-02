import landing from './components/layout/Landing.vue';
import register from './components/auth/Register.vue';

export default [
  { path: '/', component: landing },
  { path: '/register', component: register }
];
