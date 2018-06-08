<template>
<div>
  <div class="input-group mb-3">
    <div class="input-group-prepend">
      <span class="input-group-text">
        <i :class=icon />
      </span>
    </div>
    <input class="form-control form-control-lg"
        :class="{ 'is-invalid': error }"
        :placeholder=placeholder
        :name=name
        :value=value
    />
    <div v-if="error" class="invalid-feedback">{{error}}</div>
  </div>
</div>
</template>
<script>
export default {
  props: {
    placeholder: { type: String },
    error: { type: String },
    name: { type: String },
    value: { type: String },
    icon: {}
  }
};
</script>
<style scoped>
</style>