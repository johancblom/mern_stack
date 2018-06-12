<template>
  <div class="profiles">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h1 class="display-4 text-center">Developer Profiles</h1>
          <p class="lead text-center">
            Browse and connect with developers
          </p>
          <h1 v-for="profile in profiles" :key="profile._id"> PROFILES HERE</h1>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Spinner from "../common/Spinner.vue";
export default {
  mounted() {
    this.$store.dispatch("getAllProfiles");
  },
  computed: {
    profiles() {
      this.$store.getters.profiles;
    }
  },
  components: {
    Spinner: Spinner
  }
};
</script>
<style scoped>
</style>