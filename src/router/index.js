import Vue from 'vue'
import Router from 'vue-router'
import Api from '@/components/Api'
import ApiContent from '@/components/Api/Content'
import Repo from '@/components/Repo'
import Vuex from 'vuex'
import ElementUI from 'element-ui'
Vue.use(Vuex)
Vue.use(ElementUI)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/apis/:apiId?',
      component: Api,
      children: [
        {
          path: '',
          component: ApiContent
        }
      ]
    },
    {
      path: '/repositories',
      component: Repo
    }
  ]
})
