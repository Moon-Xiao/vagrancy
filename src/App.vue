<template>
  <div id="app">
    <nav-bar>
      <span slot="left" @click="left=!left">left</span>
      <p slot="title">hi</p>
      <span slot="right" @click="right=!right">right</span>
    </nav-bar>
    <side-bar v-model="left" position="left">
      <list slot="content">
        <group header="Header text" footer="Footer text">
          <item :icon="logo" :checked="true" :height="120" title="title" details="desc" disclosure="indicator" @tap="tap" @press="press">
            <div slot="expand">
              <p>Author</p>
              <p>fcwemfkewkwmack</p>
            </div>
          </item>
          <item :icon="logo" title="title" disclosure="detail">
            <text-input slot="details" placeholder="Placeholder"></text-input>
          </item>
          <item :icon="logo" :checked="true" title="title">
            <my-switch slot="details"></my-switch>
          </item>
        </group>
        <group header="Header text" footer="Footer text">
          <item :icon="logo" title="title" details="desc" disclosure="indicator"></item>
          <item :icon="logo" title="title" details="desc" disclosure="detail"></item>
          <item :icon="logo" title="title" details="desc"></item>
        </group>
        <group header="Header text" footer="Footer text">
          <item :icon="logo" title="title" details="desc" disclosure="indicator"></item>
          <item :icon="logo" title="title" details="desc" disclosure="detail"></item>
          <item :icon="logo" title="title" details="desc"></item>
        </group>
        <group header="Header text" footer="Footer text">
          <item :icon="logo" title="title" details="desc" disclosure="indicator"></item>
          <item :icon="logo" title="title" details="desc" disclosure="detail"></item>
          <item :icon="logo" title="title" details="desc"></item>
        </group>
        <group header="Header text" footer="Footer text">
          <item :icon="logo" title="title" details="desc" disclosure="indicator"></item>
          <item :icon="logo" title="title" details="desc" disclosure="detail"></item>
          <item :icon="logo" title="title" details="desc"></item>
        </group>
      </list>
    </side-bar>
    <side-bar v-model="right" position="right"></side-bar>
    <br>
    <div class="row">
      <div class="col-5" style="background: lightcoral; height: 200px">col-5</div>
      <div class="col-19" style="background: lightblue; height: 200px">col-19</div>
    </div>
    <tab-bar :tabs="[{title: 'hi'}, {title: 'hi', active: true}]">
      <p></p>
      <Item title="hi"></Item>
    </tab-bar>
    <!--<router-view></router-view>-->
  </div>
</template>

<script>
  import NavBar from './components/layout/NavBar/index.vue'
  import SideBar from './components/layout/SideBar/index.vue'
  import {List, Item, Group} from './components/layout/List'
  import Logo from './assets/logo.png'
  import {TextInput, Switch} from './components/layout/Form'
  import TabBar from './components/layout/TabBar/index.vue'

  import './styles/index.less'

  export default {
    name: 'app',
    data () {
      return {
        left: false,
        right: false,
        logo: Logo
      }
    },
    components: {
      NavBar,
      SideBar,
      List,
      Item,
      Group,
      MySwitch: Switch,
      TextInput,
      TabBar
    },
    methods: {
      tap (e) {
        console.log(e)
      },
      press (e) {
        console.log(e)
      }
    }
  }
</script>

<style>

</style>
