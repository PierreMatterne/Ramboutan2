import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue';
import {routes} from './routes.js';

const router = new VueRouter({routes});
Vue.use(VueRouter);

// creation d'une event bus
window.bus = new Vue();

new Vue({
	el: '#app',
	router,
	render: h => h(App)
})
