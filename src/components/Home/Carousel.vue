<template>

	<div id="mainbanner">
		<b-carousel controls indicators :interval="3000" background="#ABABAB">

			<!-- Text slides -->
			<b-carousel-slide caption="First slide" text="Nulla vitae elit libero, a pharetra augue mollis interdum." img="./static/images/banner3.jpg">
			</b-carousel-slide>

			<!-- Slides with custom text -->
			<b-carousel-slide img="./static/images/banner2.jpg">
				Hello world
			</b-carousel-slide>
			<!-- Slides with image -->
			<b-carousel-slide img="./static/images/banner4.jpg">
			</b-carousel-slide>

		</b-carousel>
		<!-- carousel.vue -->
		<div id="search" class="kd-tourform" style="transform: translateY(0px);">
			<div class="search-wrapper">
				<div class="tab">
					<a v-for="(item, index) in searchItems" @click="selectedIndex=index+1" :class="{active:selectedIndex==index+1}">
						<i :class="'fa fa-'+item.icon"></i>
						<span>{{item.name}}</span>
					</a>
				</div>
				<div class="panel">
					<!-- <em class="arrow"></em> -->
					<div class="panel-inner" style="position: relative;overflow: hidden;">
						<div class="panel-cont">
							<div v-if="selectedIndex==1" class="place place_search_box">
								<div class="input-control">
									<form class="place_search_form" target="_blank" method="post">
										<input class="txt focus placesearch_txt" type="text" placeholder="荷兰" autofocus="" autocomplete="off">
										<button class="btn" type="submit" data-bn-ipg="index-top-place-search">搜索</button>
									</form>
								</div>
							</div>
							<div v-else-if="selectedIndex==2" class="plan">
								<p style="margin-bottom:5px;fout:12px/1.5 Helvetica Neue,Helvetica,Arial;font-size: 24px;font-family: Hiragino Sans GB,Microsoft YaHei,SimHei,SimSun,sans-serif;color: #fff;">
                  一分钟搞定你的攻略
                </p>
								<a class="link" ><i class="fa fa-plus"></i> 创建行程</a>
								<a class="link custom" style="background: linear-gradient(135deg,#44abe7,#0886ce);"><i class="fa fa-plus"></i> 免费定制</a>
							</div>
							<div v-else-if="selectedIndex==3" class="z z_search_box">
								<div class="input-control">
									<form class="z_search_form" target="_blank" method="get">
										<input type="hidden" name="_type" value="search">
										<input type="hidden" name="action" value="list">
										<input type="hidden" name="zfrom" value="header">
										<input class="txt focus zsearch_txt" type="text" placeholder="搜索目的地/折扣类型/关键词" autocomplete="off" name="keyword">
										<!-- <a class="btn placesearch_link" href="//www.qyer.com">搜索</a> -->
										<button class="btn" type="submit" data-bn-ipg="index-top-place-lastminute">搜索</button>
									</form>
								</div>
							</div>
							<div v-else-if="selectedIndex==4" class="hotel hotel_search_box">
								<div class="input-control pr">
									<form class="hotel_search_form" action="/" target="_blank">
										<input class="txt focus hotelsearch_txt" type="text" placeholder="请输入目的地/酒店名">
										<input class="txt date_txt date_in js-datepicker hasDatepicker" data-type="checkin" readonly="readonly" type="text" name="checkin" placeholder="入住时间" >
										<input class="txt date_txt date_out js-datepicker hasDatepicker" data-type="checkout" readonly="readonly" type="text" name="checkout" placeholder="退房时间" >
										<button target="_blank" class="btn hotel_btn" type="submit">搜索酒店</button>
									</form>
								</div>
							</div>
						</div>
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
        searchItems: [
          {
            name: '目的地',
            icon: 'map-marker'
          },
          {
            name: '做行程',
            icon: 'calendar-check-o'
          },
          {
            name: '买折扣',
            icon: 'level-down'
          },
          {
            name: '酒店',
            icon: 'building'
          }
        ],
        selectedIndex: 1
      }
    }
  }
</script>

<style>

	#mainbanner {
		font-family: Arial;
		position: relative;
		width: 100%;
		min-width: 800px;
	}

	.carousel-item {
		height: 420px;
	}

	.kd-tourform#search {
		position: absolute;
		bottom: 30px;
		left: 25%;
		width: 42%;
		height: 165px;
	}

	.search-wrapper {
		/*padding-top: 10px;*/
		border-radius: 4px;
		background: rgba(0, 0, 0, .5);
		overflow: hidden;
	}

	.search-wrapper .tab {
		height: 40px;
	}

	.search-wrapper .tab a {
    padding-top: 10px;
		float: left!important;
		_display: inline;
		width: 25%;
    line-height: 30px;
		font-size: 19px;
		font-family:  'Hiragino Sans GB', 'Microsoft YaHei', SimHei, SimSun, sans-serif;
		color: #fff;
		font-weight: 700;
		text-align: center;
		-webkit-transition: text-shadow .2s ease-in-out;
		transition: text-shadow .2s ease-in-out;
	}

	.search-wrapper .tab a:hover {

		color: #fff;
		text-shadow: 0 0 16px hsla(0, 0%, 100%, .5);
	}
	.search-wrapper .tab .active{
		color:  #ec971f;
	}
	.search-wrapper .tab a.active:hover{
		color: #ec971f;
	}
	.search-wrapper .panel {
		padding: 10px;
	}
	.search-wrapper .panel {
		width: 100%;
		text-align:center
	}
	.search-wrapper .panel .panel-cont .input-control .txt {
		float: left!important;
		_display: inline;
		border-radius: 3px 0 0 3px;
		padding: 0 10px;
		width: 80%;
		height: 38px;
		line-height: 38px;
		border: 1px solid transparent;
		border-right: 0;
		color: #323232;
		font-size: 16px;
		font-family: 'Hiragino Sans GB', 'Microsoft YaHei', SimHei, SimSun, sans-serif;
	}
	.search-wrapper .panel .panel-cont .input-control .hotelsearch_txt{
		border-radius: 3px 0 0 3px;
		width: 35%;
		margin-right: 3px;
	}
	.search-wrapper .panel .panel-cont .input-control .date_in {
		border-radius: 0px;
		width: 22%;
		margin-right: 3px;
	}
	.search-wrapper .panel .panel-cont .input-control .date_out{
		border-radius: 0 3px 3px 0;
		width: 22%;
		margin-right: 3px;
	}
	.search-wrapper .panel .panel-cont .input-control .focus:focus {
		border-color:#10A251;
	}
	.search-wrapper .panel .panel-cont .input-control .btn {
		float: left!important;
		_display: inline;
		border-radius: 0 3px 3px 0;
		border: 0;
		width: 90px;
		height: 38px;
		/*line-height: 38px;*/
		text-align: center;
		text-decoration: none!important;
		font-size: 16px;
		font-family: Hiragino Sans GB, Microsoft YaHei, SimHei, SimSun, sans-serif;
		color: #fff;
		font-weight: 700;
		background: #2dd382;
		background: -webkit-linear-gradient(315deg, #2ed685, #10a251);
		background: linear-gradient(135deg, #2ed685, #10a251);
		cursor: pointer;
	}
  .panel .panel-cont .plan .link {
     display: inline-block;
     margin: 6px 10px;
     width: 140px;
     height: 40px;
     line-height: 40px;
     color: #fff;
     text-align: center;
     font-weight: 700;
     font-size: 18px;
     font-family: Hiragino Sans GB,Microsoft YaHei,SimHei,SimSun,sans-serif;
     border-radius: 3px;
     background: #2dd382;
     background: -webkit-linear-gradient(315deg,#2ed685,#10a251);
     background: linear-gradient(135deg,#2ed685,#10a251);
   }
</style>
