<template>
  <div id="concern">
    <h3>我的粉丝</h3>
    <b-carousel controls indicators :interval="6000" background="#eeeeee">

      <b-carousel-slide v-for="list in imgList">
        <div class="items">
          <div class="item" v-for="item in list">
            <div :style="'background-image: url('+item.link+')'">
            </div>
            <p>{{item.title}}</p>
          </div>
        </div>
      </b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
  export default {
    name: 'MyConcern',
    data () {
      return {
        imgList: [
          [
            {link: 'http://placeskull.com/200/200/ABABAB/-1/0', title: 'nice1'},
            {link: 'http://placeskull.com/200/200/ABABAB/-1/1', title: 'nice2'},
            {link: 'http://placeskull.com/200/200/ABABAB/-1/2', title: 'nice3'},
            {link: 'http://placeskull.com/200/200/ABABAB/-1/3', title: 'nice4'}
          ],
          [
            {link: 'http://placeskull.com/200/200/ABABAB/-1/3', title: 'nice4'},
            {link: 'http://placeskull.com/200/200/ABABAB/-1/3', title: 'nice4'},
            {link: 'http://placeskull.com/200/200/ABABAB/-1/2', title: 'nice3'},
            {link: 'http://placeskull.com/200/200/ABABAB/-1/3', title: 'nice4'}
          ],
          [
            {link: 'http://placeskull.com/200/200/ABABAB/-1/3', title: 'nice4'},
            {link: 'http://placeskull.com/200/200/ABABAB/-1/3', title: 'nice4'},
            {link: 'http://placeskull.com/200/200/ABABAB/-1/2', title: 'nice3'},
            {link: 'http://placeskull.com/200/200/ABABAB/-1/3', title: 'nice4'}
          ],
          [
            {link: 'http://placeskull.com/200/200/ABABAB/-1/3', title: 'nice4'},
            {link: 'http://placeskull.com/200/200/ABABAB/-1/3', title: 'nice4'},
            {link: 'http://placeskull.com/200/200/ABABAB/-1/2', title: 'nice3'},
            {link: 'http://placeskull.com/200/200/ABABAB/-1/3', title: 'nice4'}
          ]
        ]
      }
    },
    methods: {}
  }
</script>

<style scoped>
  #concern {
    position: relative;
    border: 1px solid lightgray;
    padding: 1rem 0.3rem;
  }
  h3 {
    font-size: 24px;
    margin-bottom:1rem ;
  }
  .items {
    margin: 1rem .12rem 0;
    height: 100%;
    width: 100%;
    text-align: center;
  }

  .item {
    display: inline-block;
    width: 3.5rem;
    height: 5rem;
  }

  .item>div {
    position: absolute;
    width: 3.25rem;
    height: 3.25rem;
    border-radius: 50%;
    background-size: cover;
    border: 1px solid lightgray;
  }

  /*.item img {*/
    /*position: relative;*/
    /*width: 3.25rem;*/
    /*height: 3.25rem;*/
    /*border-radius: 50%;*/
  /*}*/

  .item p {
    position: relative;
    font-size: 18px;
    margin-top: 3.75rem;
  }

</style>
