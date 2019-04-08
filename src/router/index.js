import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Input from '@/components/Input'
import Output from '@/components/Output'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Home
    },
    {
      path: '/Input',
      name: 'Input',
      component: Input
    },
    {
      path: '/Output',
      name: 'Output',
      component: Output
    }
  ]
})