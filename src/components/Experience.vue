<template>
  <v-container>

    <v-row>
      <v-col>
        <h1>
            EXPERIENCIA
        </h1>
      </v-col>
    </v-row>

    <v-timeline>

      <v-timeline-item
        v-for="(year, i) in years"
        :key="i"
        :color="year.color"
        small
      >
        <template v-slot:opposite>
          <span
            :class="`headline font-weight-bold ${year.color}--text`"
            v-text="year.year"
          ></span>
        </template>

        <v-card
        :color="year.color"
        dark
        >
          <v-card-title class="title">
            {{year.titulo}}
          </v-card-title>

          <v-card-text class="white text--primary pt-1">
            
            <p>{{year.desc}}</p>
            
          </v-card-text>

        </v-card>

      </v-timeline-item>

    </v-timeline>

  </v-container>

</template>

<script>
  export default {
    data: () => ({
      years: [
        {
          color: 'cyan',
          year: 'Feb 2021 - Mar 2021',
          titulo: 'Programador Front-end en La Llucana',
          desc: 'Creación de nuevo código y mantenimiento del mismo. Utilizando el framework Vue.js y también utilizando Firebase como BD.',
        },
        {
          color: 'green',
          year: 'Sep 2019 - Jun 2020',
          titulo: "Grado Superior de DAW en el CEP",
          desc: "Curso de desarrollo de aplicaciones web donde utilizamos todo tipo de frameworks y programamos tanto front-end como back-end. CEP es el centre d'estudis Politecnics",
        },
        {
          color: 'pink',
          year: 'Sep 2017 - Jun 2019',
          titulo: "Grado Superior de DAM en el CEP",
          desc: 'Curso de desarrollo de aplicaciones multiplataforma donde usamos principalmente Android Studio para crear APPs. También la utilización de MySQL Workbench.',
        }
      ],
    }),
  }
</script>
