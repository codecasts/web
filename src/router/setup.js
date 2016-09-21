
import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../components/dashboard/routes/index'
import Series from '../components/series/routes/index'
import Users from '../components/users/routes/index'

Vue.use(VueRouter)

export function routerSetup (App) {
  const router = new VueRouter({
    hashbang: false,
    history: true
  })

  router.map(Object.assign(Dashboard, Series, Users))

  router.start(App, '#app')
}

