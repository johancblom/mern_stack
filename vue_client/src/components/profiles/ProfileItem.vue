<template>
  <div class="card card-body bg-light mb-3">
    <div class="row">
      <div class="col-2">
        <img class="rounded-circle" v-bind:src=profile.user.avatar alt="" />
      </div>
      <div class="col-lg-6 col-md-4 col-8">
        <h3>{{profile.user.name}}</h3>
        <p>
          {{profile.status}} at {{profile.company}}
        </p>
        <p>
          {{profile.location}}
        </p>
        <router-link :to="{ path:`/profile/${profile.handle}`}" class="btn btn-info">View Profile</router-link>
      </div>
      <div class="col-md-4 d-none d-md-block">
        <h4>Skill Set</h4>
        <ul class="list-group">
          <li class="list-group-item" v-for="skill in profile.skills" :key=skill._id>
            <i class="fa fa-check pr-1" />
            {{skill}}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['profile']
};
</script>
<style scoped>
</style>