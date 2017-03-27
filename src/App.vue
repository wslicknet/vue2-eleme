<template>
  <div id="app">
      <v-header></v-header>
      <div class="tab">
          <div class="tab_item active">
              <router-link to="/goods">商品</router-link>
          </div>
          <div class="tab_item">
              <router-link to="/ratings">评论</router-link>
          </div>
          <div class="tab_item">
              <router-link to="/sellers">商家</router-link>
          </div>
      </div>

      <keep-alive>
          <router-view></router-view>
      </keep-alive>
  </div>
</template>

<script>
import header from './components/header'
export default {
  name: 'app',
  components:{
    'v-header':header
  }
}
</script>

<style lang="scss">
    @import "../static/base.scss";
    .tab{
        display: flex;
    }
    .tab_item{
        display: inline-block;
        flex: 1;
        @include height_middle(80px);
        color:#4d555d;
        text-align: center;
        font-size: 14px;
    }
    .active{
        color:#f01414;
    }


</style>
