<template>
    <div class="cart_content">

        <transition name="move">
            <span class="num_icon num_minus" @click="decrease(food)" v-show="food.cartNum>0">
                <i class="icon ion-minus-circled"></i>
            </span>
        </transition>

        <span class="cart_num" v-if="food.cartNum>0">{{food.cartNum}}</span>
        <span class="num_icon num_add" @click="add(food)">
            <i class="icon ion-android-add-circle"></i>
        </span>
    </div>
</template>
<style lang="scss">
    @import "../../static/base";
    @import '../../static/css/ionicons.css';


    .num_icon{
        display: inline-block;
        width: 24px;
        height: 24px;
    }
    .ion-minus-circled,.ion-android-add-circle{
        font-size: 24px;
        width: 24px;
        height:24px;
        color: #00a0dc;
    }
    .num_minus{
        opacity: 1;
        transform: translateX(0);
        .ion-minus-circled{
            transition:all .4s ease;
            transform: rotate(0);
        }
    }
    .cart_num{
        display: inline-block;
        font-size: 14px;
        vertical-align: 3px;
        margin: 0 5px;
        color:#000;
    }
    .move-enter-active,.move-leave-active{
        transition:all .4s ease;
    }
   .move-enter,.move-leave-active{
        opacity: 0;
        transform: translateX(25px);
       .ion-minus-circled{
           transform: rotate(180deg);
       }
    }
</style>
<script>
import Vue from 'vue'

    export default{
        props:{
            food:{
                type:Object
            }
        },

        methods:{
            add(item){
                if(!this.food.cartNum){
                    Vue.set(this.food,'cartNum',1);
                }else{
                    this.food.cartNum++;
                }
                this.$store.commit('ADD_FOODS',item);
            },
            decrease(item){
                this.food.cartNum--;
                this.$store.commit('DECREASE_FOODS',item);

            }
        },
        components:{

        }
    }
</script>
