<template>
  <div class="scienc-header">
    <div class="qyer_head_crumb" style="padding-top: 10px;">
      <!-- 目的地面包屑 -->
      <span class="text drop">
          <a href="#">目的地</a>
          <em class="arrow" data="crumb_country"></em>
        </span>
      <span class="space">&gt;</span>
      <span class="text drop">
          <a href="#" data-bn-ipg="3-4">{{des.country}}</a>
          <em class="arrow" data="crumb_city"></em>
        </span>
      <span class="space">&gt;</span>
      <span class="text drop"><a href="#/">{{des.name}}</a>
          <em class="arrow" data="crumb_cate"></em></span>
      <em class="arrow" data="crumb_cate"></em>
      <span class="space"> : </span>
      <h1 class="current">{{des.name}}旅游攻略</h1>
      <div class="qyer_head_crumb_pulldown crumb_country" style="display: none;">
        <ul>
          <li><a href="#">中国 China</a></li>
          <li><a href="#">泰国 Thailand</a></li>
          <li><a href="#">日本 Japan</a></li>
          <li><a href="#">韩国 South Korea</a></li>
          <li><a href="#">马来西亚 Malaysia</a></li>
          <li><a href="#">新加坡 Singapore</a></li>
          <li><a href="#">柬埔寨 Cambodia</a></li>
          <li><a href="#">越南 Vietnam</a></li>
          <li><a href="#">印度尼西亚 Indonesia</a></li>
          <li><a href="#">菲律宾 Philippines</a></li>
        </ul>
        <ul>
          <li><a href="#">尼泊尔 Nepal</a></li>
          <li><a href="#">阿联酋 United Arab Emirates</a></li>
          <li><a href="#">斯里兰卡 Sri Lanka</a></li>
          <li><a href="#">马尔代夫 Maldives</a></li>
          <li><a href="#">印度 India</a></li>
          <li><a href="#">缅甸 Myanmar</a></li>
          <li><a href="#">老挝 Laos</a></li>
          <li><a href="#">伊朗 Iran</a></li>
          <li><a href="#">卡塔尔 Qatar</a></li>
          <li><a href="#">以色列 Israel</a></li>
        </ul>
        <div class="cb"></div>
        <p class="more"><a href="#">更多国家&gt;&gt;</a></p>
      </div>
      <div class="qyer_head_crumb_pulldown crumb_city" style="display: none;">
        <ul>
          <li><a href="#">德里 Delhi</a></li>
          <li><a href="#">阿格拉 Agra </a></li>
          <li><a href="#">斋普尔 Jaipur</a></li>
          <li><a href="#">瓦拉纳西 Varanasi</a></li>
          <li><a href="#">孟买 Mumbai</a></li>
          <li><a href="#">焦特布尔 Jodhpur</a></li>
          <li><a href="#">乌代布尔 Udaipur</a></li>
          <li><a href="#">加尔各答 Kolkata</a></li>
          <li><a href="#">新德里 New Delhi</a></li>
          <li><a href="#">杰伊瑟尔梅尔 Jaisalmer</a></li>
        </ul>
        <ul>
          <li><a href="#">克久拉霍 Khajuraho</a></li>
          <li><a href="#">阿姆利则 Amritsar</a></li>
          <li><a href="#">班加罗尔 Bangalore</a></li>
          <li><a href="#">金奈 Chennai</a></li>
          <li><a href="#">科钦 Cochin</a></li>
          <li><a href="#">果阿 Goa</a></li>
          <li><a href="#">菩提伽耶 Bodhgaya</a></li>
          <li><a href="#">占西 Jhansi</a></li>
          <li><a href="#">海德拉巴 Hyderabad</a></li>
          <li><a href="#">大吉岭 Darjeeling</a></li>
        </ul>
        <div class="cb"></div>
        <p class="more"><a href="#">更多城市&gt;&gt;</a></p>
      </div>
      <div class="qyer_head_crumb_pulldown crumb_cate" style="width: 160px; display: none;">
        <ul>
          <li><a href="#">瓦拉纳西景点</a>
          </li>
          <li><a href="#">瓦拉纳西体验</a>
          </li>
          <li><a href="#">瓦拉纳西交通</a></li>
          <li><a href="#">瓦拉纳西住宿</a></li>
          <li><a href="#">瓦拉纳西购物</a></li>
          <li><a href="#">瓦拉纳西美食</a></li>
        </ul>
        <div class="cb"></div>

      </div>
    </div>
    <div class="plcTopBar clearfix" style="padding-top: 20px;">
      <!-- 国家 区域 城市 头部信息 公共 -->
      <a :href="desHref" class="plcTopBarL" style=" float: left;">
        <p class="plcTopBarNameEn"> {{des.ename}}</p>
        <p class="plcTopBarNameCn fontYaHei"> {{des.name}}</p>
      </a>
      <div class="plcTopBarR" style=" float: right;">
        <div class="plcTopBarWeather">
          <a class="weatherLink" href="#">
            <span class="cityName">{{des.ename}}天气</span>
            <img src="/static/images/des/weatherIcon-g-02.png" width="28" height="26" alt=""
                 class="icon">夜间晴　26℃~32℃
          </a>
        </div>
        <div class="plcTopBarStat fontYaHei">
          <em>{{des.wentCount}}</em>人去过这里,
          <em>{{des.wantgoCount}}</em>人想去这里
        </div>
      </div>
    </div>
  </div>

</template>
<script>
  export default {
    props: {
      desHref: String,
      des: Object
    }
  }
</script>
<style>
  .scienc-header {
    text-align: left;
    padding: 10px 120px;
  }

  .qyer_head_crumb .current {
    display: inline;
    font-size: 14px;
    font-weight: 400;
  }

  .plcTopBarL p {
    font-size: 36px;
    line-height: 1.055555;
    color: #147850;
    word-break: break-all;
  }

  .plcTopBarStat {
    margin-top: 15px;
    font-size: 16px;
    line-height: 1.125;
    color: #959595;
  }

  .plcTopBarStat em {
    color: #ec971f;
    font-style: normal;
  }
</style>
