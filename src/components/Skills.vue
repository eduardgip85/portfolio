<template>
    <section class="portfolio-section pt-10 pb-10">
        <div class="container">
            <div class="row pb-3">
                <div class="col">
                    <h1>
                        {{ $t('SkillsSection') }}
                    </h1>
                </div>
            </div>

            <div>

                <div style="background: #c9def1">
                    <h5>
                        HTML
                    </h5>
                    <v-progress-linear
                    color="light-blue"
                    height="10"
                    value="100"
                    striped
                    ></v-progress-linear>
                </div>

                <br>
                
                <div style="background: rgb(240 243 203)">
                    <h5>
                        CSS
                    </h5>
                    <v-progress-linear
                    color="lime"
                    height="10"
                    value="80"
                    striped
                    ></v-progress-linear>
                </div>
                
                <br>

                <div style="background: #cbeacb">
                    <h5>
                        VUE
                    </h5>
                    <v-progress-linear
                    color="light-green darken-4"
                    height="10"
                    value="60"
                    striped
                    ></v-progress-linear>
                </div>
                
                <br>

                <div style="background: rgb(249 196 196);">
                    <h5>
                        Angular
                    </h5>
                    <v-progress-linear
                    color="red darken-2"
                    height="10"
                    value="60"
                    striped
                    ></v-progress-linear>
                </div>
                
                <br>
                
                <div style="background: rgb(255 194 142);">
                    <h5>
                        JavaScript
                    </h5>
                    <v-progress-linear
                    color="deep-orange darken-2"
                    height="10"
                    value="70"
                    striped
                    ></v-progress-linear>
                </div>

                <br>
                
                <div style="background: rgb(233 206 245);">
                    <h5>
                        PHP
                    </h5>
                    <v-progress-linear
                    color="deep-purple accent-4"
                    height="10"
                    value="70"
                    striped
                    ></v-progress-linear>
                </div>
                
                <br>

                <div style="background:#cdcdcd;">
                    <h5>
                        GIT
                    </h5>
                    <v-progress-linear
                    color="black accent-4"
                    height="10"
                    value="85"
                    striped
                    ></v-progress-linear>
                </div>

            </div>

        </div>
    </section>
</template>