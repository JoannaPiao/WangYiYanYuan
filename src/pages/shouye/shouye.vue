<template>
  <div id="container">
    <div class="homePositon">
      <div class="homeHead">
        <!--搜索-->
        <div class="headerInput">
          <a href="javascript:;"></a>
          <div class="input" @click="$router.push('/search')">
            <i class="iconfont icon-sousuo"></i>
            <span>搜索商品,共21893款好物</span>
          </div>
          <div class="login" @click="login">登录</div>
        </div>
        <!--美食酒水-->
        <div class="navScroll">
          <div class="scrollTab">
            <ul>
              <li class="active">推荐</li>
              <li>居家生活</li>
              <li>服饰鞋包</li>
              <li>美食酒水</li>
              <!--<li>个护清洁</li>
              <li>母婴亲子</li>
              <li>运动旅行</li>
              <li>数码电子</li>
              <li>礼品特色</li>-->
            </ul>
          </div>
          <div class="scrollList">
            <div class="listBox">
              <i class="iconfont icon-arrow"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--轮播图-->
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <a href="javascript:;">
            <img src="./images/01.jpg" alt="">
          </a>
        </div>
        <div class="swiper-slide">
          <a href="javascript:;">
            <img src="./images/02.jpg" alt="">
          </a>
        </div>
        <div class="swiper-slide">
          <a href="javascript:;">
            <img src="./images/03.jpg" alt="">
          </a>
        </div>
        <div class="swiper-slide">
          <a href="javascript:;">
            <img src="./images/05.png" alt="">
          </a>
        </div>
        <div class="swiper-slide">
          <a href="javascript:;">
            <img src="./images/06.jpg" alt="">
          </a>
        </div>
        <div class="swiper-slide">
          <a href="javascript:;">
            <img src="./images/07.jpg" alt="">
          </a>
        </div>
        <div class="swiper-slide">
          <a href="javascript:;">
            <img src="./images/08.jpg" alt="">
          </a>
        </div>
        <div class="swiper-slide">
          <a href="javascript:;">
            <img src="./images/10.png" alt="">
          </a>
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
    </div>
    <!--服务-->
    <div class="service">
      <ul class="service-list">
        <li class="service-listItem">
          <a href="javascript:;">
            <div class="service-img">
              <img src="http://yanxuan.nosdn.127.net/a03dd909803b9ac032eba58b7253a2f6.png" alt="">
              <span>网易自营品牌</span>
            </div>
          </a>
          <a href="javascript:;">
            <div class="service-img">
              <img src="http://yanxuan.nosdn.127.net/2d0402ffcd52b3ec3b07422681c42a89.png" alt="">
              <span>30天无忧退货</span>
            </div>

          </a>
          <a href="javascript:;">
            <div class="service-img">
              <img src="http://yanxuan.nosdn.127.net/eb61ee48e8942dbd1784c9ee75ebe955.png" alt="">
              <span>48小时快速退款</span>
            </div>

          </a>
        </li>
      </ul>
    </div>

    <!--列表盒子-->
    <div class="listBox">
      <ul class="listBox-style">
        <li class="listBox-Item">
          <a href="javascript:;">
            <img src="./images/box-1.png" alt="">
            <span>居家生活</span>
          </a>
        </li>
        <li class="listBox-Item">
          <a href="javascript:;">
            <img src="./images/box-2.png" alt="">
            <span>服饰鞋包</span>
          </a>
        </li>
        <li class="listBox-Item">
          <a href="javascript:;">
            <img src="./images/box-3.png" alt="">
            <span>美食酒水</span>
          </a>
        </li>
        <li class="listBox-Item">
          <a href="javascript:;">
            <img src="./images/box-4.png" alt="">
            <span>个护清洁</span>
          </a>
        </li>
        <li class="listBox-Item">
          <a href="javascript:;">
            <img src="./images/box-5.png" alt="">
            <span>限时购</span>
          </a>
        </li>
        <li class="listBox-Item">
          <a href="javascript:;">
            <img src="./images/box-6.png" alt="">
            <span>母婴亲子</span>
          </a>
        </li>
        <li class="listBox-Item">
          <a href="javascript:;">
            <img src="./images/box-7.png" alt="">
            <span>运动旅行</span>
          </a>
        </li>
        <li class="listBox-Item">
          <a href="javascript:;">
            <img src="./images/box-8.png" alt="">
            <span>数码家电</span>
          </a>
        </li>
        <li class="listBox-Item">
          <a href="javascript:;">
            <img src="./images/box-9.png" alt="">
            <span>礼品特色</span>
          </a>
        </li>
        <li class="listBox-Item">
          <a href="javascript:;">
            <img src="./images/box-10.png" alt="">
            <span>超级会员</span>
          </a>
        </li>
      </ul>
    </div>

    <!--新人专享-->
    <div class="newPeople">
      <div class="newPeople-title">
        <span>— 新人专享礼 —</span>
      </div>
      <a href="javascript:;">
        <div class="newPeople-left">
          <div class="newPeople-text">新人专享礼包</div>
          <img src="//yanxuan.nosdn.127.net/a020bed0783956f650abc016e386bead.png" alt="">
        </div>
      </a>
      <a href="javascript:;">
        <div class="newPeople-right">
          <a href="javascript:;">
            <div class="newPeople-right-top">
              <div class="newPeople-flex">
                <span class="fuli">福利社</span>
                <span class="todayPrice">今日特价</span>
              </div>
              <img
                src="http://yanxuan.nosdn.127.net/db0c0c4ba0663815d0c21bf0dc20252d.png?imageView&thumbnail=200x200&quality=75"
                alt="">
            </div>
          </a>
          <a href="javascript:;">
            <div class="newPeople-right-bottom">
              <div class="newPeople-flex">
                <span class="fuli">新人拼团</span>
                <span class="todayPrice">一元起包邮</span>
              </div>
              <img
                src="http://yanxuan.nosdn.127.net/327e6df33623c2b5a873045aff5626c7.png?imageView&thumbnail=200x200&quality=75"
                alt="">
            </div>
          </a>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.css'

  export default {
    mounted () {
      var mySwiper = new Swiper('.swiper-container', {
        loop: true, // 循环模式选项
        autoplay: true,
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
        }
      })
    },

    methods: {
      login () {
        this.$router.push({
          path: '/personal',
          query: {}
        })
      }

    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  /*@import "dist/css/swiper.min.css"*/
  #container
    height 5000px
    background-color #f4f4f4
    .homePositon
      background-color #fff
      position fixed
      top 0
      z-index 3
    .headerInput
      width 100%
      height 88px
      padding 16px 30px
      box-sizing border-box
      display flex
      align-items center
      a
        display inline-block
        background-image url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png)
        width 138px
        height 40px
        line-height 36px
        margin-right 20px
      .input
        width 442px
        height 56px
        background-color #efefef
        box-sizing border-box
        border-radius 7px
        padding-left 40px
        display flex
        align-items center
        .iconfont
          font-size 28px
          margin-right 10px
        span
          font-size 28px
          color #666
      .login
        display inline-block
        width 74px
        height 40px
        line-height 40px
        text-align center
        border 1px solid #b4282d
        margin-left 16px
        border-radius 7px
        color #b4282d
    .navScroll
      width 100%
      height 60px
      z-index 2
      .scrollTab
        padding 0 30px
        ul
          color #515151
          li
            height 60px
            line-height 60px
            float left
            font-size 28px
            padding 0 16px
            &.active
              color #b4282d
              border-bottom 4px solid #b4282d
      .scrollList
        float right
        width 160px
        height 60px
        padding-left 60px
        text-align center
        box-sizing border-box
        .listBox
          position relative
          width 100px
          height 60px
          text-align center
          .iconfont
            position absolute
            right 34px
            top 14px
            width 32px
            height 32px
            line-height 36px
            text-align center
            font-size 36px
            vertical-align middle
    .swiper-container
      width 100%
      margin-top 150px
      a
        display block
        img
          width 100%
    .service
      width 750px
      height 72px
      background-color #fff
      .service-list
        width 100%
        height 72px
        display flex
        flex-direction row
        justify-content center
        line-height 72px
        .service-listItem
          display flex
          .service-img
            height 72px
            line-height 72px
            text-align center
            margin-right 28px
            display flex
            justify-content center
            img
              margin-top 20px
              vertical-align middle
              width 32px
              height 32px
            span
              line-height 72px
              text-align center
              color #B4282D
              font-size 22px

    .listBox
      width 750px
      height 390px
      background-color #fff
      .listBox-style
        width 750px
        height 340px
        display flex
        flex-wrap wrap
        .listBox-Item
          width 110px
          height 156px
          margin 10px 20px 5px 20px
          img
            width 110px
            height 110px
          span
            width 110px
            height 36px
            color #333333
            display block
            margin-left 10px
            margin-top 10px

    .newPeople
      width 750px
      height 558px
      margin-top 20px
      background-color #fff
      .newPeople-title
        width 750px
        height 90px
        line-height 90px
        text-align center
        font-size 33px
        font-weight bold

      .newPeople-left
        width 343px
        height 434px
        background #F9E9CF
        float left
        text-align center
        margin-left 30px
      .newPeople-text
        width 309px
        height 78px
        font-size 33px
        padding-top 40px
        margin-left -30px
        color #333
      .newPeople-right
        width 343px
        height 438px
        font-weight bold
        float right

        margin-right 30px
        .newPeople-right-top
          width 343px
          height 215px
          margin-bottom 3px
          background #FBE2D3
          display flex
          .newPeople-flex
            width 120px
            height 43px
            .fuli
              width 313px
              height 48px
              font-size 33px
              color #333
              padding-top 25px
              margin-left 30px
              display block
            .todayPrice
              width 313px
              height 28px
              display block
              color #7F7F7F
              margin-left 30px
            img
              width 200px
              height 200px
              float right
        .newPeople-right-bottom
          width 343px
          height 215px
          background #FFECC2
          display flex
          .newPeople-flex
            width 120px
            height 43px
            .fuli
              width 313px
              height 48px
              font-size 33px
              color #333
              padding-top 25px
              margin-left 30px
              display block
            .todayPrice
              width 313px
              height 28px
              display block
              color #7F7F7F
              margin-left 30px
            img
              width 200px
              height 200px
              float right


</style>
