<template>

  <v-app>

    <div id="app">
      <NavBar></NavBar>
      <router-view/>
    </div>
    
    <v-card-text style="padding: 0!important;">
      <v-fab-transition>
        <v-btn
          color="red"
          dark
          bottom
          right
          fab
          fixed
          href="#"
        >
          <v-icon>mdi-arrow-up</v-icon>
        </v-btn>
      </v-fab-transition>
    </v-card-text>

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
