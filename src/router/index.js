import Vue from 'vue'
import Router from 'vue-router'
import Api from '@/components/Api'
import ApiDetail from '@/components/Api/Detail'
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
          component: ApiDetail
        }
      ]
    }
  ]
})
