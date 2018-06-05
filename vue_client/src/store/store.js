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
    register(state, registerData) {
      Vue.http
        .post('/users/register', {
          name: registerData.name,
          email: registerData.email,
          password: registerData.password,
          password2: registerData.password2
        })
        .then(res => {
          console.log(res);
          router.push('/login');
        })
        .catch(error => {
          state.errors = error.data;
        });
    },
    login(state, loginData) {
      console.log(loginData);
      Vue.http
        .post('/users/login', {
          email: loginData.email,
          password: loginData.password
        })
        .then(res => {
          state.errors = {};
          console.log(res);
          router.push('/dashboard');
        })
        .catch(error => {
          console.log(error);
          state.errors = error.data;
        });
    }
  },
  actions: {
    register(context, registerData) {
      console.log(registerData);
      context.commit('register', registerData);
    },
    login(context, loginData) {
      context.commit('login', loginData);
    }
  }
});
