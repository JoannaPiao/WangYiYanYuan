<template>
  <div id="container">
    <!--个人头部-->
    <div class="personal-wrap">
      <a href="javascript:;" class="iconfont icon-home u-icon1" @click="$router.push('/shouye')"></a>
      <i
        style="background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png)"
        class="personal-title"></i>
      <i class="iconfont icon-sousuo u-icon2" @click="$router.push('/search')"></i>
      <i class="iconfont icon-cart u-icon3" @click="shop('/shop')"></i>
    </div>
    <!--严选-->
    <div class="personal-center">
      <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
    </div>
    <!--按钮-->
    <div class="btnWrap">
      <div class="btnWrap-phone">
        <i class="iconfont icon-shouji"></i>
        <span>手机号码登录</span>
      </div>
      <div class="btnWrap-mail">
        <i class="iconfont icon-youxiang"></i>
        <span>邮箱账号登录</span>
      </div>
      <div class="btnWrap-span">
        <span>手机号快捷注册</span>
        <i class="iconfont icon-iconfontyoujiantou-copy-copy-copy-copy"></i>
      </div>
    </div>
    <!--底部-->
    <div class="thirdWrap">
      <div class="WeiXin">
        <i class="iconfont icon-weixin"></i>
        <span>微信</span>
      </div>
      <div class="QQ">
        <i class="iconfont icon-qq"></i>
        <span>QQ</span>
      </div>
      <div class="WeiBo">
        <i class="iconfont icon-weibo"></i>
        <span>微博</span>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    methods:{
      shop(path){
        this.$router.push({
          path,
          query:{}
        })
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #container
    background-color #F2F5F4
    height 100%
    position relative
    .personal-wrap
      position relative
      width 750px
      height 88px
      background-color #fafafa
      .iconfont
        font-size 64px
        background-position center
        float left
      .personal-title
        position absolute
        width 150px
        height 64px
        display inline-block
        background-repeat no-repeat
        left: 0
        bottom: 0
        right: 0
        top: 17px
        margin auto
      .u-icon1
        position absolute
        top 15px
        left 30px
      .u-icon2
        position absolute
        right 100px
        top 15px
      .u-icon3
        position absolute
        right 20px
        top 15px

    .personal-center
      position relative
      width 750px
      height 410px
      img
        position absolute
        display inline-block
        top: 0
        left: 0
        right: 0
        bottom: 0
        margin auto
        width 268px
        height 90px
    .btnWrap
      width 750px
      height 292px
      display flex
      flex-direction column
      justify-content space-around
      align-items center
      .btnWrap-phone
        width 670px
        height 94px
        color #fff
        font-size 28px
        background-color #b4282d
        text-align center
        line-height 94px
        .icon-shouji
          font-size 35px
          margin-right 10px
      .btnWrap-mail
        width 670px
        height 94px
        color #b4282d
        font-size 28px
        background-color #fff
        border 1px solid #b4282d
        text-align center
        line-height 94px
        margin-top 25px
        .icon-youxiang
          font-size 35px
          margin-right 10px
      .btnWrap-span
        width 670px
        height 94px
        color #333
        font-size 28px
        text-align center
        line-height 94px
        .icon-iconfontyoujiantou-copy-copy-copy-copy
          font-size 35px


    .thirdWrap
      position absolute
      width 750px
      height 40px
      bottom 100px
      left 0
      display flex
      justify-content center
      .WeiXin
        width 184px
        height 40px
        color #7F7F7F
        font-size 30px
        text-align center
        border-right 3px solid #7F7F7F
        .iconfont
          font-size 35px
      .QQ
        width 184px
        height 40px
        color #7F7F7F
        font-size 30px
        text-align center
        border-right 3px solid #7F7F7F
        .iconfont
          font-size 35px
      .WeiBo
        width 184px
        height 40px
        color #7F7F7F
        font-size 30px
        text-align center
        border-right 3px solid #7F7F7F
        .iconfont
          font-size 35px



</style>
