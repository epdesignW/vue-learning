import Vue from 'vue'
import Router from 'vue-router'
import Pos from '@/components/page/Pos'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/pos',
      name:'Pos',
      component:Pos    //如果单词component拼写错误了，控制台是不会提示的
    }


  ]
})
