<template>
    <section class="portfolio-section pt-3">
        <div class="container">
            <div class="row">
                <div class="col">
                    <h1>
                        PORTFOLIO
                    </h1>
                </div>
            </div>
            <div class="row">
                <b-card-group deck class="p-2" style="max-width: 100%"> 
                    <b-card style="max-width: 400px" class="text-center">
                        
                        <b-col md="12">
                            <a href="">
                                <img src="../assets/background.jpg" alt="" style="max-width:400px; height: auto; max-height: 170px; width: 100%">
                            </a>
                        </b-col>

                        <b-card-title class="pt-2">{{this.portfolio[0].titulo}}</b-card-title>
                        <b-card-text>{{this.portfolio[0].desc}}</b-card-text>
                        <b-card-sub-title>Tecnologias usadas</b-card-sub-title>
                        
                        <b-row style="justify-content: center" class="p-2">
                            <div v-for="(item, index) in this.portfolio[0].tecnologias" :key="index" >
                                
                                {{item}}
                                
                                <span v-if="index < item.length - 1" style="float: right" class="pl-2 pr-2"> 
                                 |
                                </span>

                            </div>
                        </b-row>
                

                        <b-button href="#" variant="primary">Go somewhere</b-button>
                    </b-card>

                </b-card-group>
                
                
                
            </div>
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
                    img:'../assets/background.jpg',
                    titulo: 'AMARTEC',
                    desc: 'Desarrollo de pagina web corporativa desde 0 para la empresa de gestion de espacios amartec',
                    tecnologias: ['Laravel','Html','CSS'],
                    link: ''
                },
                {
                    img: '../assets/logo.png',
                    titulo: 'Proj 2',
                    desc: '',
                    tecnologias: [''],
                    link: ''
                }
            ],
        }
    },
}
</script>