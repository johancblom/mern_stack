import landing from './components/layout/Landing.vue';
import register from './components/auth/Register.vue';
import login from './components/auth/Login.vue';
import dashboard from './components/dashboard/Dashboard.vue';
import CreateProfile from './components/create-profile/CreateProfile.vue';
import EditProfile from './components/edit-profile/EditProfile.vue';

export default [
  { path: '/', component: landing },
  { path: '/register', component: register },
  { path: '/login', component: login },
  { path: '/dashboard', component: dashboard, meta: { requiresAuth: true } },
  {
    path: '/create-profile',
    component: CreateProfile,
    meta: { requiresAuth: true }
  },
  {
    path: '/edit-profile',
    component: EditProfile,
    meta: { requiresAuth: true }
  }
];
