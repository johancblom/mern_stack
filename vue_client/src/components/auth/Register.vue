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
                      v-bind:class="{ 'is-invalid': errors.name }"
                      placeholder="Name"
                      v-model="userData.name"
                      name="name"
                    />
                    <div v-if="errors.name" class="invalid-feedback">{{errors.name}}</div>
                  </div>
                  <div class="form -group">
                    <input
                      type="email"
                      class="form-control form-control-lg"
                      v-bind:class="{ 'is-invalid': errors.email }"
                      placeholder="Email Address"
                      v-model="userData.email"
                      name="email"
                      onChange={this.onChange}
                    />
                    <div v-if="errors.email" class="invalid-feedback">{{errors.email}}</div>

                    <small class="form-text text-muted">
                      This site uses Gravatar so if you want a profile image,
                      use a Gravatar email
                    </small>
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
                  <div class="form-group">
                    <input
                      type="password"
                      class="form-control form-control-lg"
                      v-bind:class="{ 'is-invalid': errors.password2 }"
                      placeholder="Confirm Password"
                      name="password2"
                      v-model="userData.password2"
                      onChange={this.onChange}
                    />
                    <div v-if="errors.password2" class="invalid-feedback">{{errors.password2}}</div>

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
  mounted() {
    this.$store.commit('error', { response: { data: {} } });
  },
  data() {
    return {
      userData: {
        name: '',
        email: '',
        password: '',
        password2: ''
      }
    };
  },
  computed: {
    errors() {
      return this.$store.state.errors;
    }
  },
  methods: {
    onSubmit: function(e) {
      e.preventDefault();
      this.$store.dispatch('register', this.userData);
    }
  }
};
</script>

<style scoped>
</style>