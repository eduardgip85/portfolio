<template>

  <v-app>

    <div id="app">
      <NavBar></NavBar>
      <router-view/>
    </div>
    
  </v-app>
    
</template>

<script>
import NavBar from "@/components/Navbar";
import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',
  components: {
    NavBar,
    HelloWorld
  },

  data: () => ({
    //
  }),
};
</script>
