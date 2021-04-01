import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _7d165de4 = () => interopDefault(import('..\\pages\\layout' /* webpackChunkName: "" */))
const _2e79be19 = () => interopDefault(import('..\\pages\\home' /* webpackChunkName: "" */))
const _be136522 = () => interopDefault(import('..\\pages\\login' /* webpackChunkName: "" */))
const _15bf7e2f = () => interopDefault(import('..\\pages\\profile' /* webpackChunkName: "" */))
const _3370585d = () => interopDefault(import('..\\pages\\settings' /* webpackChunkName: "" */))
const _71478427 = () => interopDefault(import('..\\pages\\editor' /* webpackChunkName: "" */))
const _06ec7d08 = () => interopDefault(import('..\\pages\\article' /* webpackChunkName: "" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/",
    component: _7d165de4,
    children: [{
      path: "",
      component: _2e79be19,
      name: "Home"
    }, {
      path: "/login",
      component: _be136522,
      name: "Login"
    }, {
      path: "/register",
      component: _be136522,
      name: "Register"
    }, {
      path: "/profile/:username",
      component: _15bf7e2f,
      name: "Profile"
    }, {
      path: "/settings",
      component: _3370585d,
      name: "Settings"
    }, {
      path: "/editor",
      component: _71478427,
      name: "Editor"
    }, {
      path: "/article/:slug",
      component: _06ec7d08,
      name: "Article"
    }]
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config.app && config.app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
