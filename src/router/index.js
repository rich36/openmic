import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import Performer from '@/components/Performer'
import Venue from '@/components/Venue'
import Help from '@/components/Help'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Perfomer/:id',
      name: 'Performer',
      component: Performer
    },
    {
      path: '/Venue/:id',
      name: 'Venue',
      component: Venue
    },
    {
      path: '/Help',
      name: 'Help',
      component: Help
    }
  ]
})
