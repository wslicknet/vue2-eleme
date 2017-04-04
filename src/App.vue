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
          <router-view :seller="seller"></router-view>
      </keep-alive>
  </div>
</template>

<script type="javascript">
    import Vue from 'vue'
    import header from './components/header'
    import VueResource from 'vue-resource'
    Vue.use(VueResource);

export default {
  name: 'app',
  data(){
      return{
          seller:{}
      }

  },
  components:{
    'v-header':header
  },
  created(){
      this.$http({
            url:'/api/seller',
            method:'get',
            emulateJSON:true
        }).then((resp)=>{
            let obj=resp.body;
            if(obj.errcode==0){
                this.seller=obj.data;

            }else{
                this.seller='';
            }
            console.log(resp);
        });
      }
}
</script>

<style lang="scss">
    @import "../static/base.scss";
    ::-webkit-scrollbar {
        display: none;
    }
    .tab{
        display: flex;
        background-color: #fff;
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
