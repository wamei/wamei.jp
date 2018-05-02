import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import Root from './view/root.vue';

const app = new Vue({
    el: '#app',
    render: h => h(Root),
});
