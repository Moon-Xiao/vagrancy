/**
 * Created by Moon on 2017/7/15.
 */
import Vue from 'vue'
import Router from 'vue-router'
import ManagePhoto from '@/components/person/ManageInfo/ManagePhoto'
import ManageDetail from '@/components/person/ManageInfo/ManageDetail'
import Contact from '@/components/Contact'

Vue.use(Router)
let routes = [
  {
    path: '/person/manage-info/manage-photo',
    component: ManagePhoto
  },
  {
    path: '/person/manage-info/manage-detail',
    component: ManageDetail
  },
  {
    path: '/con',
    component: Contact
  }
]
export default new Router({
  routes: routes
})
export let perLinks = routes
