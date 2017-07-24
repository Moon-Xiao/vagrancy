<template>
  <div id="messageBoard">
    <div class="header">
      <span>留言板</span>
      <input id="switch" type="checkbox" checked/>
      <textarea placeholder="你想说点啥"></textarea>
      <button class="btn btn-warning" v-model="leaveMessage">留言</button>
    </div>
    <div class="body">
      <template v-for="item in message">
        <div class="item">
          <div class="item-info">
            <div class="info-img" :style="'background-image: url('+item.img+')'"></div>
            <div class="info-detail">
              <p style="color:orange;font-size: 14px">{{item.name}}</p>
              <p style="color: #aaa;font-size: 13px">{{item.time}}</p>
            </div>
          </div>
          <div class="item-content">{{item.info}}</div>
          <div class="item-operation" @click="deleteSuccess"><span>删除</span></div>
        </div>
      </template>
      <paging></paging>
    </div>
  </div>
</template>

<script>
  import Paging from '../Bottom/Paging.vue'
  export default {
    components: {
      Paging
    },
    data  () {
      return {
        leaveMessage: '',
        messagePageNum: '0',
        message: [
          {
            name: 'moon-xiao',
            img: '/static/images/person/weixin.png',
            time: '2017-08-11 01:22:22',
            info: 'sfdghjdghdsjhmgftgdgfbgnbbvcadsfghjdaxdfsghdasfghdhgfsmfnmd'
          },
          {
            name: 'moon-xiao',
            img: '/static/images/person/weixin.png',
            time: '2017-08-11 01:22:22',
            info: 'sfdghjdghdsjhmgfdhgfsmfnmd'
          },
          {
            name: 'moon-xiao',
            img: '/static/images/person/weixin.png',
            time: '2017-08-11 01:22:22',
            info: 'sfdghjdghdsjhmgfdhgfsmfnmd'
          },
          {
            name: 'moon-xiao',
            img: '/static/images/person/weixin.png',
            time: '2017-08-11 01:22:22',
            info: 'sfdghjdghdsjhmgfdhgfsmfnmd'
          }
        ]
      }
    },
    methods: {
      deleteSuccess: function () {
        window.alert('删除成功！')
      }
    }
  }
</script>
<style>
  #messageBoard {
    border: 1px dotted #5f9afa;
    box-shadow: 0 0 0.3rem #eee;
    border-radius: 0.3rem;
    width: 18rem;
  }

  #messageBoard .header {
    margin: 1rem auto;
  }

  #messageBoard .header > span {
    font-size: 16px;
    color: #0275d8;
  }

  #messageBoard .header > textarea {
    width: 98%;
    margin: 0.8rem auto 0.5rem;
    font-size: 12px;
    border-radius: 0.2rem;
    border-color: #ddd;
  }

  #messageBoard .header > button {
    width: 98%;
    font-size: 14px;
  }

  /*body*/
  #messageBoard .body {
    margin: 3rem auto 1rem;
  }

  #messageBoard .item {
    border-radius: 0.2rem;
    border: 1px solid #ddd;
    padding: 0.8rem 0.3rem;
    margin: 0.8rem auto;
  }

  #messageBoard .item .item-info {
    display: flex;
    margin-left: 1rem;
  }

  #messageBoard .item .item-info .info-img {
    width: 3.4rem;
    height: 3.4rem;
    border-radius: 50%;
    background-repeat: no-repeat;
    background-size: cover;
    background-origin: content-box;
  }

  #messageBoard .item .item-content {
    width: 90%;
    height: 50px;
    text-align: left;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    margin: 0.6rem auto;
    font-size: 12px;
    color: #717171;
  }

  #messageBoard .item .item-info .info-detail {
    padding: 0.5rem;
    margin: 0 auto;
  }

  #messageBoard .item .item-info .info-detail p {
    text-align: center;
  }

  #messageBoard .item .item-operation {
    margin-right: 0.3rem;
    font-size: 12px;
    color: rgba(27, 174, 222, 0.7);
    text-align: right;
  }

  #messageBoard .item .item-operation:hover {
    color: #1baede;
  }
</style>
