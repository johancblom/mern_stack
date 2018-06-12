<template>
  <div class="login">
    <div class="container">
      <div class="row">
        <div class="col-md-8 m-auto">
          <h1 class="display-4 text-center">Log In</h1>
          <p class="lead text-center">
            Sign in to your DevConnector account
          </p>
          <form noValidate @submit="onSubmit">
            <div class="form-group">
              <input
                type="email"
                class="form-control form-control-lg"
                v-bind:class="{ 'is-invalid': errors.email }"

                placeholder="Email Address"
                name="email"
                v-model="userData.email"
                onChange={this.onChange}
              />
              <div v-if="errors.email" class="invalid-feedback">{{errors.email}}</div>
            </div>
            <div class="form-group">
              <input
                type="password"
                class="form-control form-control-lg"
                v-bind:class="{ 'is-invalid': errors.password }"
                placeholder="Password"
                name="password"
                v-model="userData.password"
                onChange={this.onChange}
              />
              <div v-if="errors.password" class="invalid-feedback">{{errors.password}}</div>
            </div>
            <input type="submit" class="btn btn-info btn-block mt-4" />
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  mounted() {
    this.$store.commit("error", { response: { data: {} } });
    if (this.$store.state.user.isAuthenticated) {
      this.$router.push("/dashboard");
    }
  },
  data() {
    return {
      userData: {
        email: "",
        password: ""
      }
    };
  },
  computed: {
    errors() {
      return this.$store.state.errors;
    },
    user() {
      return this.$store.state.user;
    }
  },
  methods: {
    onSubmit: function(e) {
      e.preventDefault();
      this.$store.dispatch("login", this.userData);
    }
  }
};
</script>

<style scoped>
</style>