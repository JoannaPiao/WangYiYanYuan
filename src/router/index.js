import vue from 'vue'
import VueRouter from 'vue-router'
import List from '../pages/list/list'
import Personal from '../pages/personal/personal'
import Shop from '../pages/shop/shop'
import Things from '../pages/things/things'
import ShouYe from '../pages/shouye/shouye'

vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/list',
      component: List,
    },
    {
      path: '/personal',
      component: Personal,
    },
    {
      path: '/shop',
      component: Shop,
    },
    {
      path: '/things',
      component: Things,
    },
    {
      path: '/shouye',
      component: ShouYe,
    },
    {
      path: '/',
      redirect: '/shouye',
    },

  ]
})
