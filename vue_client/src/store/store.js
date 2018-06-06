import Vue from "vue";
import Vuex from "vuex";
import { router } from "../main";
import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    user: {
      isAuthenticated: false
    },
    errors: {
      name: "",
      email: "",
      password: "",
      password2: ""
    }
  },
  mutations: {
    register(state, registerData) {
      axios
        .post("/users/register", {
          name: registerData.name,
          email: registerData.email,
          password: registerData.password,
          password2: registerData.password2
        })
        .then(res => {
          state.errors = {};
          console.log(res);
          router.push("/login");
        })
        .catch(error => {
          state.errors = error.data;
        });
    },
    login(state, loginData) {
      axios
        .post("/users/login", {
          email: loginData.email,
          password: loginData.password
        })
        .then(res => {
          state.errors = {};
          state.user.isAuthenticated = true;
          console.log(state.user);
          const { token } = res.data;
          localStorage.setItem("jwtToken", token);
          setAuthToken(token);
          const details = jwt_decode(token);
          state.user = { ...state.user, details };
          console.log(state.user);
          router.push("/dashboard");
        })
        .catch(error => {
          console.log(error);
          state.errors = error.response.data;
        });
    },
    setCurrentUser(state, details) {
      state.user.isAuthenticated = true;
      state.user = { ...state.user, details };
    },
    logoutUser(state) {
      state.user.isAuthenticated = false;
      state.user.details = {};
      localStorage.removeItem("jwtToken");
      router.push("/");
    }
  },
  actions: {
    register(context, registerData) {
      console.log(registerData);
      context.commit("register", registerData);
    },
    login(context, loginData) {
      context.commit("login", loginData);
    },
    setCurrentUser(context, decoded) {
      context.commit("setCurrentUser", decoded);
    },
    logoutUser(context) {
      context.commit("logoutUser");
    }
  }
});
