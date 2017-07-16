import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Destinations from '@/components/Destinations.vue'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Blog from '@/components/Blog.vue'
import NoteDetail from '@/components/Blog/NoteDetail.vue'
import NoteGrid from '@/components/Blog/NoteGrid.vue'
Vue.use(Router)
let routes = [
  {
    path: '/home',
    name: '主页',
    component: Home
  },
  {
    path: '/destinations',
    name: '目的地',
    component: Destinations
  },
  {
    path: '/blog',
    name: '博客',
    component: Blog,
    dropdown: [
      {
        path: '/blog/note-detail',
        name: '热门攻略'
      },
      {
        path: '/blog/note-grid',
        name: '热门国家'
      }
    ],
    children: [
      {
        path: 'note-detail',
        component: NoteDetail
      },
      {
        path: 'note-grid',
        component: NoteGrid
      }
    ]
  },
  {
    path: '/contact',
    name: '联系我们',
    component: Contact
  },
  {
    path: '/about',
    name: '关于',
    component: About
  }
]
export default new Router({
  routes: routes
})
export let links = routes
