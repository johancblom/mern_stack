<template>
  <div class="experience">
    <h4 class="mb-4">Experience Credentials</h4>
    <table class="table">
    <thead>
      <tr>
        <th>Company</th>
        <th>Title</th>
        <th>Years</th>
        <th></th>
      </tr>
    </thead>
    <tr v-for="exp in experience" :key=exp._id>
      <td>{{exp.company}}</td>
      <td>{{exp.title}}</td>
      <td>{{formatDate(exp.from)}} - {{formatDate(exp.to)}}</td>
      <td><button class="btn btn-danger" @click="onDelete(exp._id)">Delete</button></td>
    </tr>
    </table>
  </div>  
</template>
<script>
import moment from "moment";
export default {
  props: ["experience"],
  methods: {
    formatDate: function(date) {
      return moment(date).format("DD/MM/YYYY") == "Invalid date"
        ? "now"
        : moment(date).format("DD/MM/YYYY");
    },
    onDelete: function(exp) {
      this.$store.dispatch("deleteExperience", exp);
    }
  }
};
</script>
<style scoped>
</style>