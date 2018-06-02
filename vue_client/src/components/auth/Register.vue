<template>
<div>
        <div class="register">
          <div class="container">
            <div class="row">
              <div class="col-md-8 m-auto">
                <h1 class="display-4 text-center">Sign Up</h1>
                <p class="lead text-center">
                  Create your DevConnector account
                </p>
                <form noValidate @submit="onSubmit">
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control form-control-lg"
                      placeholder="Name"
                      v-model="user.name"
                      name="name"
                    />
                  
                  </div>
                  <div class="form-group">
                    <input
                      type="email"
                      class="form-control form-control-lg"
                      placeholder="Email Address"
                      v-model="user.email"
                      name="email"
                      onChange={this.onChange}
                    />
                  
                    <small class="form-text text-muted">
                      This site uses Gravatar so if you want a profile image,
                      use a Gravatar email
                    </small>
                  </div>
                  <div class="form-group">
                    <input
                      type="password"
                      class="form-control form-control-lg"
                      placeholder="Password"
                      name="password"
                      v-model="user.password"
                      onChange={this.onChange}
                    />
                    </div>
                  <div class="form-group">
                    <input
                      type="password"
                      class="form-control form-control-lg"
                      placeholder="Confirm Password"
                      name="password2"
                      v-model="user.password2"
                      onChange={this.onChange}
                    />
                 </div>
                  <input
                    type="submit"
                    class="btn btn-info btn-block mt-4"
                  />
                </form>
              </div>
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
      this.$store.commit('register');
    }
  }
};
</script>

<style scoped>
</style>