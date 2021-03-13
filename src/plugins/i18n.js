import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

const messages = {
    'en': {
        EnLanguage: 'English',
        EsLanguage: 'Spanish',
        CatLanguage: 'Catalan',
        Welcome1: 'Welcome to my page',
        Welcome2: "I'm web developer",
        MenuAbout: 'About',
        MenuPortfolio: 'Portfolio',
        MenuExperience: 'Experience',
        MenuContact: 'Contact',
        MenuLang: 'Lang',
        AboutSection: 'ABOUT',
        AboutTxt1: 'a',
        AboutTxt2: 'b',
        AboutTxt3: 'c',


    },
    'es': {
        EnLanguage: 'Inglés',
        EsLanguage: 'Castellano',
        CatLanguage: 'Catalán',
        Welcome1: 'Bienvenidos a mi pagina',
        Welcome2: 'Soy programador web',
        MenuAbout: 'Sobre mi',
        MenuPortfolio: 'Portfolio',
        MenuExperience: 'Experiencia',
        MenuContact: 'Contacta',
        MenuLang: 'Idioma',
        AboutSection: 'SOBRE MI',
        AboutTxt1: 'Hola a tod@s, yo soy Edu y soy programador web en Barcelona, España.',
        AboutTxt2: 'Me gusta todo el proceso de crear una web, ya sea desde el principio con un croquis usando Adobe XD, pasando a programarlo todo con las metodologias que conozco y que aprendo nuevamente , y sobretodo y mas importante, cuando veo el resultado final y ver que lo que piensas, puedes hacerlo.',
        AboutTxt3: 'En mi tiempo libre me gusta hacer deporte, como la "calistenia" o la escalada, y también me gusta pasar rato en el ordenador, ya sea viendo una serie / pelicula, o incluso jugando a algun videojuego con mis amigos.',


    },
    'cat': {
        EnLanguage: 'Anglès',
        EsLanguage: 'Castellà',
        CatLanguage: 'Català',
        Welcome1: 'Benvinguts a la meva pàgina',
        Welcome2: 'Sóc programador web',
        MenuAbout: 'Sobre mi',
        MenuPortfolio: 'Portfoli',
        MenuExperience: 'Experiència',
        MenuContact: 'Contacta',
        MenuLang: 'Idioma',
        AboutSection: 'SOBRE MI',
        AboutTxt1: 'Hola a tots i totes, jo sóc Edu i sóc programador web a Barcelona, ​​Espanya.',
        AboutTxt2: `M'agrada tot el procés de crear un web, ja sigui des del principi amb un croquis usant Adobe XD, passant a programar-ho tot amb les metodologies que conec i que aprenc novament, i sobretot i més important, quan veig el resultat final i veure que el que penses, pots fer-ho.`,
        AboutTxt3: `En el meu temps lliure m'agrada fer esport, com la "cal·listènia" o l'escalada, i també m'agrada passar estona a l'ordinador, ja sigui veient una sèrie / pel·lícula, o fins i tot jugant a algun videojoc amb els meus amics.`,


    }
};

const i18n = new VueI18n({
    locale: 'es', // set locale
    fallbackLocale: 'en', // set fallback locale
    messages, // set locale messages
});

export default i18n;