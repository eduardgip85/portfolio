<template>
    <section class="portfolio-section pt-10">
        <div class="container">
            <div class="row">
                <div class="col">
                    <h1>
                        {{ $t('PortfolioSection') }}
                        <!-- {{mostrar}} -->
                    </h1>
                </div>
            </div>

            <v-bottom-navigation
                v-model="value"
                :background-color="color"
                color="white"
                grow
            >
                <v-btn v-on:click="mostrar = 'all'">
                <span>{{ $t('btnNavigationAll') }}</span>

                <v-icon>mdi-history</v-icon>
                </v-btn>

                <v-btn v-on:click="mostrar='laravel'">
                <span>Laravel</span>

                <v-icon>mdi-heart</v-icon>
                </v-btn>

                <v-btn v-on:click="mostrar='html'">
                <span>HTML / CSS</span>

                <v-icon>mdi-map-marker</v-icon>
                </v-btn>
            </v-bottom-navigation>


            <v-row class="pt-5">
                <v-card
                    v-for="(n, index) in portfolio"
                    :key="index"
                    class="mx-auto p-2"
                    v-show="mostrar =='all' || mostrar == n.menutec "
                >
                    <v-img
                    class="black--text"
                    height="150px"
                    :src="n.img"
                    >
                        <!-- <v-card-title>{{n.titulo}}</v-card-title> -->
                    </v-img>


                    <v-card-text class="text--primary">
                        
                        <v-card-title>{{n.titulo}}</v-card-title>

                        <!-- <div>{{n.desc}}</div> -->
                        <!-- uso esto porque solo tengo 1 proyecto sino tendria que buscar el
                        porque no funciona si lo llamo desde el n.desc -->
                        <div v-if="index==0">
                            {{ $t('Project1Desc') }}
                        </div>
                        <div v-if="index==1">
                            {{ $t('Project2Desc') }}
                        </div>
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
            mostrar: 'all',
            value: 0 ,
            portfolio: [
                {
                    // img: this.$i18n.t('MenuLang').toString(),
                    img:'https://i.imgur.com/NHf58pb.jpg',
                    titulo: 'AMARTEC',
                    desc: this.$i18n.t('Project1Desc').toString(),
                    menutec: 'laravel',
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
                    link: 'https://www.amartec.es'
                },
                {
                    // img: this.$i18n.t('MenuLang').toString(),
                    img:'https://i.imgur.com/obPJKzY.png',
                    titulo: 'PORTFOLIO DAW',
                    desc: this.$i18n.t('Project2Desc').toString(),
                    menutec: 'html',
                    tecnologias: [
                        {
                            name: 'Html',
                            color: 'blue'
                        },
                        {
                            name: 'CSS',
                            color: 'orange'
                        },
                        {
                            name: 'JavaScript',
                            color: 'yellow'
                        },
                    ],
                    link: 'https://eduardgip85.github.io/portfolio1/'
                },
            ],
        }
    },
    computed: {
        color () {
            switch (this.value) {
                case 0: return 'blue-grey'
                case 1: return 'purple'
                case 2: return 'blue'
                default: return 'blue-grey'
            }
        },
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