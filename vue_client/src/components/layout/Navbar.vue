<template>
    <nav class="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
        <div class="container">
          <router-link class="navbar-brand" to="/">
            DevConnector
          </router-link>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#mobile-nav"
          >
            <span class="navbar-toggler-icon" />
          </button>

          <div class="collapse navbar-collapse" id="mobile-nav">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item">
                <router-link class="nav-link" to="/profiles">
                  {{" "}}
                  Developers
                </router-link>
              </li>
            </ul>

            <ul v-if="user.isAuthenticated" class="navbar-nav ml-auto">
              <li class="nav-item">
                <a href="#"  @click="logoutUser" class="nav-link">
                  <img class="rounded-circle" v-bind:src="user.details.avatar" v-bind:alt="user.details.name" style='width: "25px", marginRight: "5px"' title="You must have a Gravatar connected to your email to display an image"/>{{' '}}
                  Logout
                </a>
              </li>
            </ul>


            <ul v-else class="navbar-nav ml-auto">
              <li class="nav-item">
                <router-link class="nav-link" to="/register">
                  Sign Up
                </router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/login">
                  Login
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
</template>

<script>
import VueRouter from 'vue-router';
export default {
  computed: {
    user() {
      return this.$store.state.user;
    }
  },
  methods: {
    logoutUser() {
      this.$store.dispatch('logoutUser');
      this.$store.dispatch('clearCurrentProfile');
    }
  }
};
</script>

<style scoped>
ul li a img {
  width: 25px;
  height: 25px;
}
</style>
