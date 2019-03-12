<template>
  <div id="container" >
    <!--{{this.$route.query.listId}}-->
    <!--右边list-->
    <div class="list-right">
      <div class="list-wrap">
        <div class="list-pic"
             style="background-image:url(http://yanxuan.nosdn.127.net/d723607e0cbb0c4a11c9396612c71d9b.jpg?imageView&thumbnail=0x196&quality=75);">
        </div>
        <div class="list-img" v-if="category2">
          <a href="javascript:;" v-for="(item,index) in category2.subCateList" :key="index">
            <img :src="item.bannerUrl" alt="" style="width: 144px;height: 144px">
            <span>{{item.name}}</span>
          </a>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  import {mapState} from 'vuex'

  export default {
    computed:{
      ...mapState(['list']),

      category2(){
        let result=this.list.find(item=>item.id===this.$route.query.listId*1)
        if(!result){
          return this.list[0]
        }else{
          return result
        }
      }

    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  #container
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
          height 432px
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
