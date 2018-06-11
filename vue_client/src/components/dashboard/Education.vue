<template>
  <div class="education">
    <h4 class="mb-4">Education Credentials</h4>
    <table class="table">
    <thead>
      <tr>
        <th>School</th>
        <th>Degree</th>
        <th>Years</th>
        <th></th>
      </tr>
    </thead>
    <tr v-for="edu in education" :key=edu._id>
      <td>{{edu.school}}</td>
      <td>{{edu.degree}}</td>
      <td>{{formatDate(edu.from)}} - {{formatDate(edu.to)}}</td>
      <td><button class="btn btn-danger" @click="onDelete(edu._id)">Delete</button></td>
    </tr>
    </table>
  </div>  
</template>
<script>
import moment from "moment";
export default {
  props: ["education"],
  methods: {
    formatDate: function(date) {
      return moment(date).format("DD/MM/YYYY") == "Invalid date"
        ? "now"
        : moment(date).format("DD/MM/YYYY");
    },
    onDelete: function(exp) {
      this.$store.dispatch("deleteEducation", exp);
    }
  }
};
</script>
<style scoped>
</style>