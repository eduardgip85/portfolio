<template>
    <b-navbar toggleable="lg" type="dark" style="position: fixed; width: 100%; z-index: 5;" class="bgnavbar">
        <b-navbar-brand href="#">Edu G.</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
       
            <b-navbar-nav class="ml-auto text-center">
            
                <b-nav-item-dropdown right>
                    <template slot="button-content">{{ $t('MenuLang')}}</template>
                    <b-dropdown-item class="text-center" v-on:click="changeLocale('es')" id="es"><a>{{ $t('EsLanguage') }}</a></b-dropdown-item>
                    <b-dropdown-item class="text-center" v-on:click="changeLocale('en')" id="en"><a>{{ $t('EnLanguage') }}</a></b-dropdown-item>
                    <b-dropdown-item class="text-center" v-on:click="changeLocale('cat')" id="cat"><a>{{ $t('CatLanguage') }}</a></b-dropdown-item>
                </b-nav-item-dropdown>
                
                <b-nav-item href="#about"><a>{{ $t('MenuAbout') }}</a></b-nav-item>
                <b-nav-item href="#portfolio"><a>{{ $t('MenuPortfolio') }}</a></b-nav-item>
                <b-nav-item href="#experience"><a>{{ $t('MenuExperience') }}</a></b-nav-item>
                <b-nav-item href="#skills"><a>{{ $t('MenuSkills') }}</a></b-nav-item>
                <b-nav-item href="#contacta"><a>{{ $t('MenuContact') }}</a></b-nav-item>

            </b-navbar-nav>
        </b-collapse>
    </b-navbar>
</template>

<script>
export default {
    data() {
    return {
            languages: [
                {language: 'en'},
                {language: 'es'},
                {language: 'cat'}
            ],
        }
    },
    methods: {
        changeLocale(locale) {
            this.$i18n.locale = locale;
            for (const language of this.languages) {
                locale === language.language ? document.getElementById(language.language).classList.add('active') : document.getElementById(language.language).classList.remove('active')
            }
        },
    },
    mounted() {
        const lang = window.navigator.language
        if (lang.includes('es')) {
        this.$i18n.locale = 'es'
        } else if (lang.includes('cat')) {
        this.$i18n.locale = 'cat'
        } else {
        this.$i18n.locale = 'en'
        }
        for (const language of this.languages) {
        this.$i18n.locale === language.language ? document.getElementById(language.language).classList.add('active') : document.getElementById(language.language).classList.remove('active')
        }
    }
}
</script>

<style>
html{
    scroll-behavior: smooth;
}
ul{
    padding-left: 0!important;
}

.bgnavbar{
    background: #5c6bc0 !important;
}
</style>