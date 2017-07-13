<template>
<div class="section interest">
  <div class="wrapper">
    <h2>猜你感兴趣</h2>
    <div class="interest-inner">
      <ul class="inline-ul">
        <li>
          <div class="interest-item">
            <div class="img">
              <a>
                <img src="/static/images/services1.jpg">
              </a>
            </div>
            <div class="info">
              <a  class="none-d-a" href="#" target="_blank">
                <div class="subtitle">
                  <p class="ellipsis">蒂卡普湖</p>
                  <p class="ellipsis"><span>Lake tekapo</span></p>
                </div>
                <div class="bottom">
                  <span class="fr">9826个人去过这里</span>
                  <span class="f14">新西兰城市</span>
                </div>
              </a>
            </div>

          </div>
        </li>
        <li>
          <div class="interest-item">
            <div class="img">
              <a>
                <img src="/static/images/services2.jpg">
              </a>
            </div>
            <div class="info">
              <a href="#" target="_blank">
                <div class="subtitle">
                  <p class="ellipsis">张弼士故居</p>
                  <p class="ellipsis"><span>Cheong Fatt Tze Mansion</span></p>
                </div>
                <div class="bottom">
                  <span class="fr">当地景点排名第4</span>
                  <span class="f14">槟城景点</span>
                </div>
              </a>
            </div>
          </div>
        </li>
        <li>
          <div class="interest-item">
            <div class="img">
              <a>
                <img src="/static/images/services3.jpg">
              </a>
            </div>
            <div class="info">
              <a href="#" target="_blank">
                <div class="subtitle"><p class="ellipsis">尼泊尔-在色彩的王国体味春天的气息</p></div>
                <div class="bottom"><span class="fr">10999人浏览过</span><span class="f14">薇薇安在旅途</span></div></a></div>
          </div>
        </li>
        <li>
          <div class="interest-item">
            <div class="img">
              <a>
                <img src="/static/images/services1.jpg">
              </a>
            </div>
            <div class="info">
              <a  class="none-d-a" href="#" target="_blank">
                <div class="subtitle">
                  <p class="ellipsis">蒂卡普湖</p>
                  <p class="ellipsis"><span>Lake tekapo</span></p>
                </div>
                <div class="bottom">
                  <span class="fr">9826个人去过这里</span>
                  <span class="f14">新西兰城市</span>
                </div>
              </a>
            </div>

          </div>
        </li>
      </ul>
      <ul class="inline-ul">
        <li>
          <div class="interest-item">
            <div class="img">
              <a>
                <img src="/static/images/services1.jpg">
              </a>
            </div>
            <div class="info">
              <a  class="none-d-a" href="#" target="_blank">
                <div class="subtitle">
                  <p class="ellipsis">蒂卡普湖</p>
                  <p class="ellipsis"><span>Lake tekapo</span></p>
                </div>
                <div class="bottom">
                  <span class="fr">9826个人去过这里</span>
                  <span class="f14">新西兰城市</span>
                </div>
              </a>
            </div>

          </div>
        </li>
        <li>
          <div class="interest-item">
            <div class="img">
              <a>
                <img src="/static/images/services2.jpg">
              </a>
            </div>
            <div class="info">
              <a href="#" target="_blank">
                <div class="subtitle">
                  <p class="ellipsis">张弼士故居</p>
                  <p class="ellipsis"><span>Cheong Fatt Tze Mansion</span></p>
                </div>
                <div class="bottom">
                  <span class="fr">当地景点排名第4</span>
                  <span class="f14">槟城景点</span>
                </div>
              </a>
            </div>
          </div>
        </li>
        <li>
          <div class="interest-item">
            <div class="img">
              <a>
                <img src="/static/images/services3.jpg">
              </a>
            </div>
            <div class="info">
              <a href="#" target="_blank">
                <div class="subtitle">
                  <p class="ellipsis">尼泊尔-在色彩的王国体味春天的气息</p></div>
                <div class="bottom"><span class="fr">10999人浏览过</span><span class="f14">薇薇安在旅途</span></div></a></div>
          </div>
        </li>
        <li>
          <div class="interest-item">
            <div class="img">
              <a>
                <img src="/static/images/services1.jpg">
              </a>
            </div>
            <div class="info">
              <a  class="none-d-a" href="#" target="_blank">
                <div class="subtitle">
                  <p class="ellipsis">蒂卡普湖</p>
                  <p class="ellipsis"><span>Lake tekapo</span></p>
                </div>
                <div class="bottom">
                  <span class="fr">9826个人去过这里</span>
                  <span class="f14">新西兰城市</span>
                </div>
              </a>
            </div>

          </div>
        </li>
      </ul>
    </div>
  </div>
</div>
</template>
<style>
  .section{
    padding: 2.5em 3em 0 3em;
  }

  .interest ul li .interest-item {
    border: 1px gainsboro solid;
    left: 0;
    width: 100%;
    height: 100%;
    -webkit-transition: all .2s ease-in-out;
    transition: all .2s ease-in-out;
  }


  .interest ul li .interest-item .info {
    border: 1px solid #ececec;
    border-top: 0;
    padding: 0 18px;
    height: 114px;
    line-height: 24px;
    overflow: hidden;
  }

  .interest ul li .interest-item p.ellipsis {
    color: #222222;
    font-size: 16px;
    font-weight: 550;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .interest ul li .interest-item .info .bottom {
    margin-top: 16px;
    height: 24px;
    line-height: 24px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: #636363;
  }

  .interest ul li .interest-item .info .bottom .fr {
    color: #959595;
  }

  .fr {
    float: right!important;
    font-size: 10px;
  }
  .f14 {
    color: #636363;
    max-width: 55%;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }


</style>
