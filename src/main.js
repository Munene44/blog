import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VuePaginate from 'vue-paginate'

Vue.use(VueResource);

new Vue({
 el:'#app',
 render:h=>h(App)
})