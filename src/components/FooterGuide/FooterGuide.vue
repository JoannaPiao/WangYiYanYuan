<template>
  <footer class="footer_guide border-1px">
    <div href="javascript:;" class="guide_item " @click="goTo('/shouye')" :class="{on: $route.path === '/shouye'}">
      <i class="iconfont icon-home"></i>
      <span>首页</span>
    </div>
    <div href="javascript:;" class="guide_item" @click="goTo('/list')" :class="{on: $route.path === '/list'}">
      <i class="iconfont icon-sort"></i>
      <span>分类</span>
    </div>
    <div href="javascript:;" class="guide_item" @click="goTo('/things')" :class="{on: $route.path === '/things'}">
      <i class="iconfont icon-pic"></i>
      <span>识物</span>
    </div>
    <div href="javascript:;" class="guide_item" @click="goTo('/shop')" :class="{on: $route.path === '/shop'}">
      <i class="iconfont icon-cart"></i>
      <span>购物车</span>
    </div>
    <div href="javascript:;" class="guide_item" @click="goTo('/personal')" :class="{on: $route.path === '/personal'}">
      <i class="iconfont icon-people"></i>
      <span>个人</span>
    </div>
  </footer>

</template>

<script>
  export default {
    methods: {
      goTo (path) {
        //编程式导航
        this.$router.replace(path)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .footer_guide
    display flex
    justify-content space-around
    position fixed
    left 0
    bottom 0
    right 0
    height 98px
    font-size 24px
    border-top 1px solid #efefef
    box-sizing border-box
    background-color #ffffff
    .guide_item
      display flex
      flex-direction column
      justify-content center
      align-items center
      &.on
        color #b4282d
      .iconfont
        font-size 40px
        display flex
      span
          margin-top 3px
          font-size 24px


</style>


