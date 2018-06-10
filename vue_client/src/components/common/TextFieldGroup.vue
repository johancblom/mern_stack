<template>
  <div class="form-group">
    <input
      :type=type
      class="form-control form-control-lg"
      v-bind:class="{ 'is-invalid': error }"
      :placeholder=placeholder
      :name=name
      :error=error
      :value=value
      @input="event => { $emit('input', event.target.value) }"
    />
    <small v-if="info" class="form-text text-muted">{{info}}</small>
    <div v-if="error" class="invalid-feedback">{{error}}</div>
  </div>
</template>
<script>
export default {
  props: ['type', 'placeholder', 'name', 'value', 'info', 'error']
};
</script>
<style scoped>
</style>
