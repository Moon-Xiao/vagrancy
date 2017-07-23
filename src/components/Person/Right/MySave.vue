<template>
  <div id="save">
    <div class="save-top">
      <div class="top-item">
        在路上
      </div>
    </div>
    <paginate-list ref="list" certainList="user" :certainRef="{id: userInfo._id, field: 'collect'}"
                   select="photo title intro visited footprint favor_count modifiedDate" :perPage="2">
      <template scope="item" slot="list-item">
        <travels-component :item="item"></travels-component>
</template>
        <template slot="no-content">
          <p>No content</p>
        </template>
        <template slot="pager" scope="pager">
          <paging :page="pager.page" :per-page="pager.perPage" :total="pager.total" :pages="pager.pages"
                  @switch="$refs.list.changePage(pager.page+$event)"
          ></paging>
      </template>
    </paginate-list>
  </div>
</template>

<script>
  import travelsComponent from './MyTravels/travelsComponent.vue'
  import PaginateList from '../../mixins/PaginateList.vue'
  import Paging from '../Bottom/Paging.vue'
  export default {
    components: {
      Paging,
      travelsComponent,
      PaginateList
    },
    data () {
      return {}
    }
  }
</script>

<style>
  #save .save-top {
    margin: 1rem 0;
    height: 3rem;
    position: relative;
  }

  #save .save-top .top-item {
    position: absolute;
    font-size: 24px;
    width: 8rem;
    color: #717171;
    text-align: left;
    border-bottom: 0.25rem outset rgba(33, 78, 243, 0.14);
  }
</style>
