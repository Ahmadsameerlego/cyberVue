import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About_us.vue'
import Services from '../views/Services.vue'
import Service_details from '../views/service-details.vue'
import empolyment from '../views/employment.vue'
import lastNews from '../views/last_news.vue'
import archive_news from '../views/archived_news'
import news_details from '../views/news_details.vue'
import team_members from '../views/team_members.vue'
import error404 from '../views/error404.vue'
Vue.use(VueRouter)

const routes = [
  {
    path : '*',
    component : error404
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/About',
    name : 'About',
    component : About
  },
  {
    path: '/Services',
    name : 'Services',
    component :Services
  },
  {
    path : '/Service_details/:id',
    name : 'service_details',
    component : Service_details
  },
  {
    path : '/empolyment',
    name : 'Employment',
    component : empolyment
  },
  {
    path : '/last_news',
    name : "LastNews",
    component : lastNews
  },
  
  {
    path: '/news_details/:id',
    name : 'news_details',
    component : news_details
  },
  {
    path : '/team_members',
    name : 'team_members',
    component : team_members
  },
  {
    path : '/archive/:date',
    name: 'archive',
    component : archive_news
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
