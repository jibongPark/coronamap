import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import buefy from 'buefy'
import 'buefy/dist/buefy.css'
import vueMoment from 'vue-moment'
import naver from 'vue-naver-maps'


Vue.use(buefy)
Vue.use(vueMoment)
Vue.use(naver, {
    clientID: 'nht8h3cbwn',
    useGovAPI: false,
    subModules: ''
})






Vue.prototype.$axios = axios;

axios.defaults.headers.get['Access-Control-Alklow-Origin'] = '*';
axios.defaults.headers.get['Content-Type'] = 'charset=UTF-8';

new Vue({
    el: '#app',
    render: h => h(App)
})