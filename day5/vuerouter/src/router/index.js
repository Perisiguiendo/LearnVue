import Vue from 'vue'
import Router from 'vue-router'
// import Home from '@/components/Home'
// import About from '@/components/About'
// import User from '@/components/User'

const Home = () => import('@/components/Home')
const About = () => import('@/components/About')
const User = () => import('@/components/User')
const HomeNews = () => import('@/components/HomeNews')
const HomeMessage = () => import('@/components/HomeMessage')

// 1. 通过Vue.use(插件)
Vue.use(Router)

// 2. 创建Router对象
export default new Router({
  // 配置路由和组件之间的关系
  routes: [{ // 路由的默认路径
      path: '', // 或 '/'
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      children: [
        {
          path: '',
          redirect: 'news'
        },
        {
          path: 'news',
          name: 'HomeNews',
          component: HomeNews
        },
        {
          path: 'message',
          name: 'HomeMessage',
          component: HomeMessage
        }
      ]
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/user/:userId',
      name: 'User',
      component: User
    }
  ],
  mode: 'history',
  linkActiveClass: 'active'
})
