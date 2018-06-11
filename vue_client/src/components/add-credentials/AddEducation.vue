
<template>
  <div class="add-education">
    <div class="container">
      <div class="row">
        <div class="col-md-8 m-auto">
          <router-link to="/dashboard" class="btn btn-light">Go Back</router-link>
          <h1 class="display-4 text-center">Add Education</h1>
          <p class="lead text-center"> Add any school, bootcamp, etc that you have attended</p>
          <small class="d-block pb-3">* = required fields</small>
          <form noValidate @submit.prevent="onSubmit()">
            <TextFieldGroup placeholder="* School" name="school" v-model=educationData.school :error="errors.school" />
            <TextFieldGroup placeholder="* Degree or Certification" name="degree" v-model=educationData.degree :error="errors.degree" />
            <TextFieldGroup placeholder="* Field of study" name="fieldofstudy" v-model=educationData.fieldofstudy :error="errors.fieldofstudy" />
            <h6> From Date</h6>
            <TextFieldGroup name="from" type="date" v-model=educationData.from :error="errors.from" />
            <h6> To Date</h6>
            <TextFieldGroup name="to" type="date" v-model=educationData.to :error="errors.to" :disabled=educationData.disabled />      
            <div class="form-check mb-4">
              <input type="checkbox" class="form-check-input" name="current" v-model=educationData.current @change="onCheck()" id="current" />
              <label for="current" class="form-check-label"> Current Job</label>
            </div>
            <TextAreaFieldGroup name="description" placeholder="Program Description" v-model=educationData.description :error="errors.description" info="Tell us about the program that you were in" />      
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
      educationData: {
        school: "",
        degree: "",
        fieldofstudy: "",
        from: "",
        to: "",
        current: false,
        disabled: false,
        description: ""
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
      this.educationData.disabled = !this.educationData.disabled;
    },
    onSubmit: function(e) {
      this.$store.dispatch("addEducation", this.educationData);
    }
  }
};
</script>
<style scoped>
</style>