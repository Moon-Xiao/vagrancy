import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Destinations from '@/components/Destinations.vue'
import About from '@/components/About'
import Stores from '@/components/Stores.vue'
import Person from '@/components/person/Person.vue'
import MySave from '@/components/person/MySave'
import Mytravels from '@/components/person/MyTravels'
import MyConcern from '@/components/person/MyConcern'
import MyAlbum from '@/components/person/MyAlbum'
import MyBag from '@/components/person/MyBag'
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
    path: '/stores',
    name: '商城',
    component: Stores
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
    path: '/person',
    component: Person,
    children: [
      {
        path: '/person/my-travels',
        name: '我的游记',
        component: Mytravels
      },
      {
        path: '/person/my-album',
        name: '我的相册',
        component: MyAlbum
      },
      {
        path: '/person/my-concern',
        name: '我的关注',
        component: MyConcern
      },
      {
        path: '/person/my-save',
        name: '我的收藏',
        component: MySave
      },
      {
        path: '/person/my-bag',
        name: '我的背包',
        component: MyBag
      }
    ]
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
