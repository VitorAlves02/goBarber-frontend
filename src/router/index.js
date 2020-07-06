import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue';
import Cadastro from '../views/Cadastro.vue';
import Home from '../views/Home.vue';
import Perfil from '../views/Perfil.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'login',
    component: Login
  },
  {
    path: '/cadastro',
    name: 'cadastro',
    component: Cadastro
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/perfil',
    name: 'perfil',
    component: Perfil
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
