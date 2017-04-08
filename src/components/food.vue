<template>
    <div class="food" v-show="showFlag">
        <div class="food_detail">
            <div class="food_item" >
                <div class="food_img_wrap">
                    <img class="food_img" :src="food.image">
                    <div class="back" @click="backToList">
                        <i class="icon ion-chevron-left"></i>
                    </div>
                </div>
                <div class="food_info">
                    <p class="food_name">{{food.name}}</p>
                    <p class="food_des">月售{{food.sellCount}}份&nbsp;&nbsp;&nbsp;&nbsp;好评率{{food.rating}}%</p>
                    <div class="food_price">￥{{food.price}}</div>
                    <div class="cartcontrol_wrapper">
                        <cart-control :food="food"></cart-control>
                    </div>
                </div>
            </div>
            <div class="split"></div>
            <div class="info">
                <div class="title">商品信息</div>
                <p class="text">{{food.info}}</p>
            </div>
            <div class="split"></div>
            <div class="ratings">
                <div class="title">商品评价</div>
                <rating-select :desc="desc" :ratings="food.ratings"></rating-select>
                <div class="rating_wrapper">
                    <ul>
                        <li class="rating_item" v-for="rating in food.ratings" v-show="rating.text">
                            <div class="user">
                                <span class="name">{{rating.username}}</span>
                                <img class="avatar" width="12" height="12" :src="rating.avatar">
                            </div>
                            <div class="time">{{rating.rateTime | formatDate}}</div>
                            <p class="text">
                                <span class="icon" :class="{'ion-thumbsup':rating.rateType===0,'ion-thumbsdown':rating.rateType===1}"></span>{{rating.text}}
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    .food{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        background: #fff;
        color: #000;
        overflow: auto;
        bottom: 48px;
    }
    .food_img{
        width: 100%;
    }
    .back{
        position: absolute;
        left: 0;
        top:10px;
        .ion-chevron-left{
            display: block;
            padding: 10px;
            font-size: 20px;
            color: #fff;
        }
    }
    .food_info{
        padding: 18px;
        position: relative;
    }
    .food_name{
        color: #07111b;
        font-weight: 700;
        font-size: 14px;
        line-height: 14px;
        margin-bottom: 8px;
    }
    .food_des{
        margin-bottom: 18px;
        line-height: 10px;
        height: 10px;
        font-size: 10px;
        color: #93999f;
    }
    .food_price{
        margin-right: 8px;
        font-size: 14px;
        color: #f01414;
    }
    .cartcontrol_wrapper {
        position: absolute;
        right: 12px;
        bottom: 12px;
    }
    .split{
        width: 100%;
        height: 16px;
        border-top: 1px solid rgba(7,17,27,0.1);
        border-bottom: 1px solid rgba(7,17,27,0.1);
        background: #f3f5f7;
    }
    .info,.ratings{
        padding: 18px;
    }
    .title{
        line-height: 14px;
        margin-bottom: 6px;
        font-size: 14px;
        color: #07111b;
    }
    .text{
        line-height: 24px;
        padding: 0 8px;
        font-size: 12px;
        color: #4d555d;
    }
    .rating_wrapper{
        padding: 0 18px;
    }
    .rating_item{
        padding: 16px 0;
        position: relative;
        .user{
            position: absolute;
            right: 0;
            top: 16px;
            line-height: 12px;
            font-size: 0;
            .name{
                display: inline-block;
                margin-right: 6px;
                vertical-align: top;
                font-size: 10px;
                color: rgb(147, 153, 159);
            }
            .avatar{
                border-radius: 50%;
            }

        }
        .time{
            margin-bottom: 6px;
            line-height: 12px;
            font-size: 10px;
            color: rgb(147, 153, 159);
        }

        .text{
            line-height: 16px;
            font-size: 12px;
            color: rgb(7, 17, 27) ;
        }

        .ion-thumbsup, .ion-thumbsdown{
            margin-right: 4px;
            line-height: 16px;
            font-size: 12px;
        }

        .ion-thumbsup{
            color: rgb(0, 160, 220);
        }

        .ion-thumbsdown{
            color: rgb(147, 153, 159);
        }

    }
    .no-rating{
        padding: 16px 0;
        font-size: 12px;
        color: rgb(147, 153, 159);

    }

</style>
<script>
import CartControl from './cartControl'
import RatingSelect from './ratingSelect'
import {formatDate} from '../common/js/date';


    export default{
        props:{
            food:{
                type:Object
            }
        },
        data(){
            return{
                showFlag:false,
                desc:{
                    all:'全部',
                    positive:'推荐',
                    negative:'吐槽'
                }
            }
        },

        filters: {
          formatDate(time) {
            let date = new Date(time);
            return formatDate(date, 'yyyy-MM-dd hh:mm');
          }
        },
        methods:{
            show(){
                this.showFlag=true;
            },
            backToList(){
                this.showFlag=false;
            }
        },
        components:{
            CartControl,
            RatingSelect
        }
    }
</script>
