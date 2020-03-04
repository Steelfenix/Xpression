<template>
  <div class="relative" id="app">
    <Navbar />
    <router-view />
  </div>
</template>

<script>
import Navbar from './components/Shared/Navbar.vue';

export default {
  components: {
    Navbar
  }
};
</script>
