import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

import naver from 'vue-naver-maps'

Vue.use(naver, {
    clientID: 'nht8h3cbwn',
    useGovAPI: false,
    subModules: ''
})


Vue.prototype.$axios = axios;

axios.defaults.headers.get['Access-Control-Alklow-Origin'] = '*';

new Vue({
    el: '#app',
    render: h => h(App)
})