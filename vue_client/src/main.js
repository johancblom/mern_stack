import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import Routes from './routes';
import { store } from './store/store';
import setAuthToken from './utils/setAuthToken';
import jwt_decode from 'jwt-decode';

Vue.use(VueRouter);
Vue.use(VueResource);

// Register routes
export const router = new VueRouter({
  routes: Routes,
  mode: 'history'
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.state.user.isAuthenticated) {
      next({
        path: '/login'
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

if (localStorage.jwtToken) {
  setAuthToken(localStorage.jwtToken);
  const decoded = jwt_decode(localStorage.jwtToken);
  store.dispatch('setCurrentUser', decoded);

  //Check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    store.dispatch('logoutUser');
    store.dispatch('clearCurrentProfile');
    // Redirect to login
    router.push('/login');
  }
}

new Vue({
  store: store,
  el: '#app',
  render: h => h(App),
  router: router
});
