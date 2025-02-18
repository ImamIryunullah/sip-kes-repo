<template>
  <div id="app">
    <!-- Add your header/navigation here -->
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted() {
    // Enable smooth scroll behavior globally
    document.documentElement.style.scrollBehavior = 'smooth';
  },
};
</script>

<style>
/* Global styles */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

html {
  scroll-behavior: smooth; /* This is for enabling smooth scrolling */
}
</style>
