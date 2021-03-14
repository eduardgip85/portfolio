<template>
  <v-container>

    <v-row class="pt-10">
      <v-col>
        <h1>
            {{ $t('ExperienceSection') }}
        </h1>
      </v-col>
    </v-row>

    <v-timeline :dense="$vuetify.breakpoint.smAndDown">

      <!-- Esta hardcoreado porque el i18n no se pasarlo desde la parte script hasta aqui y que sea
      cambiable cuando cambie el idioma. -->
      <!-- Exp1 -->
      <v-timeline-item
        color="cyan"
        small
      >
        <template v-slot:opposite>
          <span
            :class="`headline font-weight-bold cyan--text`"
            v-text="'Feb 2021 - Mar 2021'"
          ></span>
        </template>

        <v-card
        color="cyan"
        dark
        >
          <v-card-title class="title">
            {{ $t('Exp1Titulo') }}
          </v-card-title>

          <v-card-text class="white text--primary pt-1">
            
            <p>{{ $t('Exp1Desc') }}</p>
            
          </v-card-text>

        </v-card>

      </v-timeline-item>

      <!-- Exp2 -->
      <v-timeline-item
        color="green"
        small
      >
        <template v-slot:opposite>
          <span
            :class="`headline font-weight-bold green--text`"
            v-text="'Sep 2019 - Jun 2020'"
          ></span>
        </template>

        <v-card
        color="green"
        dark
        >
          <v-card-title class="title">
            {{ $t('Exp2Titulo') }}
          </v-card-title>

          <v-card-text class="white text--primary pt-1">
            
            <p>{{ $t('Exp2Desc') }}</p>
            
          </v-card-text>

        </v-card>

      </v-timeline-item>

      <!-- Exp3 -->
      <v-timeline-item
        color="pink"
        small
      >
        <template v-slot:opposite>
          <span
            :class="`headline font-weight-bold pink--text`"
            v-text="'Sep 2017 - Jun 2019'"
          ></span>
        </template>

        <v-card
        color="pink"
        dark
        >
          <v-card-title class="title">
            {{ $t('Exp3Titulo') }}
          </v-card-title>

          <v-card-text class="white text--primary pt-1">
            
            <p>{{ $t('Exp3Desc') }}</p>
            
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

<!-- esto es para mejorar la experiencia y usar el script de years, pero antes tengo que resolver
el problema de porque no se cambia el idioma del titulo/desc si lo llamo asi {{ $t('Exp3Titulo') }} desde el 
mismo script.

<v-timeline :dense="$vuetify.breakpoint.smAndDown">

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

-->