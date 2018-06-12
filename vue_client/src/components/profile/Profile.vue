<template>
  <div class="profile">
    <div class="container">
      <div class= "row">
        <div class="col-md-12">
          <div class="col-md-6">
              <router-link to="/profiles" class="btn btn-light mb-3 float-left">
                Back To Profiles
              </router-link>
          </div>
          <div class="col-md-6" />
        </div>

        <ProfileHeader />
        <ProfileAbout />
        <ProfileCreds />
        <ProfileGithub />
      </div>
    </div>
  </div>
</template>
<script>
import ProfileHeader from './ProfileHeader.vue';
import ProfileAbout from './ProfileAbout.vue';
import ProfileCreds from './ProfileCreds.vue';
import ProfileGithub from './ProfileGithub.vue';
export default {
  components: {
    ProfileHeader: ProfileHeader,
    ProfileAbout: ProfileAbout,
    ProfileCreds: ProfileCreds,
    ProfileGithub: ProfileGithub
  },
  mounted() {
    console.log('handle: ' + { ...this.$route.params });
    this.$store.dispatch('getProfileByHandle', this.$route.params.handle);
  }
};
</script>
<style scoped>
</style>
