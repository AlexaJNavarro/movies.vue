import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About'
import Movies from '../views/Movies'
import Movie from '../views/Movie'
import NewMovie from '../views/NewMovie'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path:'/movies',
    name: 'Movies',
    component: Movies

  },
  {
    path:'/movies/:id',
    name: 'Movie',
    component: Movie 
  },
  {
    path:'/new-movie',
    name:'NewMovie',
    component: NewMovie
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
