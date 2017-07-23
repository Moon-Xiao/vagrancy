// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import BootstrapVue from 'bootstrap-vue'
import 'jquery/dist/jquery.min'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'font-awesome/css/font-awesome.min.css'
import api, {baseURL} from './api'
import moment from 'moment'

moment.locale('zh-CN')

Vue.use(BootstrapVue)
Vue.config.productionTip = false

/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   router,
//   template: '<App/>',
//   components: {App}
// })
Vue.mixin({
  computed: {
    logged () {
      return this.$store.state.user.logged
    },
    userInfo () {
      return this.$store.state.user.info
    },
    baseUrl () {
      return baseURL
    }
  },
  methods: {
    async updateInfo (infos) {
      let formData = new FormData()
      let data = {}
      for (let key of Object.keys(infos)) {
        if (infos[key] instanceof File) {
          formData.append(key, infos[key])
        } else {
          data[key] = infos[key]
        }
      }
      formData.append('$data', JSON.stringify(data))
      await api.updateItem({url: 'lists/users'}, this.userInfo._id, formData, {headers: {'Content-Type': 'multipart/form-data'}})
      store.dispatch('user/getUserInfo')
    },
    formatDate (date, format) {
      return moment(date).format(format || 'll')
    }
  }
})

store.dispatch('init')
  .then(function () {
    /* eslint-disable no-new */
    new Vue({
      el: '#app',
      router,
      store,
      template: '<App/>',
      components: {App}
    })
  })
  .catch(console.error)
