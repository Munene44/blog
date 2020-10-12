import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VuePaginate from 'vue-paginate'
import VueRouter from 'vue-router'

Vue.use(VueResource);
Vue.use(VuePaginate);
Vue.use(VueRouter);

new Vue({
 el:'#app',
 render:h=>h(App)
})