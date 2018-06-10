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
    },
    loading: false,
    profile: null,
    profiles: null
  },
  getters: {
    profile: state => {
      return {
        ...state.profile,
        skills: state.profile.skills.join(),
        social: state.profile.social || {}
      };
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
      console.log(details);
      if (details.keys) {
        state.user.isAuthenticated = true;
      } else {
        state.user.isAuthenticated = false;
      }
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
    },
    profileLoading(state) {
      state.loading = true;
    },
    getProfile(state, data) {
      state.loading = false;
      const skills = data.skills ? data.skills.join() : null;
      state.profile = data;
    },
    createProfile(state, data) {
      state.profile = data;
    },
    clearProfile(state) {
      state.profile = null;
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
    },
    getCurrentProfile(context) {
      context.commit('profileLoading');
      axios
        .get('/profile')
        .then(res => {
          context.commit('getProfile', res.data);
        })
        .catch(res => {
          context.commit('getProfile', {});
        });
    },
    createProfile(context, profileData) {
      axios
        .post('/profile', profileData)
        .then(res => {
          //context.commit('createProfile', res.data);
          context.commit('error', { response: { data: {} } });
          router.push('/dashboard');
        })
        .catch(error => {
          context.commit('error', error);
        });
      //context.commit('createProfile', profileData);
    },
    clearCurrentProfile(context) {
      context.commit('clearProfile');
    },
    deleteAccount(context) {
      if (window.confirm('Are you sure? This can NOT be undone')) {
        axios
          .delete('/profile')
          .then(res => {
            router.push('/login');
            this.dispatch('setCurrentUser', {});
          })
          .catch(err => {
            console.log(err);
            context.commit('errors', err);
          });
      }
    }
  }
});
