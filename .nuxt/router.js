import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _4f91a14a = () => interopDefault(import('../pages/layout' /* webpackChunkName: "" */))
const _7082fd60 = () => interopDefault(import('../pages/home' /* webpackChunkName: "" */))
const _3049f118 = () => interopDefault(import('../pages/login' /* webpackChunkName: "" */))
const _1eb8db98 = () => interopDefault(import('../pages/profile' /* webpackChunkName: "" */))
const _49a2a814 = () => interopDefault(import('../pages/settings' /* webpackChunkName: "" */))
const _672f54c4 = () => interopDefault(import('../pages/editor' /* webpackChunkName: "" */))
const _05831ee5 = () => interopDefault(import('../pages/article' /* webpackChunkName: "" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/",
    component: _4f91a14a,
    children: [{
      path: "",
      component: _7082fd60,
      name: "Home"
    }, {
      path: "/login",
      component: _3049f118,
      name: "Login"
    }, {
      path: "/register",
      component: _3049f118,
      name: "Register"
    }, {
      path: "/profile/:username",
      component: _1eb8db98,
      name: "Profile"
    }, {
      path: "/settings",
      component: _49a2a814,
      name: "Settings"
    }, {
      path: "/editor",
      component: _672f54c4,
      name: "Editor"
    }, {
      path: "/article/:slug",
      component: _05831ee5,
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
