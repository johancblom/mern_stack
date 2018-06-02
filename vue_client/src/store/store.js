import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    user: {
      name: '',
      email: '',
      password: '',
      password2: ''
    }
  },
  mutations: {
    register(state) {
      Vue.http
        .get('http://localhost:5000/api/users/test')
        .then(res => console.log(res));
    }
  }
});
