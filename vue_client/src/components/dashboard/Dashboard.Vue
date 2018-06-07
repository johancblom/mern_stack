<template>
  <div class="dashboard">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h1>Dashboard</h1>
          <h4 v-if="loading || !profile">Loading ...</h4>
          <h2 v-else>Hello</h2>
        </div>
      </div>
    </div>
  </div>
</template>
      <script>
export default {
  mounted() {
    this.$store.dispatch('getCurrentProfile');
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
    profile() {
      return this.$store.state.profile;
    },
    loading() {
      return this.$store.state.loading;
    }
  },
  methods: {}
};
</script>

<style scoped>
</style>