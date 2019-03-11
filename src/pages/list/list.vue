<template>
  <div id="container">
    <!--头部-->
    <div class="headerInput">
      <div class="input" @click="$router.push('/search')">
        <i class="iconfont icon-sousuo"></i>
        <span>搜索商品,共21893款好物</span>
      </div>
    </div>
    <div class="list">
      <!--左边list-->
      <div class="list-left">
        <a href="javascript:;">推荐专区</a>
        <a href="javascript:;">春季专区</a>
        <a href="javascript:;">爆品专区</a>
        <a href="javascript:;">新品专区</a>
      </div>
      <!--右边list-->
      <div class="list-right">
        <div class="list-wrap">
          <div class="list-pic"
               style="background-image:url(http://yanxuan.nosdn.127.net/d723607e0cbb0c4a11c9396612c71d9b.jpg?imageView&thumbnail=0x196&quality=75);">
          </div>
          <div class="list-img">
            <a href="javascript:;">
              <img src="./images/list1.png" alt="">
              <span>每日特惠好货</span>
            </a>
            <a href="javascript:;">
              <img src="./images/list2.png" alt="">
              <span>美食三件7.5折</span>
            </a>
            <a href="javascript:;">
              <img src="./images/list3.png" alt="">
              <span>天天315</span>
            </a>
            <a href="javascript:;">
              <img src="./images/list4.png" alt="">
              <span>每日特惠好货</span>
            </a>
            <a href="javascript:;">
              <img src="./images/list4.png" alt="">
              <span>每日特惠好货</span>
            </a>

          </div>
        </div>
      </div>
    </div>


  </div>
</template>

<script>
  export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  #container
    height 5000px
    background-color #fff
    /*头部*/
    .headerInput
      width 100%
      height 88px
      padding 16px 30px
      box-sizing border-box
      display flex
      align-items center
      text-align center
      .input
        width 750px
        height 56px
        background-color #efefef
        box-sizing border-box
        border-radius 7px
        padding-left 40px
        display flex
        align-items center
        justify-content center
        .iconfont
          font-size 30px
          margin-right 10px
        span
          font-size 28px
          color #666

    .list
      display flex
      .list-left
        width 162px
        height 1148px
        /*background pink*/
        display flex
        flex-direction column
        text-align center
        justify-content space-around
        a
          width 162px
          height 50px
          line-height 50px
          color #ab2b2b
          font-size 28px
          border-left 6px solid #ab2b2b
      .list-right
        position relative
        width 588px
        height 1148px
        /*background deeppink*/
        .list-wrap
          position absolute
          left: 0
          bottom: 0
          right: 0
          top: 0
          margin auto
          width 528px
          height 1088px
          background-color #fff
          .list-pic
            width 528px
            height 192px
          .list-img
            width 528px
            height 864px
            /*background-color greenyellow*/
            margin-top 30px
            display flex
            flex-wrap wrap
            justify-content space-around
            a
              display flex
              flex-direction column
              width 144px
              height 216px
              color #333
              text-align center


</style>
