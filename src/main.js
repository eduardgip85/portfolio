import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import i18n from '@/pluguins/i18n'
import { BootstrapVue } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Install BootstrapVue
Vue.use(BootstrapVue)

Vue.config.productionTip = false

new Vue({
    router,
    store,
    i18n,
    render: function(h) { return h(App) }
}).$mount('#app')