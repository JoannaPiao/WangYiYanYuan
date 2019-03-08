<template>
  <div id="container">
    <div class="homePositon">
      <div class="homeHead">
        <div class="headerInput">
          <a href="javascript:;"></a>
          <div class="input">
            <i class="iconfont icon-sousuo"></i>
            <span>搜索商品,共21893款好物</span>
          </div>
          <div class="login">登录</div>
        </div>
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
  </div>
</template>

<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.css'

  export default {
    mounted () {
      var mySwiper = new Swiper('.swiper-container', {
        loop: true, // 循环模式选项
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
        }
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  /*@import "dist/css/swiper.min.css"*/
  #container
    height 5000px
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
      height 300px
      margin-top 150px
      a
        display block
        img
          width 100%


</style>
