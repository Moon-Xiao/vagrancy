<template>
  <div class="travel-detail">
    <div class="mguide-wrap clearfix">
      <div class="mguide-left " >
        <!--主题信息 start-->
        <div class="mguide-detail">
          <div class="detail-imgWrap" id="tar">
            <img :src="travel.img" class="mguide-img">
            <span class="waterMark">
					    <img src="/static/images/icon/watermark.png">
				    </span>
          </div>
          <!--右侧个人信息 start-->
          <div class="mguide-avatar">
            <a href="#" class="avatar"><img :src="travel.author.authorImg"></a>
            <p class="title"><a href="#">微沫</a></p>
          </div>
          <div class="detail-wrap">
            <!--右侧个人信息 end-->
            <h1 class="detail-h1">
              如果在香港遇见了你
            </h1>
            <div class="mguide-like">
              <span class="mguide-likeBtn" data-bn-ipg="place-mguide-view-top-like">
                <em class="leftPart">
                  <i class="icon"></i>
                </em>
                <em class="rightPart">
                  <span class="text fontYaHei">喜欢<i style="color: #d38daf;font-style: normal">{{travel.lickCout}}</i></span>
                </em>
              </span>
            </div>
            <div class="detail-content">{{travel.abstract}}</div>
            <div class="detail-tags"><em>标签：</em><span v-for="scenic in travel.scenic">{{scenic}}</span></div>
          </div>
        </div>
        <!--主题信息 end-->
        <div class="mguide-empty">
        </div>
        <!--列表 start-->
        <ul id="poiList">
          <li v-for="(part,index) in travel.parts" class="mguide-list">
            <div class="list-title">
              <ul class="title-right">
                <li class="intendTo"><span class="icons"></span></li>
                <li class="addToPlan"><span class="icons"></span></li>
              </ul>
              <div class="title-left">
                <h2 class="title-detail">
                  <span class="fa fa-map-marker">{{index + 1}}</span>
                  <a href="#">{{part.title}}</a>
                </h2>
              </div>
            </div>
            <div class="list-slider">
              <div class="list-wrap">
                <div class="slider-contain"><img :src="part.img"></div>
              </div>
            </div>
            <div class="slider-intro">
              <div class="intro-detail"><div class="detail">{{part.content}}</div></div>
            </div>
            <div class="comment-wrap"></div>
          </li>
        </ul>
        <!--列表 end-->
        <div class="mguide-like">
          <span class="mguide-likeBtn" data-bn-ipg="place-mguide-view-bottom-like">
            <em class="leftPart">
              <i class="icon"></i>
            </em>
            <em class="rightPart">
              <span class="text fontYaHei">喜欢<i>132</i></span>
            </em>
			    </span>
        </div>

        <h1 class="mguide-title fontYaHei">
          评论<span id="mguideCommentTotal">(5条)</span></h1>
        <div class="mguide-comment" id="largeCommentBox">
          <textarea class="ui2_textarea autoHeight" onclick="ajaxlogin()"
                    style="height: 92px;"></textarea><textarea class="ui2_textarea" onclick="ajaxlogin()"

                                                               style="position: absolute; left: -9999em; overflow: auto;"></textarea>
          <div class="tips">
				<span class="buttons">
					<input type="button" class="ui_button" id="largeSubmit" value="发表"
                 data-bn-ipg="place-mguide-view-bottom-addComment">
				</span>
            <span class="number"><em class="current">0</em>/<span>500</span>字</span>
          </div>
        </div>
        <!--评论 start-->
        <ul class="comment-lists comment-listsLarge" id="largeComment">
          <li data-id="8795">
            <div class="intro-avatar">
              <a href="javascript:void(0)" data-bn-ipg="place-mguide-view-bottom-commentUserAvatar">
                <img src="http://pic4.qyer.com/avatar/007/91/64/87/1463638830/index/200?v=1463638831">
              </a>
            </div>
            <div class="comment-detail">
              <h2 class="title">
                <a href="//www.qyer.com/u/7916487" class="name" data-bn-ipg="place-mguide-view-bottom-commentUserName">蓝橙洗漱包</a>
                <em class="time">
                  2016-05-19 15:30
                </em>
              </h2>
              <p class="detail">
                蓝橙 以色忆情，邀请您体验独特旅行记忆。敬请关注Tmall“蓝橙旗舰店”或 旺裙: 九六九零四五零五七。
              </p>
              <div class="replyHandler">
						<span>
							<a href="javascript:void(0)" class="comment commentDisabled"
                 data-bn-ipg="place-mguide-view-bottom-commentReply">回复</a>
						</span>
                <span>
							<a href="javascript:void(0)" class="report" data-bn-ipg="place-mguide-view-bottom-report">举报</a>
						</span>
              </div>
            </div>
          </li>
          <li data-id="3230">
            <div class="intro-avatar">
              <a href="javascript:void(0)" data-bn-ipg="place-mguide-view-bottom-commentUserAvatar">
                <img src="http://pic1.qyer.com/avatar/002/72/84/66/index/200?v=">
              </a>
            </div>
            <div class="comment-detail">
              <h2 class="title">
                <a href="//www.qyer.com/u/2728466" class="name" data-bn-ipg="place-mguide-view-bottom-commentUserName">燊燊812</a>
                <em class="time">
                  2015-02-21 23:53
                </em>
              </h2>
              <p class="detail">
                好有感觉。
              </p>
              <div class="replyHandler">
						<span>
							<a href="javascript:void(0)" class="comment commentDisabled"
                 data-bn-ipg="place-mguide-view-bottom-commentReply">回复</a>
						</span>
                <span>
							<a href="javascript:void(0)" class="report" data-bn-ipg="place-mguide-view-bottom-report">举报</a>
						</span>
              </div>
            </div>
          </li>
          <li data-id="3136">
            <div class="intro-avatar">
              <a href="javascript:void(0)" data-bn-ipg="place-mguide-view-bottom-commentUserAvatar">
                <img src="http://pic3.qyer.com/avatar/002/66/52/99/index/200?v=">
              </a>
            </div>
            <div class="comment-detail">
              <h2 class="title">
                <a href="//www.qyer.com/u/2665299" class="name" data-bn-ipg="place-mguide-view-bottom-commentUserName">Pearl_Deng</a>
                <em class="time">
                  2015-02-13 10:18
                </em>
              </h2>
              <p class="detail">
                超级好的推荐啊~
              </p>
              <div class="replyHandler">
						<span>
							<a href="javascript:void(0)" class="comment commentDisabled"
                 data-bn-ipg="place-mguide-view-bottom-commentReply">回复</a>
						</span>
                <span>
							<a href="javascript:void(0)" class="report" data-bn-ipg="place-mguide-view-bottom-report">举报</a>
						</span>
              </div>
            </div>
          </li>
          <li data-id="3135">
            <div class="intro-avatar">
              <a href="javascript:void(0)" data-bn-ipg="place-mguide-view-bottom-commentUserAvatar">
                <img src="http://pic1.qyer.com/avatar/003/55/25/89/index/200?v=">
              </a>
            </div>
            <div class="comment-detail">
              <h2 class="title">
                <a href="//www.qyer.com/u/3552589" class="name" data-bn-ipg="place-mguide-view-bottom-commentUserName">128678swj</a>
                <em class="time">
                  2015-02-13 10:08
                </em>
              </h2>
              <p class="detail">
                我爱的玻璃之城，与奢侈品无关
              </p>
              <div class="replyHandler">
						<span>
							<a href="javascript:void(0)" class="comment commentDisabled"
                 data-bn-ipg="place-mguide-view-bottom-commentReply">回复</a>
						</span>
                <span>
							<a href="javascript:void(0)" class="report" data-bn-ipg="place-mguide-view-bottom-report">举报</a>
						</span>
              </div>
            </div>
          </li>
          <li data-id="2411">
            <div class="intro-avatar">
              <a href="javascript:void(0)" data-bn-ipg="place-mguide-view-bottom-commentUserAvatar">
                <img src="http://pic1.qyer.com/avatar/001/64/36/04/index/200?v=">
              </a>
            </div>
            <div class="comment-detail">
              <h2 class="title">
                <a href="//www.qyer.com/u/1643604" class="name" data-bn-ipg="place-mguide-view-bottom-commentUserName">Emily_在路上</a>
                <em class="time">
                  2015-01-01 23:53
                </em>
              </h2>
              <p class="detail">
                好有意境的游记~
              </p>
              <div class="replyHandler">
						<span>
							<a href="javascript:void(0)" class="comment commentDisabled"
                 data-bn-ipg="place-mguide-view-bottom-commentReply">回复</a>
						</span>
                <span>
							<a href="javascript:void(0)" class="report" data-bn-ipg="place-mguide-view-bottom-report">举报</a>
						</span>
              </div>
            </div>
          </li>
        </ul>
        <!--评论 end-->
      </div>
      <div class="mguide-right">
        <!--new创建微锦囊-->
        <div class="mguide-rightWrap">
          <div class="mguide-create">
            <div class="mgCreate">
              <p class="viewMore">
                <a href="/mguide/introduction/" target="_blank" data-bn-ipg="place-mguide-view-right-more">
                  了解更多&gt;&gt;
                </a>
              </p>
              <p class="createBtn">
                <input type="button" class="ui_buttonA" value="创建微锦囊" onclick="window.open('/mguide/add')"
                       data-bn-ipg="place-mguide-view-right-add">
              </p>
            </div>
          </div>
        </div>
        <div class="mguide-rightWrap">
          <div class="mguide-recommend">
            <h2 class="fontYaHei">
              132人喜欢这个微锦囊
            </h2>
            <div class="avatars">
              <a href="//www.qyer.com/u/8686135" data-bn-ipg="place-mguide-view-right-likeUserAvatar" data-uid="8686135"
                 target="_blank">
                <img src="//static.qyer.com/images/user2/avatar/big5.png">
              </a>
              <a href="//www.qyer.com/u/8715015" data-bn-ipg="place-mguide-view-right-likeUserAvatar" data-uid="8715015"
                 target="_blank">
                <img src="//static.qyer.com/images/user2/avatar/big1.png">
              </a>
              <a href="//www.qyer.com/u/3347543" data-bn-ipg="place-mguide-view-right-likeUserAvatar" data-uid="3347543"
                 target="_blank">
                <img src="http://pic2.qyer.com/avatar/003/34/75/43/1485230047/index/200?v=1485230047">
              </a>
              <a href="//www.qyer.com/u/7112125" data-bn-ipg="place-mguide-view-right-likeUserAvatar" data-uid="7112125"
                 target="_blank">
                <img src="http://pic.qyer.com/avatar/007/11/21/25/1474602030/index/200?v=1474602030">
              </a>
              <a href="//www.qyer.com/u/3169142" data-bn-ipg="place-mguide-view-right-likeUserAvatar" data-uid="3169142"
                 target="_blank">
                <img src="http://pic1.qyer.com/avatar/003/16/91/42/index/200?v=">
              </a>
              <a href="//www.qyer.com/u/8369003" data-bn-ipg="place-mguide-view-right-likeUserAvatar" data-uid="8369003"
                 target="_blank">
                <img src="//static.qyer.com/images/user2/avatar/big1.png">
              </a>
              <a href="//www.qyer.com/u/6733024" data-bn-ipg="place-mguide-view-right-likeUserAvatar" data-uid="6733024"
                 target="_blank">
                <img src="//static.qyer.com/images/user2/avatar/big1.png">
              </a>
              <a href="//www.qyer.com/u/8158379" data-bn-ipg="place-mguide-view-right-likeUserAvatar" data-uid="8158379"
                 target="_blank">
                <img src="//static.qyer.com/images/user2/avatar/big5.png">
              </a>
              <a href="//www.qyer.com/u/873553" data-bn-ipg="place-mguide-view-right-likeUserAvatar" data-uid="873553"
                 target="_blank">
                <img src="//static.qyer.com/images/user2/avatar/big1.png">
              </a>
              <a href="//www.qyer.com/u/7164671" data-bn-ipg="place-mguide-view-right-likeUserAvatar" data-uid="7164671"
                 target="_blank">
                <img src="http://pic1.qyer.com/avatar/007/16/46/71/index/200?v=1450182956">
              </a>
            </div>
          </div>
        </div>
        <div class="mguide-rightWrap">
          <h2 class="fontYaHei">
            关于作者
          </h2>
          <div class="mguide-author">
            <p>
              <a href="">
                <img src="http://pic3.qyer.com/avatar/001/18/01/05/1485969837/index/200?v=1485969837">
                <span class="name fontYaHei"><em>微沫</em></span>
                <span class="level">等级： 版主</span>
                <span class="beento">去过：43个国家，191个城市</span>
              </a>
            </p>
            <p class="belowpart">
              <span class="relation follow" data-id="1180105" data-bn-ipg="place-mguide-view-right-authorFollow"></span>
            </p>
          </div>
        </div>
        <!--
            <{include file='mguide/mguide-detail-map.html'}>
            -->
        <div class="mguide-rightWrap">
          <div class="mguide-involve">
            <h2 class="fontYaHei">
              提及的目的地
            </h2>
            <ul>
              <li>
                <a href="//place.qyer.com/china/" data-bn-ipg="place-mguide-view-right-relatePlace">
                  <img src="https://pic.qyer.com/album/149/5e/2015637/index/80" class="themeImg">
                  <span class="title">中国</span>
                  <em class="comment">630条点评</em>
                </a>
              </li>
              <li>
                <a href="//place.qyer.com/hong-kong/" data-bn-ipg="place-mguide-view-right-relatePlace">
                  <img src="https://pic.qyer.com/album/user/370/89/Qk5VShMOaA/index/80" class="themeImg">
                  <span class="title">香港</span>
                  <em class="comment">2121条点评</em>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="mguide-rightWrap">
          <div class="mguide-involve">
            <h2 class="fontYaHei">
              相关微锦囊
            </h2>
            <ul class="mguide-involve">
              <li>
                <a href="/mguide/828" target="_blank" data-bn-ipg="place-mguide-view-relatedMguide-828">
                  <img src="https://pic.qyer.com/album/user/716/29/RkhTQBMEZA/index/80" class="themeImg">
                  <span class="title2">追寻TVB的足迹</span>
                  <em class="avatar">
                    <img src="http://pic3.qyer.com/avatar/001/18/66/53/1484102385/index/48?v=1484102385">
                    JOEYlulu
                  </em>
                </a>
              </li>
              <li>
                <a href="/mguide/855" target="_blank" data-bn-ipg="place-mguide-view-relatedMguide-855">
                  <img src="https://pic.qyer.com/album/153/65/1841653/index/80" class="themeImg">
                  <span class="title2">细数香港值得一去的主题公园</span>
                  <em class="avatar">
                    <img src="http://pic4.qyer.com/avatar/000/71/29/84/index/48?v=1397793339">
                    北京老胖
                  </em>
                </a>
              </li>
              <li>
                <a href="/mguide/1367" target="_blank" data-bn-ipg="place-mguide-view-relatedMguide-1367">
                  <img src="https://pic1.qyer.com/album/user/767/42/Rk9SRhgOYQ/index/80" class="themeImg">
                  <span class="title2">《变形金刚4》香港外景地大搜集</span>
                  <em class="avatar">
                    <img src="http://pic4.qyer.com/avatar/000/71/29/84/index/48?v=1397793339">
                    北京老胖
                  </em>
                </a>
              </li>
              <li>
                <a href="/mguide/856" target="_blank" data-bn-ipg="place-mguide-view-relatedMguide-856">
                  <img src="https://pic1.qyer.com/album/user/587/82/REFSShgCYQ/index/80" class="themeImg">
                  <span class="title2">慢游香港离岛：长洲+美食</span>
                  <em class="avatar">
                    <img src="//static.qyer.com/images/user2/avatar/small2.png">
                    wormsmiling
                  </em>
                </a>
              </li>
              <li>
                <a href="/mguide/853" target="_blank" data-bn-ipg="place-mguide-view-relatedMguide-853">
                  <img src="https://pic.qyer.com/album/1d4/ae/1841646/index/80" class="themeImg">
                  <span class="title2">香港有趣的3家博物馆</span>
                  <em class="avatar">
                    <img src="//static.qyer.com/images/user2/avatar/small3.png">
                    Megan
                  </em>
                </a>
              </li>
              <li>
                <a href="/mguide/854" target="_blank" data-bn-ipg="place-mguide-view-relatedMguide-854">
                  <img src="https://pic1.qyer.com/album/101/ee/1841649/index/80" class="themeImg">
                  <span class="title2">香港离岛的渔村风情</span>
                  <em class="avatar">
                    <img src="//static.qyer.com/images/user2/avatar/small3.png">
                    Megan
                  </em>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        travel: {
          img: '/static/images/travels/travel1.jpg',
          author: {
            author: '微沫',
            authorImg: '/static/images/travels/author1.jpg',
            level: '4'
          },
          title: '如果在香港遇见了你',
          lickCout: '132',
          abstract: '每次在夜里降落这座城市，满目灯火如繁星闪耀，也会觉得这片水泥森林好像是个浪漫的地方。世人皆语此地纸醉金迷，欲望杂生，但也总有一些小细节会让人看到简单爱情的影子。所以，如果有一天，你在香港遇见了TA….',
          scenic: ['星光大道', '维多利亚港'],
          parts: [
            {
              title: '香港有轨电车',
              img: '/static/images/travels/travel content2 710x360.jpg',
              content: '我们会把它称作“叮叮车”，因为每当到站的时候，都会发出叮叮叮的声音。叮叮车横贯香港最繁华的港岛北部地区，2.3港币就可以从港岛西一路晃到东。我最喜欢的路段是从上环的西港城到铜锣湾的跑马地，大概需要45分钟。如果时间充裕的话，建议从更西边的西环（屈地街站/水街站/西边街站）上车，可以看到香港更市井的一面。上车前记得看清楚车头上写的终点站，一定要上二层呀，车头或者车尾都是好位置，打开窗户，感受这座城市难得一见的慢节奏。'
            },
            {
              title: '渡船小轮',
              img: '/static/images/travels/travel content1 710x360.jpg',
              content: '天星小轮与叮叮车一样拥有百年以上的悠久历史，是连接九龙和港岛最便宜的交通工具。相比跨海地铁和海底隧道巴士，更是可以饱览维多利亚港的美丽风光。吹着海风，晃晃悠悠的看风景，也不失为一个惬意的选择。'
            }
          ]

        }
      }
    }
  }
</script>
<style scoped>
  .travel-detail {
    text-align: left;
  }

  .travel-detail a {
    color: #555555;
  }

  .mguide-wrap {
    width: 980px;
    zoom: 1;
    margin-left: auto;
    margin-right: auto;
    padding: 0px;
  }

  .mguide-left {
    float: left;
    width: 710px;
    overflow: hidden;
    zoom: 1;
  }

  .mguide-avatar .avatar {
    display: block;
    border-radius: 50%;
    width: 130px;
    height: 130px;
    background: #f5f5f5;
    overflow: hidden;
    margin: 0px auto;
  }
  .mguide-avatar .avatar img {
    border-radius: 50%;
    width: 120px;
    height: 120px;
    margin-top: 5px;
  }
  .mguide-avatar .title {
    line-height: 40px;
    height: 40px;
    overflow: hidden;
  }

  .mguide-detail {
    background: #fff;
    overflow: hidden;
    padding-bottom: 20px;
    position: relative;
  }

  .detail-imgWrap {
    position: relative;
    z-index: 1;
    height: 360px;
    overflow: hidden;
  }

  .mguide-avatar {
    text-align: center;
    position: absolute;
    width: 180px;
    height: 160px;
    left: 50%;
    top: 360px;
    margin: -64px 0 0px -90px;
    z-index: 2;
  }

  .detail-h1 {
    font-size: 40px;
    text-align: center;
    margin: 110px 29px 0px 29px;
    font-weight: 700;
    font-family: "Helvetica Neue", Helvetica, Arial, "Hiragino Sans GB", "Microsoft YaHei", \9ED1\4F53, \5b8b\4f53, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .mguide-like {
    height: 82px;
    margin: 30px 0px 20px 0px;
    text-align: center;
  }

  .detail-content {
    padding: 44px 29px;
    font-size: 18px;
    color: #323232;
    line-height: 30px;
    position: relative;
    font-family: "Helvetica Neue", Helvetica, Arial, "Hiragino Sans GB", "Microsoft YaHei", \9ED1\4F53, \5b8b\4f53, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .mguide-likeBtn, .mguide-likeBtnDone, .mguide-editBtn {
    display: inline-block;
    height: 34px;
    border: solid 1px #ededed;
    min-width: 163px;
    border-radius: 34px;
    cursor: pointer;
    background: #fff;
  }

  .mguide-likeBtn .leftPart, .mguide-likeBtnDone .leftPart, .mguide-editBtn .leftPart {
    float: left;
    width: 50px;
    height: 34px;
    text-align: center;
    background: url(/static/images/icon/shares.png) no-repeat 47px -286px;
  }

  .mguide-likeBtn .icon {
    width: 20px;
    height: 18px;
    display: inline-block;
    background: url(/static/images/icon/shares.png) no-repeat -72px -227px;
    margin: 8px 0 0;
  }

  .mguide-likeBtn .text, .mguide-likeBtnDone .text, .mguide-editBtn .text {
    display: block;
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
    height: 34px;
    line-height: 34px;
    font-size: 16px;
    padding: 0 5px 0 5px;
  }

  .mguide-likeBtn .rightPart, .mguide-likeBtnDone .rightPart {
    display: block;
    height: 34px;
    text-align: center;
    overflow: hidden;
    position: relative;
    margin-left: 51px;
    margin-left: 0px;
  }

  .detail-content {
    padding: 44px 29px;
    font-size: 18px;
    color: #323232;
    line-height: 30px;
    position: relative;
    font-family: "Helvetica Neue", Helvetica, Arial, "Hiragino Sans GB", "Microsoft YaHei", \9ED1\4F53, \5b8b\4f53, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .detail-content:before {
    width: 32px;
    height: 28px;
    background: url(/static/images/icon/icons.png) no-repeat left -572px;
    position: absolute;
    left: 30px;
    top: 3px;
    content: "";
  }

  .detail-content:after {
    width: 32px;
    height: 28px;
    background: url(/static/images/icon/icons.png) no-repeat -111px -572px;
    position: absolute;
    right: 30px;
    bottom: 0px;
    content: "";
  }

  .detail-tags {
    margin: 10px 30px;
    overflow: hidden;
    position: relative;
    height: 18px;
  }

  .detail-tags em {
    float: left;
    color: #636363;
  }

  .detail-tags span {
    color: #959595;
    float: left;
    margin-right: 7px;
  }

  .mguide-empty {
    height: 10px;
    overflow: hidden;
    zoom: 1;
    clear: both;
  }

  .mguide-list {
    overflow: hidden;
    margin-bottom: 10px;
    background: #fff;
  }

  .list-title {
    padding-top: 20px;
    height: 89px;
    overflow: hidden;
    border: solid 1px #ececec;
    border-bottom: none;
  }

  .title-detail a {
    font-family: "Helvetica Neue", Helvetica, Arial, "Hiragino Sans GB", "Microsoft YaHei", \9ED1\4F53, \5b8b\4f53, sans-serif;
    color: #3f9f5f;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    display: block;
    height: 36px;
  }

  .list-slider {
    height: 360px;
    width: 710px;
    position: relative;
    overflow: hidden;
  }

  .slider-intro {
    padding: 22px 29px 20px 29px;
    border: solid 1px #ececec;
    border-top: none;
  }

  .intro-detail .detail {
    font-size: 18px;
    color: #636363;
    line-height: 30px;
    margin-top: 10px;
    font-family: "Helvetica Neue", Helvetica, Arial, "Hiragino Sans GB", "Microsoft YaHei", \9ED1\4F53, \5b8b\4f53, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .mguide-right {
    margin-left: 735px;
    overflow: hidden;
  }

  .mguide-right .mguide-rightWrap {
    border-bottom: solid 1px #ebeaea;
  }

  .mguide-create {
    padding-bottom: 30px;
  }

  .mguide-create .mgCreate {
    border: solid 3px #ececec;
    height: 192px;
    background: url(http://mguide.qyerstatic.com/project/images/mguideDetail/mg-createBg.gif) no-repeat center top;
  }
  .detail-imgWrap .waterMark {
    position: absolute;
    left: 50%;
    top: 50%;
    margin: -42px 0 0 -219px;
    width: 438px;
    height: 85px;
    z-index: 10;
  }
  .mguide-create .viewMore {
    padding: 76px 0 60px 17px;
    line-height: 12px;
  }

  .mguide-create .createBtn {
    text-align: center;
  }

  .mguide-recommend {
    padding: 0 0 10px;
    overflow: hidden;
  }

  .mguide-right h2 {
    font-size: 18px;
    color: #636363;
    height: 68px;
    line-height: 80px;
  }

  .mguide-recommend div a {
    float: left;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 11px;
    margin-bottom: 20px;
    overflow: hidden;
  }

  .mguide-recommend div img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }

  .mguide-right h2 {
    font-size: 18px;
    color: #636363;
    height: 68px;
    line-height: 80px;
  }

  .mguide-author a {
    display: block;
    overflow: hidden;
  }

  .mguide-author img {
    float: left;
    border-radius: 50%;
    width: 60px;
    height: 60px;
  }

  .mguide-author .name {
    display: block;
    color: #323232;
    font-size: 14px;
  }

  .mguide-author .name em {
    display: inline-block;
    max-width: 140px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .mguide-author .level {
    color: #0073b6;
    padding-top: 2px;
  }

  .mguide-author .beento {
    color: #636363;
    padding-top: 3px;
  }

  .mguide-author a span {
    display: block;
    margin-left: 75px;
  }
  .mguide-author .belowpart {
    padding: 15px 0 0 0;
  }
  .mguide-author .belowpart .relation {
    background: url(/static/images/icon/btns.png) no-repeat;
  }
  .mguide-author .relation {
    display: block;
    height: 32px;
    line-height: 32px;
    border-radius: 3px;
    cursor: pointer;
    text-align: center;
    text-indent: 20px;
    font-size: 14px;
    clear: both;
  }
  .mguide-involve a {
    display: block;
    height: 80px;
    overflow: hidden;
    position: relative;
  }
  .mguide-involve li {
    margin-bottom: 20px;
  }
  .mguide-involve .themeImg {
    float: left;
    display: block;
    width: 80px;
    height: 80px;
    margin-right: 20px;
  }
  .mguide-involve .comment {
    display: block;
    color: #636363;
  }
  .mguide-involve .avatar img {
    float: left;
    width: 32px;
    height: 32px;
    margin-right: 10px;
    border-radius: 50%;
  }
  .mguide-involve .avatar {
    height: 32px;
    display: block;
    line-height: 32px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #636363;
    margin-top: 10px;
  }
  .mguide-involve .title {
    display: block;
    max-height: 36px;
    overflow: hidden;
    line-height: 20px;
    padding: 7px 0;
    color: #323232;
    font-size: 14px;
  }
  .mguide-create .createBtn .ui_buttonA {
    width: 205px;
    height: 28px;
    padding: 0 15px;
    border: none;
    border-radius: 3px;
    overflow: visible;
    font-size: 14px;
    line-height: 28px;
    color: #fff;
    text-align: center;
    cursor: pointer;
  }
  .ui_buttonA {
    background-color: #1995dd;
  }
  fieldset, img {
    border: 0;
  }
  .title-detail span {
    color: #71b087;
    padding-left: 25px;
    float: left;
    height: 32px;
    margin-right: 10px;
  }
</style>
