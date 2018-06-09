<template>
  <div class="form-group">
    <select
      class="form-control form-control-lg"
      v-bind:class="{ 'is-invalid': error }"
      :name=name
      :placeholder=placeholder
      @input="event => { $emit('input', event.target.value) }"
      v-model="selected"
    >
      <option selected disabled value="">{{placeholder}}</option>
      <option v-for="option in selectOptions" v-bind:key="option.value">{{option.label}}</option>
    </select>
    <small v-if="info" class="form-text text-muted">{{info}}</small>
    <div v-if="error" class="invalid-feedback">{{error}}</div>
  </div>
</template>
<script>
export default {
  mounted() {
    this.selected = this.value;
  },
  watch: {
    value: function(newValue) {
      this.selected = newValue;
    }
  },
  props: {
    placeholder: { type: String },
    name: { type: String },
    value: { type: String },
    info: { type: String },
    error: { type: String },
    selectOptions: { type: Array }
  },
  data() {
    return {
      selected: null
    };
  }
};
</script>
<style scoped>
</style>