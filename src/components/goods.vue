<template>
    <div>
        <div class="goods">
            <div class="left_list">
                <ul>
                    <li @click="scrollEvent(index)" class="item" v-for="(item,index) in goods" :class="{'current':currentIndex==index}">
                    <span class="item_text">
                        <i v-if="item.type>0" class="icon" :class="classMap[item.type]"></i>
                        {{item.name}}
                    </span>
                    </li>
                </ul>
            </div>
            <div class="right_list">
                <ul class="foods_ul" ref="foodsWrapper">
                    <li class="foods_list" v-for="item in goods" ref="li">
                        <h3 class="foods_title">{{item.name}}</h3>
                        <ul>
                            <li @click="showFoodDetail(foodsItem,$event)" class="foods_item" v-for="foodsItem in item.foods">
                                <span class="foods_img">
                                    <img :src="foodsItem.icon" width="57" height="57">
                                </span>
                                <div class="foods_text">
                                    <h3 class="item_title">{{foodsItem.name}}</h3>
                                    <p class="item_desc">{{foodsItem.description}}</p>
                                    <p class="item_sale">
                                        <span>月售{{foodsItem.sellCount}}份</span>
                                        <span>好评率{{foodsItem.rating}}%</span>
                                    </p>
                                    <p class="item_price">￥{{foodsItem.price}}</p>
                                    <div class="cart_wrapper">
                                        <cart-control :food="foodsItem"></cart-control>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
            <shop-cart :minPay="seller.minPrice" :foods="selectedFoods"></shop-cart>
        </div>
        <food :food="foodItem"  ref="food"></food>
    </div>

</template>
<style lang="scss">
    @import "../../static/base";
    @import '../../static/css/ionicons.css';
    .goods{
        display: flex;
        height:384px;
    }
    .left_list{
        flex:0 0 80px;
        width: 80px;
        background-color: #f3f5f7;
        overflow-y: scroll;
    }
    .item{
        display: table;
        width: 56px;
        height: 54px;
        padding: 0 12px;
        line-height: 14px;
        .item_text{
            display: table-cell;
            border-top:1px solid rgba(7, 17, 27, 0.1);
            vertical-align: middle;
        }
    }
    .current{
        background-color: #fff;
    }
    .food_type_1{
        @include base_img('../assets/special_2');
        background-size:100%;
    }
    .food_type_2{
        @include base_img('../assets/discount_2');
        background-size:100%;
    }
    .right_list{
        flex:1;
        overflow-y: scroll;
    }
    .foods_ul{
        position: relative;
    }
    .foods_title{
        padding-left: 14px;
        color:#93999f;
        background-color: #f3f5f7;
        height: 26px;
        line-height: 26px;
    }
    .foods_item{
        display: flex;
        margin: 18px;
        padding-bottom:18px ;
        border-bottom:1px solid rgba(7, 17, 27, 0.1);
    }
    .foods_img{
        flex: 0 0 57px;
        margin-right: 10px;
    }
    .foods_text{
        position: relative;
        flex:1;
        .item_title{
            font-size: 14px;
            color: #07111b;
            line-height: 1;
            margin: 2px 0 8px 0;
        }
        .item_desc{
            font-size: 10px;
            color: #93999f;
            margin-bottom: 8px;
        }
        .item_sale{
            font-size: 10px;
            color: #93999f;
        }
        .item_price{
            font-weight: 700;
            line-height: 24px;
            margin-right: 8px;
            font-size: 14px;
            color: #f01414;
        }

        .cart_wrapper{
            position: absolute;
            right: 0;
            bottom: 0;
        }
    }




</style>
<script>
    import Vue from 'vue'
    import VueResource from 'vue-resource'
    import CartControl from './cartControl'
    import ShopCart from './shopCart'
    import Food from './food'
    Vue.use(VueResource);

    export default{
        props:{
            seller:{
                type:Object
            }
        },
        data(){
            return{
                goods:[],
                classMap:{'1':'food_type_1','2':'food_type_2'},
                listHeight:[],
                scrollY:0,
                currentIndex:0,
                minPay:0,
                foodItem:{},
                showDetailFlag:false
            }
        },
        created(){
            this.$http({
                url:'/api/goods',
                method:'get',
                emulateJSON:true
            }).then((resp)=>{
                var obj=resp.body;
                if(obj.errcode==0){
                    this.goods=obj.data;
                    this.$nextTick(function(){
                        this._initScrollEvent();
                        this._initHeight();
                    });
                }else{
                    this.goods=[];
                }
                console.log(resp);
            });
        },
        computed:{
            currentIndex(){
                for(let i=0,l=this.listHeight.length;i<l;i++){
                    var height1=this.listHeight[i];
                    var height2=this.listHeight[i+1];
                    if(!height2 || (this.scrollY>=height1 && this.scrollY<height2)){
                        return i;
                    }
                }
                return 0;
            },
            selectedFoods(){
                return this.$store.state.foods;
            }
        },
        methods:{
            scrollEvent(index){
                this.currentIndex=index;
                let height=this.listHeight[index];
                this.$refs.foodsWrapper.style.transition="transform .3s ease";
                this.$refs.foodsWrapper.style.transform="translateY(-"+height+"px)";
            },
            _initHeight(){
                let height=0;
                this.listHeight.push(height);
                let len=this.$refs.li.length;
                for(let i=0;i<len;i++){
                    height+=this.$refs.li[i].offsetHeight+18;
                    this.listHeight.push(height);
                }
            },
            _initScrollEvent(){
                this.$refs.foodsWrapper.addEventListener('scroll',function(){
                    this.scrollY=this.$refs.foodsWrapper.scrollY;
                });
            },
            showFoodDetail(foodItem,event){
                if(event.target.tagName.toLowerCase() == 'i'){
                    return ;
                }
                this.foodItem=foodItem;
                this.$refs.food.show();
            }


        },
        components:{
            CartControl,
            ShopCart,
            Food
        }
    }
</script>
