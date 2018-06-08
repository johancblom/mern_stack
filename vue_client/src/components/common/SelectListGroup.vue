<template>
  <div class="form-group">
    <select
      class="form-control form-control-lg"
      v-bind:class="{ 'is-invalid': error }"
      :name=name
      :value=value
      :onChange=onChange
      :placeholder=placeholder
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
  props: {
    placeholder: { type: String },
    error: { type: String },
    name: { type: String },
    value: { type: String },
    onChange: { type: String },
    info: { type: String },
    error: { type: String },
    selectOptions: { type: Array },
    selected: { type: Object }
  }
};
</script>
<style scoped>
</style>