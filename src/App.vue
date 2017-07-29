<template>
  <div id="app">
    <!--<person-index></person-index>-->
    <!--<login></login>-->
    <!--<register></register>-->
    <!--<setting></setting>-->
    <!--<edit-info></edit-info>-->
    <collection></collection>
  </div>
</template>npm install vue-awesome --save

<script>
  import './styles/index.less'
  import personIndex from './components/Person/Person.vue'
  import login from './components/Person/Login.vue'
  import Register from './components/Person/Register.vue'
  import Setting from './components/Person/Manage/Setting.vue'
  import EditInfo from './components/Person/Manage/EditInfo.vue'
  import Collection from './components/Person/Collection.vue'
  export default {
    name: 'app',
    data () {
      return {}
    },
    components: {
      personIndex,
      login,
      Register,
      Setting,
      EditInfo,
      Collection
    },
    methods: {}
  }
</script>

<style>

</style>
