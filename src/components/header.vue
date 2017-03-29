<template>
    <div class="header">
      <img class="bg_img" src="http://static.galileo.xiaojukeji.com/static/tms/seller_avatar_256px.jpg">
      <div class="hd_content">
        <div class="avatar">
          <img class="avatar_img" src="http://static.galileo.xiaojukeji.com/static/tms/seller_avatar_256px.jpg">
        </div>
        <div class="content">
          <div class="title">
            <span class="brand"></span>
            <span class="name">粥品香坊（回龙观）</span>
          </div>
          <div class="description">蜂鸟专送/38分钟送达</div>
          <div class="support">
            <span class="s_icon decrease"></span>
            <span class="text">在线支付满28减5</span>
          </div>
        </div>
        <div class="account">
          <span class="num">5个</span>
          <span class="icon ion-ios-arrow-right"></span>
        </div>
      </div>
      <div class="bulletin_wrapper">
          <span class="bulletin_icon"></span>
          <span class="bulletin_text">
            粥品香坊其烹饪粥料的秘方源于中国千年古法，在融和现代制作工艺，由世界烹饪大师屈浩先生领衔研发。坚守纯天然、0添加的良心品质深得消费者青睐，发展至今成为粥类的引领品牌。是2008年奥运会和2013年园博会指定餐饮服务商。
          </span>
          <span class="icon ion-ios-arrow-right"></span>
      </div>
    </div>
</template>

<script>
    export default{
        data(){
            return{
                msg:'hello vue'
            }
        },
        components:{
        }
    }
</script>

<style lang="scss">

@import "../../static/base";
@import '../../static/css/ionicons.css';

body{
  font-size: rem(12px);
}
.header{
  position: relative;
  background: rgba(7,17,27,0.5);
  overflow: hidden;
}
.bg_img{
  position: absolute;
  top:0;
  left: 0;
  width: rem(640px);
  height: rem(268px);
  filter:blur(10px);
  z-index: -1;
}
.hd_content{
  position: relative;
  padding:rem(48px) rem(24px) rem(36px) rem(48px);
}
.avatar{
  display: inline-block;
  margin-right: rem(32px);
}
.avatar_img{
  display: inline-block;
  width: rem(128px);
  height: rem(128px);
}
.content{
  display: inline-block;
  color:#fff;

}
.title{
  margin: rem(4px) 0 rem(16px) 0;
}
.brand{
  display: inline-block;
  @include base_img('../assets/brand');
  width:rem(60px);
  height: rem(36px);
  background-size:100%;
}
.name{
  font-size:rem(32px);
  line-height: rem(36px);
  font-weight: bold;
  vertical-align: top;
}
.description{
  margin-bottom: rem(20px);
}
.s_icon{
  display: inline-block;
  width:rem(24px);
  height: rem(24px);
}
.decrease{
  @include base_img('../assets/decrease_1');
  background-size:100%;
}
.text{
  vertical-align: top;
}
.account{
  position: absolute;
  bottom: rem(28px);
  right: rem(24px);
  background: rgba(0,0,0,0.2);
  border-radius: 14px;
  padding: 0 rem(16px);
  height: rem(48px);
  line-height: rem(48px);
  color:#fff;
}
.num{
  margin-right: rem(16px);
}

.bulletin_wrapper{
  position: relative;
  height: rem(56px);
  line-height: rem(56px);
  padding: 0 rem(22px) 0 rem(12px);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  background: rgba(7,17,27,0.2);
  color: #fff;
}
  .bulletin_icon{
      display: inline-block;
      width: rem(44px);
      height: rem(24px);
    @include base_img('../assets/bulletin');
    background-size: 100%;

  }
  .bulletin_text{
    vertical-align: top;
    margin: 0 rem(4px);
    font-size: rem(10px);

  }

</style>
