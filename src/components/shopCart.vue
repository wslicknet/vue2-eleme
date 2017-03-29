<template>
    <div class="shopcart">
        <div class="content_left">
            <div class="shop">
            <span class="shop_icon_wrapper">
                <i class="icon ion-android-cart"></i>
            </span>
            </div>
            <span class="money">￥{{total}}</span>
        </div>
        <div class="content_right">
            <div class="count not_enough">￥{{minPay}}元起送</div>
        </div>
    </div>
</template>
<style lang="scss">
   .shopcart{
       position: fixed;
       bottom: 0;
       left:0;
       width: 100%;
       background-color: #141d27;
       height: 48px;
       color:rgba(255,255,255,0.4);
       display: flex;
   }
   .content_left{
       flex: 1;
   }
   .content_right{
       flex:0 0 105px;
   }

    .shop{
        position: relative;
        bottom: 10px;
        display: inline-block;
        margin: 0 12px;
        width: 56px;
        height: 56px;
        border-radius: 50%;
        background-color: #141d27;
        padding: 6px;
        box-sizing:border-box;
    }
   .shop_icon_wrapper{
       display: inline-block;
       width: 44px;
       height: 44px;
       background-color: #2b343c;
       border-radius: 50%;
       text-align: center;
       position: relative;
       top:0;
   }
    .ion-android-cart{
        font-size: 24px;
        color: #80858a;
        line-height: 44px;
    }
    .money{
        display: inline-block;
        vertical-align: top;
        margin-top: 12px;
        line-height: 24px;
        padding-right: 12px;
        box-sizing: border-box;
        border-right: 1px solid rgba(255,255,255,0.1);
        font-size: 16px;
        font-weight: 700;
    }
    .count{
        height: 48px;
        line-height: 48px;
        text-align: center;
        font-size: 12px;
        font-weight: 700;
    }
    .not_enough{
        background: #2b333b;
    }


</style>
<script type="text/script">

    export default{
        data(){
            return{
                total:0,
                minPay:20
            }
        },
        components:{

        }
    }
</script>
