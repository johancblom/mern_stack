import Vue from 'vue';
import Vuex from 'vuex';
import { router } from '../main';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    user: {
      name: '',
      email: '',
      password: '',
      password2: ''
    },
    errors: {
      name: '',
      email: '',
      password: '',
      password2: ''
    }
  },
  mutations: {
    register(state) {
      Vue.http
        .post('/users/register', {
          name: state.user.name,
          email: state.user.email,
          password: state.user.password,
          password2: state.user.password2
        })
        .then(res => {
          console.log(res);
          router.push('/login');
        })
        .catch(error => {
          state.errors = error.data;
        });
    }
  }
});
