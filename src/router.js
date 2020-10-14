import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Skills from './views/Skills.vue'
import Achievement from './views/Achievement.vue'
import Education from './views/Education.vue'
import Contact from './views/Contact.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  hash: false,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/skills',
      name: 'Skills',
      component: Skills
    },
    {
      path: '/achievement',
      name: 'Achievement',
      component: Achievement
    },
    {
      path: '/education',
      name: 'Education',
      component: Education
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    }
  ]
})
