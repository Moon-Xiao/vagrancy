<template>
  <div class="about">
    <about-banner></about-banner>
    <div class="about-store">
      <div class="content">
        <p>Vagrancy诞生在一群中国学生的宿舍里。</p>
        <p>那是2004年，当时刚开始在欧洲留学的方便面无意中听说瑞士某四星酒店有一欧元一晚的特价促销，便抱着试试看的心态登陆该酒店网站并成功预订酒店。这一回尝试让资讯的力量打动了方便面，他以自己搜集的信息为基础做了一个简单的网站和大家一起分享这些资讯。于是，Vagrancy便诞生了。</p>

        <p>从诞生那天起，Vagrancy就是属于全体Vagrancyer的。
        <p>刚开始，这个小小的网站只有方便面一个兼职员工，但它却吸引了众多热心的旅欧学生在这个平台上分享自己的旅行。分享和互助，从那时起就成为了Vagrancy的基因。通过口口相传，大家帮助大家，很快Vagrancy就在欧洲有了几万用户。2008年，Vagrancy的国内用户已经超过海外用户，Vagrancy也顺理成章地回到了国内。今天，已经有几千万中国旅行者在Vagrancy的陪伴下踏上旅途。</p>

        <p>10年间，有数不清的Vagrancyer为了她的成长做出了巨大的贡献，比如我们早期的版主和热心网友（ kukugerman，vaquita，uglyqueen，蝎之传说），其中有些人还变成了现在的Vagrancy员工；也有很多人在Vagrancy这个平台上让自己为大家所知，比如大勇和小花，小欣，谢谢和菜菜，千里和左手，花甲背包客，陈嘉和婷婷等等等等</p>

        <p> 10年后的今天，Vagrancy有了很多很多改变：获得了投资，有了新办公室，建立起了团队，有了更多的产品，更好看的界面以及更多的用户；</p>
        <p> 而更令我们欣喜的是，它依然能够幸运地坚守着那些不变：这里依然是千万Vagrancyer的家，我们的目标依然是希望通过这个平台让中国人的出境旅行更简单，让更多的Vagrancyer获得更美好的旅行体验，我们，依然是你们。</p>

        <p> 因为，Vagrancyer，就是Vagrancy的一切。</p>

        <p> 旅行，也是Vagrancy的一切。</p>

        <p> 我们和大家一样热爱旅行，我们相信：</p> <br/>
        <em>

        <p>无论你因为什么出发，旅行，都会让你的生命更加丰富多彩。</p>
        <p>下一个10年，Vagrancy愿意陪你继续体验整个世界的精彩。</p>
        <p>这样的旅途，永无穷尽。</p></em>
      </div>

    </div>
  </div>
</template>
<script>
  import AboutBanner from './DestinationsSet/DesitinationsBanner.vue'
  export default{
    components: {AboutBanner}
  }
</script>
<style>
  .about-store{
    background-color: #f8f8f8;
    padding: 50px;
  }
  .about-store .content {

    margin: 0 auto;
    color: #000000;
    text-align: left;
    width: 75%;
  }
  .about-store .content p{
    padding-top: 10px;
  }
  em {
    font-family: "Microsoft YaHei";
    font-weight: bold;
    color: #333333;
    font-size: 18px;
  }
</style>
