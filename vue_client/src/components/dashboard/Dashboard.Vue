<template>
  <div class="dashboard">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h1>Dashboard</h1>
          <h4 v-if="loading || !profile"><Spinner/></h4>
          <div v-else-if="Object.keys(profile).length > 0">
            <p class="lead text-muted">Welcome <router-link :to="{ path:`/profile/${profile.handle}`}"> {{ user.details.name }}</router-link></p>
            <ProfileActions/>
            <Experience :experience=profile.experience />
            <div id="deleteAccount"></div>
            <button class="btn btn-danger" @click="onDeleteClick">Delete My Account</button>
          </div>
          <template v-else class="lead text-muted">
            <p class="lead text-muted">Welcome {{ user.details.name }}</p>
            <p>You have not yet setup a profile, please add some info</p>
            <router-link to="/create-profile" class="btn btn-lg btn-info">Create profile</router-link>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>
      <script>
import Spinner from "../common/Spinner.vue";
import ProfileActions from "./ProfileActions.vue";
import Experience from "./Experience.vue";
export default {
  components: {
    Spinner: Spinner,
    ProfileActions: ProfileActions,
    Experience: Experience
  },
  mounted() {
    this.$store.dispatch("getCurrentProfile");
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
  methods: {
    onDeleteClick() {
      this.$store.dispatch("deleteAccount");
    }
  }
};
</script>

<style scoped>
#deleteAccount {
  margin-bottom: 160px;
}
</style>