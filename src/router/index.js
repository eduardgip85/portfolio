import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        //ruta para redirigirse normal si hace Refresh
        path: '/:id',
        name: 'Other',
        component: Home,
        redirect: '/'
    },
]

const router = new VueRouter({
    routes
})

export default router