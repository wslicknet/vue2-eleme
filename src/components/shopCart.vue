<template>
    <div>
        <div class="shopcart">
            <div class="content_left" :class="{'l_active':cartNum>0?true:''}" @click="toggleList">
                <div class="shop">
                <span class="shop_icon_wrapper">
                    <i class="icon ion-android-cart"></i>
                </span>
                    <div class="buy_num" v-show="cartNum>0">{{cartNum}}</div>
                </div>
                <span class="money">￥{{totalPrice}}</span>
            </div>
            <div class="content_right">
                <div class="count" :class="is_enough">{{description}}</div>
            </div>

            <div class="shoplist" v-show="listShow">
                <div class="list_header">
                    <span class="left">购物车</span>
                    <span class="right">清空</span>
                </div>
                <div class="list">
                    <ul>
                        <li class="food" v-for="foodItem in foods" v-show="foodItem.cartNum>0">
                            <span class="food_name">{{foodItem.name}}</span>
                            <div class="food_price">￥{{foodItem.price}}</div>
                            <div class="cart_wrapper">
                                <cart-control :food="foodItem"></cart-control>
                            </div>
                        </li>
                    </ul>

                </div>
            </div>

        </div>

        <transition name="fade">
            <div class="list_mask" v-show="listShow" @click="hideList"></div>
        </transition>

    </div>

</template>
<style lang="scss" scoped>
   .shopcart{
       position: fixed;
       bottom: 0;
       left:0;
       width: 100%;
       background-color: #141d27;
       height: 48px;
       color:rgba(255,255,255,0.4);
       display: flex;
       z-index: 50;
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
   .buy_num{
       position: absolute;
       top: 0;
       right: 0;
       width: 24px;
       height: 16px;
       line-height: 16px;
       text-align: center;
       border-radius: 16px;
       font-size: 9px;
       font-weight: 700;
       color: #fff;
       background: #f01414;
       box-shadow: 0 4px 8px 0 rgba(0,0,0,0.4);
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
   .l_active{
       .shop_icon_wrapper{
           background-color: #00a0dc;
       }
       .ion-android-cart,.money{
           color: #fff;
       }


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
    .enough{
        background: #00b43c;
        color: #fff;
    }
    .shoplist{
        position: absolute;
        left: 0;
        bottom: 48px;
        width: 100%;
        z-index: -1;
        .list_header{
            height: 40px;
            line-height: 40px;
            background: #f3f5f7;
            padding: 0 18px;
            border-bottom: 1px solid rgba(7,17,27,0.1);
            .left{
                float: left;
                font-size: 14px;
                color: #07111b;
            }
            .right{
                float: right;
                font-size: 12px;
                color: #00a0dc;
            }
        }
        .list{
            background: #fff;
            padding: 0 18px;

        }
        .food{
            padding: 12px 0;
            position: relative;
            border-bottom: 1px solid rgba(7, 17, 27, 0.1);
            .food_name{
                line-height: 24px;
                font-size: 14px;
                color: #07111b;
            }
            .food_price{
                position: absolute;
                right: 90px;
                bottom: 12px;
                line-height: 24px;
                font-size: 14px;
                font-weight: 700;
                color: #f01414;
            }
        }
    }
    .cart_wrapper{
        position: absolute;
        right: 0;
        bottom: 12px;
    }
    .list_mask{
        position: fixed;
        left:0;
        top: 0;
        width: 100%;
        height: 100%;
        z-index: 40;
        background: rgba(7, 17, 27, 0.6);
        backdrop-filter: blur(10px);
        .fade-enter-active,.fade-leave-active{
            transition: all .3s ease;
        }
        .fade-enter,.fade-leave-active{
            background: rgba(7, 17, 27, 0);
        }
    }


</style>
<script type="javascript">
    import CartControl from './cartControl'

    export default{
        props:{
            minPay:{
                type:Number,
                default:0
            },
            foods:{
                type:Object
            }
        },
        data(){
            return{
                description:'',
                food:[],
                listShow:false
            }
        },
        computed:{
            cartNum(){
                return this.$store.state.cartNum;
            },
            totalPrice(){
                return this.$store.state.totalPrice;
            },
            is_enough(){
                if(this.$store.state.totalPrice<this.minPay){
                    if(this.$store.state.totalPrice==0){
                        this.description="￥"+this.minPay+"元起送";
                    }else{
                        let abs=this.minPay-this.$store.state.totalPrice;
                        this.description="还差￥"+abs+"元起送";
                    }
                    return 'not_enough';
                }else{
                    this.description="去结算";
                    return 'enough';
                }
            }

        },
        watch:{
            foods(val){
                if(!Object.keys(val).length){
                    this.listShow=false;
                }
            }
        },
        components:{
            CartControl
        },
        methods:{
            toggleList(){
                if(!Object.keys(this.foods).length){
                    return;
                }

                this.listShow= !this.listShow;
                console.log(this.listShow);
            },
            hideList(){
                this.listShow=false;
                console.log(this.listShow);
            }
        }
    }
</script>
