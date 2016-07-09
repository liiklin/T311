'use strict'

import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import asyncData from 'vue-async-data'

import App from './App.vue'
import Container from './components/Container.vue'
// import Mock from './mock'

Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(asyncData)

const router = new VueRouter()

router.map({
    '/questions': {
        name: 'questions',
        component: resolve => require(['./components/Container.vue'], resolve)
    },
    '/sources': {
        name: 'sources',
        component: resolve => require(['./components/Container.vue'], resolve)
    },
    '/cases': {
        name: 'cases',
        component: resolve => require(['./components/Container.vue'], resolve)
    },
    '/contracts': {
        name: 'contracts',
        component: resolve => require(['./components/Container.vue'], resolve)
    },
    '/literatures': {
        name: 'literatures',
        component: resolve => require(['./components/Container.vue'], resolve)
    },
    '/search': {
        name: 'result',
        component: resolve => require(['./components/Result.vue'], resolve)
    },
    '/modal': {
        name: 'modal',
        component: resolve => require(['./components/Modal/default.vue'], resolve)
    }
})

router.redirect({
    '*': '/questions'
})

router.start(App, 'body')
