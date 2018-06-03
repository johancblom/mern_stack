<template>
<div class="login">
        <div class="container">
          <div class="row">
            <div class="col-md-8 m-auto">
              <h1 class="display-4 text-center">Log In</h1>
              <p class="lead text-center">
                Sign in to your DevConnector account
              </p>
              <form onSubmit={this.onSubmit}>
                <div class="form-group">
                  <input
                    type="email"
                    class="form-control form-control-lg"
                    placeholder="Email Address"
                    name="email"
                    value={this.state.email}
                    onChange={this.onChange}
                  />
                </div>
                <div class="form-group">
                  <input
                    type="password"
                    class="form-control form-control-lg"
                    placeholder="Password"
                    name="password"
                    value={this.state.password}
                    onChange={this.onChange}
                  />
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
  computed: {
    // name() {
    //   return this.$store.state.name;
    // },
    email() {
      return this.$store.state.email;
    },
    password() {
      return this.$store.state.password;
    },
    password2() {
      return this.$store.state.password2;
    },
    user() {
      return this.$store.state.user;
    }
  },
  methods: {
    onSubmit: function(e) {
      e.preventDefault();
      this.$store.commit('login');
    }
  }
};
</script>

<style scoped>
</style>