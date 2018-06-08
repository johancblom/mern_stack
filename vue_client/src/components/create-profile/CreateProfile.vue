<template>
  <div class="create-profile">
    <div class="container">
      <div class="row">
        <div class="col-md-8 m-auto">
          <h1 class="display-4 text-center">Create Your Profile</h1>
          <p class="lead text-center">Let's get some information to make your profile stand out</p>
          <small class="d-block pb-3">* = required fields</small>
          <form @submit="onSubmit()">
            <TextFieldGroup placeholder="* Profile Handle" name="handle" value="" info="A unique handle for your profile URL. Your full name, company name, nickname, etc (This CAN'T be changed later)"/>
            <SelectListGroup placeholder="* Select Your Professional Status" name="status" :selectOptions=options info="Give us an idea of where you are at in your career" />
            <TextFieldGroup placeholder="Company" name="company" value="" info="Could be your own company or one you work for"/>
            <TextFieldGroup placeholder="Website" name="website" value="" info="Could be your own website or a company site"/>
            <TextFieldGroup placeholder="City" name="city" value="" info="City or city & state suggested (eg. Boston, MA)"/>
            <TextFieldGroup placeholder="* Skills" name="skills" value="" info="Please use comma separated values (eg. HTML, CSS, JavaScript, PHP)"/>
            <TextFieldGroup placeholder="Github Username" name="githubusername" value="" info="If you want your latest repos and a Github link, include your username"/>
            <TextAreaFieldGroup placeholder="Short Bio" name="bio" value="" info="Tell us a little about yourself" />
            <div class="mb-3">
              <button @click="toggleDisplaySocialInputs" class="btn btn-light">Add Social Network Links</button>
              <span class="text-muted">Optional</span>
            </div>
            <input type="submit" value="Submit" class="btn btn-info btn-block mt-4">
            <div v-if="displaySocialInputs == true">
              <InputGroup placeholder="Twitter Profile URL" name="twitter" icon="fab fa-twitter" value="" />
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import TextFieldGroup from "../common/TextFieldGroup.vue";
import SelectListGroup from "../common/SelectListGroup.vue";
import TextAreaFieldGroup from "../common/TextAreaFieldGroup.vue";
export default {
  components: {
    TextFieldGroup: TextFieldGroup,
    SelectListGroup: SelectListGroup,
    TextAreaFieldGroup: TextAreaFieldGroup
  },
  data() {
    return {
      userData: {
        email: "",
        password: ""
      },
      options: [
        { label: "Developer", value: "Developer" },
        { label: "Manager", value: "Manager" },
        { label: "Other", value: "Other" }
      ],
      displaySocialInputs: false
    };
  },
  computed: {
    user() {
      return this.$store.state.user;
    }
  },
  methods: {
    onSubmit: function(e) {
      e.preventDefault();
      console.log("submit");
    },
    toggleDisplaySocialInputs: function() {
      this.displaySocialInputs = !this.displaySocialInputs;
    }
  }
};
</script>

<style scoped>
</style>