<template>
  <div class="advert-strip">
    <ul class="inline-ul">
      <li>
        <a href="/stores/ad"><img src="/static/images/adv1.jpg"/></a>
      </li>
      <li>
        <img src="/static/images/adv2.jpg"/>
      </li>
    </ul>


  </div>

</template>
<style>
  .advert-strip {
    background-color: ghostwhite;
    padding: 10px 0;
  }

  .advert-strip li{
    margin: 10px;
  }
  .advert-strip img{
    border-radius: 5px;
    box-shadow: 0 0 0 0 rgba(50, 50, 50, 0.22);
    transition: box-shadow 300ms;
  }
  .advert-strip img:hover{
    box-shadow: 0px 3px 15px 0px rgba(50, 50, 50, 0.22);
  }
</style>
