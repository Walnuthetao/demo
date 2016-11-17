import './assets/bootstrap-3.3.5-dist/css/bootstrap.min.css'
import './assets/css/code.css'

import Vue from 'vue'
import  VueRouter   from'vue-router'


Vue.use(VueRouter)


const routes = [
  {
    path: '', component: require('./components/main.vue'),
    children:[
      {path:'',component:require('./components/home.vue')},
      {path:'/home',component:require('./components/home.vue')},
      {path:'/bind',component:require('./components/bind.vue')}
    ]
  }
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  routes // short for routes: routes
})
/* eslint-disable no-new */
const app = new Vue({
  router
}).$mount('#app')
