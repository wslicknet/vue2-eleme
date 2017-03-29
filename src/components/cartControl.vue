<template>
    <div class="cart_content">

        <transition name="move">
            <span class="num_icon num_minus" @click="decrease" v-show="cartNum>0">
                <i class="icon ion-minus-circled"></i>
            </span>
        </transition>

        <span class="cart_num" v-if="cartNum>0">{{cartNum}}</span>
        <span class="num_icon num_add" @click="add">
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

    export default{
        data(){
            return{
                cartNum:0
            }
        },
        methods:{
            add(){
                this.cartNum++;
            },
            decrease(){
                this.cartNum--;
            }
        },
        components:{

        }
    }
</script>
