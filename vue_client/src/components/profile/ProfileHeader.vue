<template>
  <div class="row">
            <div class="col-md-12">
              <div class="card card-body bg-info text-white mb-3">
                <div class="row">
                  <div class="col-4 col-md-3 m-auto">
                    <img class="rounded-circle" v-bind:src=profile.user.avatar alt="" />
                  </div>
                </div>
                <div class="text-center">
                  <h1 class="display-4 text-center">{{profile.user.name}}</h1>
                  <p class="lead text-center">{{profile.status}} at {{profile.company}}</p>
                  <p>{{profile.location}}</p>
                  <p>
                    <a class="text-white p-2" href="#">
                      <i class="fas fa-globe fa-2x"></i>
                    </a>
                    <a class="text-white p-2" href="#">
                      <i class="fab fa-twitter fa-2x"></i>
                    </a>
                    <a class="text-white p-2" href="#">
                      <i class="fab fa-facebook fa-2x"></i>
                    </a>
                    <a class="text-white p-2" href="#">
                      <i class="fab fa-linkedin fa-2x"></i>
                    </a>
                    <a class="text-white p-2" href="#">
                      <i class="fab fa-instagram fa-2x"></i>
                    </a>
                  </p>
                </div>
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