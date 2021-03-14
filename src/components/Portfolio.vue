<template>
    <section class="portfolio-section pt-10">
        <div class="container">
            <div class="row">
                <div class="col">
                    <h1>
                        {{ $t('PortfolioSection') }}
                    </h1>
                </div>
            </div>

            <v-row>
                <v-card
                    v-for="(n, index) in portfolio"
                    :key="index"
                    class="mx-auto p-2"
                >
                    <v-img
                    class="white--text align-end"
                    height="150px"
                    :src="n.img"
                    >
                    <v-card-title>{{n.titulo}}</v-card-title>
                    </v-img>


                    <v-card-text class="text--primary">
                        <!-- <div>{{n.desc}}</div> -->
                        <!-- uso esto porque solo tengo 1 proyecto sino tendria que buscar el
                        porque no funciona si lo llamo desde el n.desc -->
                        <div>{{ $t('Project1Desc') }}</div>
                    </v-card-text>

                    <v-card-subtitle class="pt-0">
                        
                        {{ $t('ProjectSubtitle') }}

                        <!-- Options of frameworks or languages I use in project -->
                        <v-card-actions>
                        
                            <v-chip
                            class="white--text ml-0 mr-1"
                            label
                            small
                            v-for="(i, index) in n.tecnologias"
                            :key="index"
                            :color="i.color"
                            >
                            {{i.name}}
                            </v-chip>

                        </v-card-actions>

                    </v-card-subtitle>


                    <!-- Btn to go to the pag web / project -->
                    <v-footer padless>
                        <v-col
                        class="text-center"
                        cols="12"
                        >
                        
                            <v-btn      
                                color="orange"
                                text
                                :href="n.link"
                                target="_blank"
                            >
                                {{ $t('ProjectBtnGo') }}
                            </v-btn>

                        </v-col>
                    </v-footer>
                </v-card>
            </v-row>

        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            portfolio: [
                {
                    // img: this.$i18n.t('MenuLang').toString(),
                    img:'https://i.imgur.com/EXQhtvO.jpg',
                    titulo: 'AMARTEC',
                    desc: this.$i18n.t('Project1Desc').toString(),
                    tecnologias: [
                        {
                            name: 'Laravel',
                            color: 'purple'
                        },
                        {
                            name: 'Html',
                            color: 'blue'
                        },
                        {
                            name: 'CSS',
                            color: 'orange'
                        },
                    ],
                    link: 'https://www.masterquiz.es'
                },
            ],
        }
    },
    computed: {

    }
}
</script>

<style scoped>
@media(min-width: 400px){
    .v-card{
        max-width: 400px;
    }
}
</style>