<template>
  <div id="App">
            <Navbar></Navbar>
            <router-view></router-view>
            <Footer></Footer>
          </div>
</template>

<script>
import './App.css';
import Navbar from './components/layout/Navbar.vue';
import Footer from './components/layout/Footer.vue';
// import Landing from './components/layout/Landing';
// import Register from './components/auth/Register';
// import Login from './components/auth/Login';

export default {
  components: {
    Navbar: Navbar,
    Footer: Footer
  },
  name: 'app',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    };
  }
};
</script>

<style>
</style>
