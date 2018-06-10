<template>
  <div class="create-profile">
    <div class="container">
      <div class="row">
        <div class="col-md-8 m-auto">
          <h1 class="display-4 text-center">Edit Your Profile</h1>
          <p class="lead text-center">Add or Update your data</p>
          <small class="d-block pb-3">* = required fields</small>
          <form noValidate @submit="onSubmit">
            <TextFieldGroup placeholder="* Profile Handle" name="handle" v-model="profileData.handle" info="A unique handle for your profile URL. Your full name, company name, nickname, etc (This CAN'T be changed later)" :error="errors.handle"/>
            <SelectListGroup placeholder="* Select Your Professional Status" name="status" :selectOptions=options v-model="profileData.status" info="Give us an idea of where you are at in your career" :error="errors.status"/>
            <TextFieldGroup placeholder="Company" name="company" v-model="profileData.company" info="Could be your own company or one you work for" :error="errors.company"/>
            <TextFieldGroup placeholder="Website" name="website" v-model="profileData.website" info="Could be your own website or a company site" :error="errors.website"/>
            <TextFieldGroup placeholder="City" name="city" v-model="profileData.location" info="City or city & state suggested (eg. Boston, MA)" :error="errors.location"/>
            <TextFieldGroup placeholder="* Skills" name="skills" v-model="profileData.skills" info="Please use comma separated values (eg. HTML, CSS, JavaScript, PHP)" :error="errors.skills"/>
            <TextFieldGroup placeholder="Github Username" name="githubusername" v-model="profileData.githubusername" info="If you want your latest repos and a Github link, include your username" :error="errors.githubusername"/>
            <TextAreaFieldGroup placeholder="Short Bio" name="bio" v-model="profileData.bio" info="Tell us a little about yourself" :error="errors.bio" />
            <div class="mb-3">
              <button @click="toggleDisplaySocialInputs" class="btn btn-light">Add Social Network Links</button>
              <span class="text-muted">Optional</span>
            </div>
            <div v-if="displaySocialInputs == true">
              <InputGroup placeholder="Twitter Profile URL" name="twitter" icon="fab fa-twitter" v-model="profileData.twitter" :error="errors.twitter" />
              <InputGroup placeholder="Facebook Profile URL" name="facebook" icon="fab fa-facebook" v-model="profileData.facebook" :error="errors.facebook"/>
              <InputGroup placeholder="Linkedin Profile URL" name="linkedin" icon="fab fa-linkedin" v-model="profileData.linkedin" :error="errors.linkedin" />
              <InputGroup placeholder="YouTube Channel URL" name="youtube" icon="fab fa-youtube" v-model="profileData.youtube" :error="errors.youtube"/>
              <InputGroup placeholder="Instagram Page URL" name="instagram" icon="fab fa-instagram" v-model="profileData.instagram" :error="errors.instagram"/>   
            </div>
            <input type="submit" value="Submit" class="btn btn-info btn-block mt-4" />
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import TextFieldGroup from '../common/TextFieldGroup.vue';
import SelectListGroup from '../common/SelectListGroup.vue';
import TextAreaFieldGroup from '../common/TextAreaFieldGroup.vue';
import InputGroup from '../common/InputGroup.vue';
export default {
  components: {
    TextFieldGroup: TextFieldGroup,
    SelectListGroup: SelectListGroup,
    TextAreaFieldGroup: TextAreaFieldGroup,
    InputGroup: InputGroup
  },
  mounted() {
    // console.log(this.$store.state);
    // this.profileData = this.$store.state.profile;
  },
  data() {
    return {
      // profileData: {
      //   handle: '',
      //   status: '',
      //   company: '',
      //   website: '',
      //   city: '',
      //   skills: '',
      //   githubusername: '',
      //   bio: '',
      //   twitter: '',
      //   facebook: '',
      //   linkedin: '',
      //   youtube: '',
      //   instagram: ''
      // },
      options: [
        { label: 'Developer', value: 'Developer' },
        { label: 'Manager', value: 'Manager' },
        { label: 'Other', value: 'Other' }
      ],
      displaySocialInputs: false
    };
  },
  computed: {
    profileData() {
      return this.$store.state.profile;
    },
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
      this.$store.dispatch('createProfile', this.profileData);
    },
    toggleDisplaySocialInputs: function(e) {
      e.preventDefault();
      this.displaySocialInputs = !this.displaySocialInputs;
    }
  }
};
</script>

<style scoped>
</style>