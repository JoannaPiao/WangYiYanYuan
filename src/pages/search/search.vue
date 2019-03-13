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
      <div class="hot-Tj">
        <ul class="hot-list" >
          <li class="hot-listItem" v-for="(search,index) in searchList.hotKeywordVOList" :key="index">
            <a href="javascript:;">{{search.keyword}}</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'

  export default {
    mounted(){
      this.$store.dispatch('getSearchList')
    },
    computed: {
      ...mapState(['searchList'])
    }
  }
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
      height 404px
      background-color #fff
      line-height 90px
      span
        font-size 28px
        color #999
        margin-left 20px
      .hot-Tj
        width 750px
        height 316px
        /*background-color pink*/
        .hot-list
          width 720px
          height 316px
          display flex
          /*justify-content space-around*/
          flex-wrap wrap
          .hot-listItem
            width 233px
            height 47px
            text-align center
            line-height 47px
            a
              border 1px solid #999
              border-radius 10px
              padding 0 8px
              display inline-block
              color #333


</style>
