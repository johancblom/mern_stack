<template>
  <div class="form-group">
    <textarea
      class="form-control form-control-lg"
      v-bind:class="{ 'is-invalid': error }"
      :placeholder=placeholder
      :name=name
      @input="event => { $emit('input', event.target.value) }"

    />
    <small v-if="info" class="form-text text-muted">{{info}}</small>
    <div v-if="error" class="invalid-feedback">{{error}}</div>
  </div>
</template>
<script>
export default {
  props: ['placeholder', 'name', 'info', 'error']
};
</script>
<style scoped>
</style>