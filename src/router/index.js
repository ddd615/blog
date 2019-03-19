import Vue from 'vue'
import Router from 'vue-router'
import addBlog from '../components/addBlog'
import showBlog from  '../components/showBlog'
import singleBlog from '../components/singleBlog'
import editBlog from '../components/editBlog'
import index from  '../components/index'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/addBlog',
      name: 'addBlog',
      component: addBlog
    },
    {path:'/show',
      name:'showBlog',
      component:showBlog

    },
    {path:'/blog/:id',
      name:'singleBlog',
      component:singleBlog

    },
    {path:'/edit/:id',
      name:'editBlog',
      component:editBlog

    },
    {
      path:'/',
      name:'index',
      component:index
    }
  ]
})
