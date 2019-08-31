import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import LandingPage from "./views/LandingPage";
import Desktop from "./views/Desktop";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'welcome',
      component: LandingPage
    },
    {
      path: '/desktop',
      name: 'desktop',
      component: Desktop
    }
  ]
})
