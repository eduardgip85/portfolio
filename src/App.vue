<template>
  <div id="app">
    <NavBar></NavBar>
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view/>
  </div>
</template>

<script>
    import NavBar from "@/components/Navbar";

    export default {
        name: 'App',
        components: {NavBar},
    }
</script>

<style>

</style>
