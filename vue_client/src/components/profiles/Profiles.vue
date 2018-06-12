<template>
  <div class="profiles">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h1 class="display-4 text-center">Developer Profiles</h1>
          <p class="lead text-center">
            Browse and connect with developers
          </p>
          <ProfileItem v-for="profile in profiles" :profile=profile :key="profile._id"></ProfileItem>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Spinner from '../common/Spinner.vue';
import ProfileItem from './ProfileItem.vue';
export default {
  components: {
    ProfileItem: ProfileItem
  },
  mounted() {
    this.$store.dispatch('getAllProfiles');
  },
  computed: {
    profiles() {
      return this.$store.getters.profiles;
    }
  }
};
</script>
<style scoped>
</style>