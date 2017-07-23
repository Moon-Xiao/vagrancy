<template>

  <div class="country-survey" style="margin-top: 20px">
    <left-aside :tabs="tabTitles">
      <div slot="content-0" class="solt-content">
        <div class="wiki-title clearfix">
          <h1 class="h1">{{tabTitles[0]}}</h1>
        </div>
        <div class="wiki-content">
          <div class="anchor-nav">
            <a href="#">{{country.name}} {{country.ename}}</a>
            <span class="split"></span><a href="#">简介</a>
            <span class="split"></span><a href="#">最佳旅行时间</a>
            <span class="split"></span><a href="#">建议游玩天数</a>
            <span class="split"></span><a href="#">当地气候</a>
            <span class="split"></span><a href="#">语言</a>
            <span class="split"></span><a href="#">小费</a>
          </div>
          <div class="part" >
            <h2>{{country.name}} {{country.ename}}</h2>
            <div class="figure">
              <a href="#"
                 title="点击查看原图">
                <img :src="country.mainImgs[0]">
              </a>
            </div>
            <p>
              中国，地大物博，历史悠久，是世界四大文明古国之一，如今的世界地位更不容小觑。除此之外，更是有数不尽的旅游资源，众多名胜古迹、民族风情好自然风光吸引着来自四面八方的各国游客。</p>
          </div>
          <div class="part" >
            <h2>最佳旅行时间</h2>
            <p>
              四季皆可。</p>
          </div>
          <div class="part" >
            <h2>建议游玩天数</h2>
            <p>
              30天。</p>
          </div>
          <div class="part" >
            <h2>当地气候</h2>
            <p>温带大类型气候。</p>
          </div>
        </div>
      </div>
      <div slot="content-1" class="solt-content">
        <div class="wiki-title clearfix">
          <h1 class="h1">{{tabTitles[1]}}</h1>
        </div>
        <div class="wiki-content">
          <div class="anchor-nav">
            <a href="#">欣赏达萨瓦梅朵河坛夜祭</a>
            <span class="split"></span><a href="#">寻找佛主的足迹</a>
            <span class="split"></span><a href="#">清晨恒河游船</a>
            <span class="split"></span><a href="#">与神牛散步</a>
          </div>
          <div class="part" >
            <h2>欣赏达萨瓦梅朵河坛夜祭</h2>
            <p>达萨瓦梅朵河坛是瓦拉纳西恒河边上最热闹的一个河坛，每天晚上这里都会举行祭祀活动。台阶挤满摊贩、教徒、乞丐和游客，非常热闹。</p>
          </div>
          <div class="part" >
            <h2>寻找佛主的足迹</h2>

            <p>佛主第一次讲法之地就在瓦拉纳西以北10km的鹿野苑，如今鹿野苑里有许多国家新建的寺院，风格不同，都很有观赏价值。</p>

          </div>
          <div class="part" >
            <h2>清晨恒河游船</h2>

            <p>恒河游船似乎已经成为游客来到瓦拉纳西必做之事，游客一旦接近就会有船夫来拉客。清晨6 点左右是最适合游河的时间，游客乘坐游船，一边欣赏日出，一边欣赏信徒沐浴净身。</p>

          </div>
          <div class="part" >
            <h2>与神牛散步</h2>
            <p>在印度，牛是被尊敬的动物，而瓦拉纳西的牛特别多，大街小巷总是可以看到它们的身影。所以在瓦拉纳西你可以感受到与神牛一起，在城市里散步。</p>
          </div>
        </div>
      </div>
      <div slot="content-2" class="solt-content">
        <div class="wiki-title clearfix">
          <h1 class="h1">{{tabTitles[2]}}</h1>
        </div>
        <div class="wiki-content">
          <div class="anchor-nav" style="display:none">
            <a href="#">景点简介</a>
            <span class="split"></span><a href="#">瓦拉纳西必游景点</a>
          </div>
          <div class="part" >
            <h2>景点简介</h2>
            <div class="figure">
              <a href="#"
                 target="_blank" title="点击查看原图">
                <img src="http://n3-q.mafengwo.net/s8/M00/1F/B4/wKgBpVV4F8GAYJvnAAjatVyk3ns61.jpeg?imageslim">
              </a>
            </div>
            <p>
              瓦拉纳西位于印度北方邦，座落在恒河中游左岸，是印度教圣地，是印度最著名历史古城。瓦拉纳西有各式庙宇1500座以上，主要名胜古迹有：恒河浴场、印度金庙、杜尔迦庙、贝拿勒斯印度大学等。瓦拉纳西街头树立着象征湿婆的神柱；释加牟尼初转法轮的鹿野苑就在瓦拉纳西附近；耆那教的两个教长也诞生在附近，故瓦拉纳西成为印度教、佛教、耆那教的重要圣地。</p>
          </div>
          <div class="part" >
            <h2>瓦拉纳西必游景点</h2>
            <p>瓦拉纳西最具特色的景致就在河边。沿河边而行，你可以沿途游览数十个Ghat（河坛）附近的奇妙景象，也可以前往达萨瓦梅朵、玛尼卡尼卡河坛等两个较为著名的河坛观看祭祀、火葬等特色项目。</p>
            <div class="poi-card clearfix">
              <div class="item ">
                <a href="#">
                  <div class="img"><img
                    src="http://n2-q.mafengwo.net/s5/M00/49/4A/wKgB3FEN7S-AfJfIAAoxQSIqSl845.jpeg?imageMogr2%2Fthumbnail%2F%21215x140r%2Fgravity%2FCenter%2Fcrop%2F%21215x140%2Fquality%2F100">
                  </div>
                  <div class="info">
                    <h3>玛尼卡尼卡河坛</h3>
                    <div class="en">Manikarnika Ghat</div>
                    <div class="num">
                      <b>39</b>蜂评,<b>9</b>游记提及
                    </div>
                  </div>
                </a>
              </div>
              <div class="item ">
                <a href="#">
                  <div class="img"><img
                    src="http://n3-q.mafengwo.net/s9/M00/34/CB/wKgBs1ZO6fiAarPIAAeNiUMrPWw988.png?imageMogr2%2Fthumbnail%2F%21215x140r%2Fgravity%2FCenter%2Fcrop%2F%21215x140%2Fquality%2F100">
                  </div>
                  <div class="info">
                    <h3>湿婆神庙/黄金寺庙</h3>
                    <div class="en">Golden Temple</div>
                    <div class="num">
                      <b>17</b>蜂评,<b>7</b>游记提及
                    </div>
                  </div>
                </a>
              </div>
              <div class="item item-r">
                <a href="#">
                  <div class="img"><img
                    src="http://c4-q.mafengwo.net/s6/M00/F8/FB/wKgB4lIo3HqAWfaDAA8ca2BbsXQ24.jpeg?imageMogr2%2Fthumbnail%2F%21215x140r%2Fgravity%2FCenter%2Fcrop%2F%21215x140%2Fquality%2F100%7Cimageslim">
                  </div>
                  <div class="info">
                    <h3>贝拿勒斯印度大学</h3>
                    <div class="en">Banaras Hindu University</div>
                    <div class="num">
                      <b>32</b>蜂评,<b>17</b>游记提及
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div class="figure">
              <a href="#"
                 title="点击查看原图">
                <img src="http://b4-q.mafengwo.net/s5/M00/B8/5F/wKgB3FD_dpKAGkvJAAFpqE3Apu436.jpeg">
              </a>
            </div>
          </div>
        </div>
      </div>
      <div slot="content-3" class="solt-content">
        <div class="wiki-title clearfix">
          <h1 class="h1">{{tabTitles[3]}}</h1>
        </div>
        <div class="wiki-content">
          <div class="anchor-nav">
            <a href="#">美食概况</a>
            <span class="split"></span><a href="#">印度有没有咖喱？</a>
            <span class="split"></span><a href="#">宗教与饮食</a>
            <span class="split"></span><a href="#">瓦拉纳西餐厅推荐</a>
          </div>
          <div class="part" >
            <h2>美食概况</h2>
            <p>瓦拉纳西的美食很多，都藏在小巷子里，只是因为这里的环境确实比较糟糕，肠胃不好的人就不要吃路边小吃了，最好去酒店的餐厅，比较干净。<br>
              用餐礼仪<br>
              印度人习惯用手直接抓取食物，如果你不能接受也没关系，一般的餐厅都会配备刀叉。要注意吃东西不能使用左手，一定要使用右手，因为当地人认为左手是不洁的。<br>
              如果前往当地人家里做客，最好不要在盘子里剩下食物。</p>
            <h4>炒饭及套餐</h4>
            <div class="figure">
              <a href="#">
                <img src="http://a4-q.mafengwo.net/s5/M00/24/84/wKgB3FHRNTeAOfzoAAPuxaVtIHQ24.jpeg">
              </a>
            </div>
            <p>Thali：印度最传统的一种套餐，将米饭、面饼、酸奶、咖喱、蔬菜、甜点等装进圆形铝盘里。圆盘里盛着配菜、马铃薯、酸奶、甜点、饭或饼等。<br>
              Biryani：炒饭加入蔬菜、羊肉、鸡肉等。推荐羊肉炒饭。<br>
              Pulao：水果、蘑菇、芝士等多种口味的炒饭。</p>
            <h4>肉食</h4>
            <div class="figure">
              <a href="#">
                <img src="http://a1-q.mafengwo.net/s5/M00/E0/7B/wKgB3FG0OSaARExaAANTlvz9gx4775.png?imageslim">
              </a>
              <div>Tandoori</div>
            </div>
            <p>Butter Chicken：奶油鸡，北印度一道著名料理。<br>
              Tandoori Chicken：烤鸡，外观很红，肉是淹过的，再洒上调味料，味道不错。<br>
              Tandoori Mutton：印度独具特色的烤羊肉串。</p>
            <h4>饮料及甜品</h4>
            <div class="figure">
              <a href="#">
                <img src="http://a2-q.mafengwo.net/s5/M00/35/78/wKgB2lGx0qSAAwdiAAOv2fsBrJA019.png?imageslim">
              </a>
              <div>印度奶茶</div>
            </div>
            <p>Lassi：酸奶 <br>
              Chai/Masala Tea: 印式奶茶，当地人每天必饮！除了味道醇香，还有提神醒脑的功效。印度人喜欢往里面加入姜末（Ginger），如果不喜欢姜味可以告知服务员。<br>
              Laddu：拉杜球，一种球形面食甜点，有各种口味，含有奶油。印度人喜欢在节日、婚礼或庆典分发以示庆祝。最常见的是的拉杜球是motichoor/boondi laddu。在著名电影《印式英语》中，这种甜食出了很大风头。<br>
              Gulab Jamun：到处都能见到这种甜品，玫瑰果子浸在糖水里，非常甜腻。</p>
          </div>
          <div class="part" >
            <h2>印度有没有咖喱？</h2>
            <p>
              提起印度美食，人们往往最先想起的是“咖喱”（Curry）。其实，严格来讲，印度并没有叫作“咖喱”的食物。这个词的是其实是英国人杜撰出来的，他们用南印度泰米尔语中的“Kari”（原意为“酱汁”），来指代任何含有香料的食物。因此，你在印度面向本地人餐馆的菜单上是找不到“咖喱”这道菜的,印度人会将当地含有香料的料理叫做“玛莎拉”(Masala)。</p>
          </div>
          <div class="part" >
            <h2>宗教与饮食</h2>
            <p>印度人的饮食习惯很大程度上受到宗教的影响和约束。<br>
              占印度80%人口的印度教徒将牛奉为神牛，牛肉是最大的禁忌。出身于印度教的婆罗门及刹帝利等高种姓人群、耆那教徒和佛教徒是严格的素食者，不仅绝对不吃任何肉，甚至连鸡蛋也不吃。他们的主要食用谷类、豆类和奶制品。这些素食者占印度人口的60%，而古吉拉特邦和泰米尔纳德邦是两个素食者比例最高的邦。<br>
              穆斯林绝对不吃猪肉，但可以随意食用牛肉。因此，不同的饮食习惯有时会成为印度教徒和穆斯林冲突的导火索。鸡肉和羊肉是印度市面上最常见的肉食。除此之外，游客很难找到提供牛肉和猪肉的餐厅，除了基督教氛围浓厚的果阿邦、喀拉拉邦或米佐拉姆邦等。<br>
              印度大部分邦的地方政府限制饮酒，有的地方如古吉拉特邦，甚至禁止当地人买卖酒。虽然国际游客可以凭护照到指定的商店买酒，但这些场所在非游客聚集地一般比较难找。</p>
          </div>
          <div class="part" >
            <h2>瓦拉纳西餐厅推荐</h2>
            <div class="poi-card clearfix">
              <div class="item ">
                <a href="#">
                  <div class="img"><img
                    src="http://c2-q.mafengwo.net/s5/M00/4D/50/wKgB3FHvQ9CAWesCAADE1UjTtHE09.jpeg?imageMogr2%2Fthumbnail%2F%21215x140r%2Fgravity%2FCenter%2Fcrop%2F%21215x140%2Fquality%2F100%7Cimageslim">
                  </div>
                  <div class="info">
                    <h3>Ethnic Aroma</h3>
                    <div class="en">Ethnic Aroma</div>
                    <div class="num">
                    </div>
                  </div>
                </a>
              </div>
              <div class="item ">
                <a href="#">
                  <div class="img"><img
                    src="http://n1-q.mafengwo.net/s5/M00/4B/68/wKgB3FHvQkyACiJGAABN6UY196w12.jpeg?imageMogr2%2Fthumbnail%2F%21215x140r%2Fgravity%2FCenter%2Fcrop%2F%21215x140%2Fquality%2F100">
                  </div>
                  <div class="info">
                    <h3>KamesHut Restaurant</h3>
                    <div class="en">KamesHut Restaurant</div>
                    <div class="num">
                    </div>
                  </div>
                </a>
              </div>
              <div class="item item-r">
                <a href="#">
                  <div class="img"><img
                    src="http://c4-q.mafengwo.net/s5/M00/7C/87/wKgB2lHvQH2AEjLVAABJqacncK088.jpeg?imageMogr2%2Fthumbnail%2F%21215x140r%2Fgravity%2FCenter%2Fcrop%2F%21215x140%2Fquality%2F100">
                  </div>
                  <div class="info">
                    <h3>Sona Roopa Restaurant</h3>
                    <div class="en">Sona Roopa Restaurant</div>
                    <div class="num">
                      <b>1</b>蜂评
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div slot="content-4" class="solt-content">
        <div class="wiki-title clearfix">
          <h1 class="h1">{{tabTitles[4]}}</h1>
        </div>
        <div class="wiki-content">
          <div class="anchor-nav" style="display:none">
            <a href="/baike/16125_452.html#wiki_part_1" data-srcolltarget="#wiki_part_1">购物概况</a>
            <span class="split"></span><a href="/baike/16125_452.html#wiki_part_2"
                                          data-srcolltarget="#wiki_part_2">特色商品</a>
          </div>
          <div class="part" >
            <h2>购物概况</h2>
            <p>
              在瓦拉纳西购物，一定要注意货比三家和砍价。瓦拉纳西当地的服饰比较有名，尤其是穆斯林片区生产的纱丽，有着精致的手工绘画。另外，印度特色的首饰、当地女子的三件套、男子的长衫、精致的印度鞋、茶叶等等，都十分精美，值得购买。特别推荐在瓦拉纳西购买印度音乐和电影等音像制品，瓦拉纳西有相当多的国外艺术家常年呆在这里，他们会制作一些小众音乐。<br>
              小鱼和渔夫 小巷子里面很多小店的东西都还不错，手镯是整个印度之行看见品种最多最好的。我买了阿里巴巴裤子，几十卢比一条，还买了围巾，都不贵。</p>

          </div>
          <div class="part" >
            <h2>特色商品</h2>
            <h4>香料</h4>
            <div class="figure">
              <a href="http://c1-q.mafengwo.net/s1/M00/E6/C8/wKgBm04aH7uaKk67AArs3VfVG1w95.jpeg?imageslim"
                 target="_blank" title="点击查看原图">
                <img src="http://c1-q.mafengwo.net/s1/M00/E6/C8/wKgBm04aH7uaKk67AArs3VfVG1w95.jpeg?imageslim">
              </a>
            </div>
            <p>印度菜肴里最不可缺少的就是香料了，连咖喱都有上千种。印度香料除了提升味觉，对身体也有相应的好处。</p>
            <h4>音像制品</h4>
            <div class="figure">
              <a href="http://b3-q.mafengwo.net/s5/M00/78/38/wKgB3FHyL4iAVWe4AADdLfXINNg65.jpeg" target="_blank"
                 title="点击查看原图">
                <img src="http://b3-q.mafengwo.net/s5/M00/78/38/wKgB3FHyL4iAVWe4AADdLfXINNg65.jpeg">
              </a>
            </div>
            <p>瓦拉纳西街边有出售印度本土音乐和世界其他地区的小众音乐的音像制品。</p>
            <h4>饰品</h4>
            <div class="figure">
              <a href="http://a1-q.mafengwo.net/s5/M00/19/85/wKgB3FHUC2KAWXzBAAZIyG27bbc41.jpeg" target="_blank"
                 title="点击查看原图">
                <img src="http://a1-q.mafengwo.net/s5/M00/19/85/wKgB3FHUC2KAWXzBAAZIyG27bbc41.jpeg">
              </a>
              <div> by 吴氏生飞</div>
            </div>
            <p>一流的首饰制造工艺让印度的饰品充满了异域风情。做工精良且价格低廉的各式饰品会让你挑花眼。</p>
            <h4>纱丽</h4>
            <div class="figure">
              <a href="http://c3-q.mafengwo.net/s5/M00/30/3E/wKgB21BNeHe7Pb_tAAO-Mku5Bl044.jpeg" target="_blank"
                 title="点击查看原图">
                <img src="http://c3-q.mafengwo.net/s5/M00/30/3E/wKgB21BNeHe7Pb_tAAO-Mku5Bl044.jpeg">
              </a>
            </div>
            <p>瓦拉纳西的纱丽较为出名，色彩丰富，制作精良。</p>
            <p><strong>纱丽市场</strong><br>
              瓦拉纳西制造的纱丽被认为是印度最好的纱丽之一，这些纱丽由细丝绸装饰着错综复杂的设计。纱丽市场位于贝拿勒斯印度大学附近，集中了各式各样的纱丽，是购买纱丽的最佳去处。</p>
          </div>
        </div>
      </div>
    </left-aside>
  </div>
</template>
<script>
  import LeftAside from '../../common/LeftAside.vue'
  export default {
    components: {LeftAside},
    data () {
      return {}
    },
    props: {
      country: Object
    },
    computed: {
      tabTitles () {
        const name = this.country.name
        return [name + '速览', name + '体验', '热门城市', '餐饮', '购物']
      }
    }
  }
</script>
<style scoped>
  .solt-content {
    text-align: left;
    margin: 20px 0;
  }

  .tab-nav li {
    font-size: 18px;
  }

  .wiki-cont h1, .wiki-cont h1 {
    font-size: 24px;
  }

  .anchor-nav {
    margin: 10px 0;
    font-size: 14px;
    color: #333;
  }

  .anchor-nav > a {
    color: dimgray;
  }

  .anchor-nav > a:hover {
    color: #ec971f;
  }

  .anchor-nav .split {
    margin: 0 15px;
    display: inline-block;
    width: 1px;
    height: 10px;
    background-color: #ddd;
    overflow: hidden;
    vertical-align: middle;
  }

  .wiki-content .part {
    margin: 30px 0 0 0;
    padding-left: 20px;
    padding-bottom: 1px;
    border-left: 2px solid #eee;
    font-size: 14px;
    color: #666;
    line-height: 20px;
  }

  .wiki-cont h1, .wiki-cont h2, .wiki-cont h3, .wiki-cont h1, .wiki-cont h2, .wiki-cont h3 {
    font-weight: normal;
    color: #333;
  }

  .wiki-content h2 {
    margin-left: -22px;
    padding-left: 20px;
    height: 29px;
    line-height: 28px;
    font-size: 18px;
    border-left: 2px solid #ec971f;
  }

  .wiki-content .figure {
    margin: 10px 0;
    font-size: 12px;
    color: #999;
    line-height: 20px;
  }

  .wiki-content .figure img {
    margin-bottom: 8px;
    max-width: 100%;
  }

  .wiki-content .tips {
    background-color: #fff3df;
    padding: 15px 20px;
    margin: 20px 0 0;
    color: #4b4335;
  }

  .wiki-content h3 {
    font-size: 16px;
    color: #ec971f;
  }

  .poi-card .item a {
    display: block;
    color: #666;
  }

  .poi-card .item {
    float: left;
    width: 215px;
    display: inline;
    margin: 5px 10px 5px 0;
    box-shadow: 0 1px 6px rgba(0, 0, 0, .08);
    background-color: #fff;
  }

  .poi-card .info {
    border: 1px solid #f2f2f2;
    border-top: 0 none;
    padding: 15px;
  }

  .poi-card .item a:hover .h3 {
    color: #ff9d00;
  }

  .poi-card .en {
    width: 183px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    font-size: 12px;
    color: #999;
  }

  .poi-card .num {
    font-size: 12px;
    margin-top: 8px;
  }

  .poi-card .num b {
    color: #ff9d00;
  }

  .wiki-content h4 {
    margin-top: 20px;
    font-weight: normal;
    font-size: 14px;
    color: #ff9d00;
  }

</style>
