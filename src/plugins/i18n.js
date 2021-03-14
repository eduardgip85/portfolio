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
        MenuSkills: 'Skills',
        MenuContact: 'Contact',
        MenuLang: 'Lang',
        AboutSection: 'ABOUT',
        AboutTxt1: 'Hello everyone, I am Edu and I am a web programmer in Barcelona, ​​Spain.',
        AboutTxt2: 'I like the whole process of creating a website, either from the beginning with a sketch using Adobe XD, going on to program everything with the methodologies that I know and that I keep learning, and more important, when I see the final result and see what what you think you can do.',
        AboutTxt3: 'In my free time I like to do sports, such as "Calisthenia" or climbing, and I also like to spend time on the computer, either watching a series / movie, or even playing a video game with my friends.',
        PortfolioSection: 'PORTFOLIO',
        ProjectSubtitle: 'Technologies used',
        ProjectBtnGo: 'GO',
        Project1Desc: 'Development of a corporate website from scratch for the space management company Amartec',
        ExperienceSection: 'EXPERIENCE',
        Exp1Titulo: 'Front-end developer in La Llucana',
        Exp1Desc: 'Creation of new code and maintenance of it. Using the Vue.js framework and also using Firebase as a BD.',
        Exp2Titulo: 'DAW Superior Grade at CEP',
        Exp2Desc: "Higher degree of web application development where we use all kinds of frameworks and program both front-end and back-end. CEP is the Center d'Estudis Politecnics.",
        Exp3Titulo: 'Higher Degree of DAM at CEP',
        Exp3Desc: 'Higher degree of cross-platform application development where we mainly use Android Studio to create APPs. Also using MySQL Workbench.',
        SkillsSection: 'SKILLS',
        FooterText: 'This portfolio is made with Vue, using Vuetify for "timeline", using HackMD for cloud images and GitHub.',



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
        MenuSkills: 'Habilidades',
        MenuContact: 'Contacta',
        MenuLang: 'Idioma',
        AboutSection: 'SOBRE MI',
        AboutTxt1: 'Hola a tod@s, yo soy Edu y soy programador web en Barcelona, España.',
        AboutTxt2: 'Me gusta todo el proceso de crear una web, ya sea desde el principio con un croquis usando Adobe XD, pasando a programarlo todo con las metodologias que conozco y que aprendo nuevamente , y sobretodo y mas importante, cuando veo el resultado final y ver que lo que piensas, puedes hacerlo.',
        AboutTxt3: 'En mi tiempo libre me gusta hacer deporte, como la "calistenia" o la escalada, y también me gusta pasar rato en el ordenador, ya sea viendo una serie / pelicula, o incluso jugando a algun videojuego con mis amigos.',
        PortfolioSection: 'PORTFOLIO',
        ProjectSubtitle: 'Tecnologías usadas',
        ProjectBtnGo: 'IR',
        Project1Desc: 'Desarrollo de pagina web corporativa desde 0 para la empresa de gestion de espacios amartec',
        ExperienceSection: 'EXPERIENCIA',
        Exp1Titulo: 'Programador Front-end en La Llucana',
        Exp1Desc: "Creación de nuevo código y mantenimiento del mismo. Utilizando el framework Vue.js y también utilizando Firebase como BD.",
        Exp2Titulo: 'Grado Superior de DAW en el CEP',
        Exp2Desc: "Curso de desarrollo de aplicaciones web donde utilizamos todo tipo de frameworks y programamos tanto front-end como back-end. CEP es el Centre d'Estudis Politecnics",
        Exp3Titulo: 'Grado Superior de DAM en el CEP',
        Exp3Desc: "Curso de desarrollo de aplicaciones multiplataforma donde usamos principalmente Android Studio para crear APPs. También la utilización de MySQL Workbench.",
        SkillsSection: 'HABILIDADES',
        FooterText: 'Este porfolio esta hecho con Vue, usando Vuetify para "timeline", usando HackMD para imagenes en nube y GitHub.',



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
        MenuSkills: 'Habilitats',
        MenuContact: 'Contacta',
        MenuLang: 'Idioma',
        AboutSection: 'SOBRE MI',
        AboutTxt1: 'Hola a tots i totes, jo sóc Edu i sóc programador web a Barcelona, ​​Espanya.',
        AboutTxt2: `M'agrada tot el procés de crear un web, ja sigui des del principi amb un croquis usant Adobe XD, passant a programar-ho tot amb les metodologies que conec i que aprenc novament, i sobretot i més important, quan veig el resultat final i veure que el que penses, pots fer-ho.`,
        AboutTxt3: `En el meu temps lliure m'agrada fer esport, com la "cal·listènia" o l'escalada, i també m'agrada passar estona a l'ordinador, ja sigui veient una sèrie / pel·lícula, o fins i tot jugant a algun videojoc amb els meus amics.`,
        PortfolioSection: 'PORTFOLI',
        ProjectSubtitle: 'Tecnologíes usades',
        ProjectBtnGo: 'ANAR',
        Project1Desc: "Desenvolupament de la pàgina web corporativa des de 0 per a l'empresa de gestió d'espais AMARTEC",
        ExperienceSection: 'EXPERIÈNCIA',
        Exp1Titulo: 'Programador Front-end en La Llucana',
        Exp1Desc: 'Creació de nou codi i manteniment del mateix. Utilitzant el framework Vue.js i també utilitzant Firebase com BD.',
        Exp2Titulo: 'Grau Superior de DAW en el CEP',
        Exp2Desc: "Curs de desenvolupament d'aplicacions web on utilitzem tot tipus de frameworks i programem tant front-end com back-end. CEP és el Centre d'Estudis Politècnics",
        Exp3Titulo: 'Grau Superior de DAW en el CEP',
        Exp3Desc: "Curs de desenvolupament d'aplicacions multiplataforma on fem servir principalment Android Studio per a crear APPs. També la utilització de MySQL Workbench.",
        SkillsSection: 'HABILITATS',
        FooterText: 'Aquest portfoli esta fet amb Vue, fent servi Vuefity per el "timeline", fent servi HackMD per las imatges al núvol i GitHub.',



    }
};

const i18n = new VueI18n({
    locale: 'es', // set locale
    fallbackLocale: 'en', // set fallback locale
    messages, // set locale messages
});

export default i18n;