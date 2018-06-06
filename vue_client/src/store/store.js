import Vue from 'vue';
import Vuex from 'vuex';
import { router } from '../main';
import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';
import jwt_decode from 'jwt-decode';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    user: {
      isAuthenticated: false
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
      state.errors = {};
    },
    login(state, details) {
      state.errors = {};
      state.user.isAuthenticated = true;
      state.user = { ...state.user, details };
    },
    setCurrentUser(state, details) {
      state.user.isAuthenticated = true;
      state.user = { ...state.user, details };
    },
    logoutUser(state) {
      state.user.isAuthenticated = false;
      state.user.details = {};
      localStorage.removeItem('jwtToken');
      router.push('/');
    },
    error(state, error) {
      state.errors = error.response.data;
    }
  },
  actions: {
    register(context, registerData) {
      axios
        .post('/users/register', {
          name: registerData.name,
          email: registerData.email,
          password: registerData.password,
          password2: registerData.password2
        })
        .then(res => {
          context.commit('register');
          router.push('/login');
        })
        .catch(error => {
          context.commit('error', error);
        });
    },
    login(context, loginData) {
      axios
        .post('/users/login', {
          email: loginData.email,
          password: loginData.password
        })
        .then(res => {
          const { token } = res.data;
          localStorage.setItem('jwtToken', token);
          setAuthToken(token);
          const details = jwt_decode(token);
          context.commit('login', details);
          router.push('/dashboard');
        })
        .catch(error => {
          context.commit('error', error);
        });
    },
    setCurrentUser(context, decoded) {
      context.commit('setCurrentUser', decoded);
    },
    logoutUser(context) {
      context.commit('logoutUser');
    }
  }
});
