import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Destination from '@/components/Destination.vue'
import Destinations from '@/components/Destinations.vue'
import Scenic from '@/components/DestinationsSet/Scenic/Scenic.vue'
import ScenicIndex from '@/components/DestinationsSet/Scenic/ScenicIndex.vue'
import About from '@/components/About'
import Stores from '@/components/Stores.vue'

import Person from '@/components/Person/Person.vue'
import ShowAlbum from '@/components/Person/Right/Album/showAlbum.vue'
import MemorializeAlbum from '@/components/Person/Right/Album/MemorializeAlbum.vue'
import CarouselAlbum from '@/components/Person/Right/Album/CarouselAlbum.vue'
import CreateAlbum from '@/components/Person/Right/Album/CreateAlbum.vue'
import MySave from '@/components/Person/Right/MySave'
import Mytravels from '@/components/Person/Right/MyTravels'
import MyConcern from '@/components/Person/Right/MyConcern'
import MyAlbum from '@/components/Person/Right/MyAlbum'
import MyBag from '@/components/Person/Right/MyBag'
import MyCertainTravels from '@/components/Person/Right/MyTravels/Post'

import ManageInfo from '@/components/Person/ManageInfo'
import ManageDetail from '@/components/Person/ManageInfo/ManageDetail'
import ManagePhoto from '@/components/Person/ManageInfo/ManagePhoto'
import ManagePurse from '@/components/Person/ManageInfo/ManagePurse'
import ManageSafe from '@/components/Person/ManageInfo/ManageSafe'
import ManageSetting from '@/components/Person/ManageInfo/ManageSetting'

import Blog from '@/components/Blog.vue'
import NoteDetail from '@/components/Blog/NoteDetail.vue'
import NoteGrid from '@/components/Blog/NoteGrid.vue'
import FlightAndHotel from '@/components/StoresSet/FlightAndHotel.vue'
import StoreHome from '@/components/StoresSet/StoreHome.vue'

import Login from '@/components/Login'

import store from '@/store'

import Product from '@/components/StoresSet/StoreProductDetail.vue'
import Collection from '@/components/StoresSet/ProductCollection.vue'

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
    component: Destination,
    children: [
      {
        path: '/',
        component: Destinations
      },
      {
        path: 'scenic',
        component: Scenic,
        children: [
          {
            path: 'index',
            component: ScenicIndex
          }
        ]
      }
    ]
  },
  {
    path: '/stores',
    name: '商城',
    component: Stores,
    children: [
      {
        path: '/stores',
        name: '首页',
        component: StoreHome
      },
      {
        path: '/stores/flight-and-hotel',
        name: '机酒自由行',
        component: FlightAndHotel
      },
      {
        path: '/stores/flight-and-hotel',
        name: '当地玩乐',
        component: FlightAndHotel
      },
      {
        path: '/stores/flight-and-hotel',
        name: '特价机票',
        component: FlightAndHotel
      },
      {
        path: '/stores/flight-and-hotel',
        name: '签证',
        component: FlightAndHotel
      },
      {
        path: '/stores/flight-and-hotel',
        name: '游轮',
        component: FlightAndHotel
      },
      {
        path: '/stores/flight-and-hotel',
        name: '租车自驾',
        component: FlightAndHotel
      },
      {
        path: '/stores/flight-and-hotel',
        name: '海岛游',
        component: FlightAndHotel
      },
      {
        path: '/stores/flight-and-hotel',
        name: '私人订制',
        component: FlightAndHotel
      },
      {
        path: '/stores/flight-and-hotel',
        name: '限时特卖',
        component: FlightAndHotel
      },
      {
        path: '/stores/flight-and-hotel',
        name: '深度旅行',
        component: FlightAndHotel
      },
      {
        path: '/stores/product',
        name: '',
        component: Product
      }
    ]
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
    meta: {requiresAuth: true},
    children: [
      {
        path: '/person',
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
      },
      {
        path: '/person/tr/:id',
        component: MyCertainTravels
      }
    ]
  },
  {
    path: '/persons/:id',
    component: Person
  },
  {
    path: '/show-album/:id',
    component: ShowAlbum
  },
  {
    path: '/memorialize-album',
    component: MemorializeAlbum
  },
  {
    path: '/carousel-album',
    component: CarouselAlbum
  },
  {
    path: '/create-album',
    component: CreateAlbum
  },
  {
    path: '/manage-info',
    component: ManageInfo,
    children: [
      {
        path: 'manage-info',
        name: '我的信息',
        icon: 'user-circle-o',
        component: ManageDetail
      },
      {
        path: '/manage-info/manage-photo',
        name: '我的头像',
        icon: 'file-photo-o',
        component: ManagePhoto
      },
      {
        path: '/manage-info/manage-setting',
        name: '绑定设置',
        icon: 'magnet',
        component: ManageSetting
      },
      {
        path: '/manage-info/manage-safe',
        name: '账号安全',
        icon: 'user-secret',
        component: ManageSafe
      },
      {
        path: '/manage-info/manage-purse',
        name: '我的钱包',
        icon: 'credit-card-alt',
        component: ManagePurse
      }]
  },
  {
    path: '/about',
    name: '关于',
    component: About
  },
  {
    path: '/collection',
    name: '',
    component: Collection
  },
  {
    path: '/login',
    component: Login
  }
]

const router = new Router({
  routes: routes
})
export let links = routes
export default router

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta && record.meta.requiresAuth)) {
    // esta ruta requiere autenticación, verificamos que haya iniciado sesión
    // sino, redirigimos a la página de inicio de sesión.
    if (!store.state.user.logged) {
      next({
        path: '/login',
        query: {redirect: to.fullPath}
      })
    } else {
      next()
    }
  } else {
    next() // ¡Asegúrate de ejecutar next siempre!
  }
})
