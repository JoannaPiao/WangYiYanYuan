<template>
  <div id="container">
    <!--头部搜索-->
    <div class="search-hd">
      <form action="">
        <div class="search-wrap">
          <div class="search-left">
            <i class="iconfont icon-sousuo"></i>
            <input type="text" placeholder="断货王 跑步机">
          </div>
          <span @click="$router.push('/shouye')">取消</span>
        </div>

      </form>
    </div>
    <!--热门搜索-->
    <div class="hotDoor">
      <span>热门搜索</span>
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  #container
    background-color #f4f4f4
    height 5000px
    /*头部搜索*/
    .search-hd
      width 750px
      height 87px
      background-color #fff
      .search-wrap
        width 720px
        height 87px
        display flex
        justify-content space-between
        align-items center
        padding-left 20px
        .search-left
          width 604px
          height 52px
          font-size 26px
          display flex
          justify-content center
          background-color #f4f4f4
          .iconfont
            font-size 40px
            margin-left 50px
            margin-top 6px
          input
            background-color #f4f4f4
            width 604px
            height 52px
            margin-left 15px
        span
          font-size 28px
          margin-right 20px



    .hotDoor
      width 750px
      height 90px
      background-color #fff
      line-height 90px
      span
        font-size 28px
        color #999
        margin-left 20px




</style>
