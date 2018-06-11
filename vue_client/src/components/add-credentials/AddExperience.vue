<template>
  <div class="add-experience">
    <div class="container">
      <div class="row">
        <div class="col-md-8 m-auto">
          <router-link to="/dashboard" class="btn btn-light">Go Back</router-link>
          <h1 class="display-4 text-center">Add Experience</h1>
          <p class="lead text-center"> Add any job or position that you have had in the past or current</p>
          <small class="d-block pb-3">* = required fields</small>
          <form noValidate @submit.prevent="onSubmit()">
            <TextFieldGroup placeholder="* Company" name="company" v-model=experienceData.company :error="errors.company" />
            <TextFieldGroup placeholder="* Job Title" name="title" v-model=experienceData.title :error="errors.title" />
            <TextFieldGroup placeholder="Location" name="location" v-model=experienceData.location :error="errors.location" />
            <h6> From Date</h6>
            <TextFieldGroup name="from" type="date" v-model=experienceData.from :error="errors.from" />
            <h6> To Date</h6>
            <TextFieldGroup name="to" type="date" v-model=experienceData.to :error="errors.to" :disabled=experienceData.disabled />      
            <div class="form-check mb-4">
              <input type="checkbox" class="form-check-input" name="current" v-model=experienceData.current @change="onCheck()" id="current" />
              <label for="current" class="form-check-label"> Current Job</label>
            </div>
            <TextAreaFieldGroup name="description" placeholder="Job Description" v-model=experienceData.description :error="errors.description" info="Tell us about the position" />      
            <input type="submit" class="btn btn-info btn-block mt-4" />
      
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import TextFieldGroup from "../common/TextFieldGroup.vue";
import TextAreaFieldGroup from "../common/TextAreaFieldGroup.vue";

export default {
  components: {
    TextFieldGroup: TextFieldGroup,
    TextAreaFieldGroup: TextAreaFieldGroup
  },
  data() {
    return {
      experienceData: {
        company: "",
        title: "",
        location: "",
        from: "",
        to: "",
        current: false,
        disabled: false
      }
    };
  },
  computed: {
    errors() {
      return this.$store.state.errors;
    }
  },
  methods: {
    onCheck: function() {
      this.experienceData.disabled = !this.experienceData.disabled;
    },
    onSubmit: function(e) {
      this.$store.dispatch("addExperience", this.experienceData);
    }
  }
};
</script>
<style scoped>
</style>