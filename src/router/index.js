import vue from 'vue'
import VueRouter from 'vue-router'
import List from '../pages/list/list'
import Personal from '../pages/personal/personal'
import Shop from '../pages/shop/shop'
import Things from '../pages/things/things'
import ShouYe from '../pages/shouye/shouye'
import Search from '../pages/search/search'
import Items from '../pages/list/items'

vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/list',
      component: List,
      redirect:'/list/items',
      meta: {
        showFooter: true
      },
      children: [
        {
          path: '/list/items',
          component: Items,
          meta: {
            showFooter: true
          }
        }
      ]
    },
    {
      path: '/personal',
      component: Personal,

    },
    {
      path: '/shop',
      component: Shop,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/things',
      component: Things,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/shouye',
      component: ShouYe,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/',
      redirect: '/search',
    },
    {
      path: '/search',
      component: Search,
    },

  ]
})
