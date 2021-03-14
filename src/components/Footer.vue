<template>
  <v-footer
    padless
  >
    <v-card
      flat
      tile
      class="indigo lighten-1 white--text text-center w-100"
    >
      <v-card-text>
        <v-btn
          v-for="(icon, index) in icons"
          :key="index"
          class="mx-4 white--text"
          icon
          :href="icon.link"
          target="_blank"
        >
          <v-icon size="24px">
            {{ icon.name }}
          </v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text pt-0">
          Este porfolio esta hecho con Vue, usando Vuetify para "timeline", usando HackMD para imagenes en nuve y GitHub.
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>Eduard Gomà Pulido</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
  export default {
    data: () => ({
      icons: [
        // {
        //     name: 'mdi-twitter',
        //     link: 'https://twitter.com/The_DarkMine',
        // },
        {
            name: 'mdi-linkedin',
            link: 'https://www.linkedin.com/in/eduardgomapulido/',
        },
        // {
        //     name: 'mdi-instagram',
        //     link: '',
        // },
        {
            name: 'mdi-mail',
            link: 'mailto:eduardgip85@gmail.com',
        },
        {
            name: 'mdi-github',
            link: 'https://github.com/eduardgip85',
        },
      ],
    }),
  }
</script>