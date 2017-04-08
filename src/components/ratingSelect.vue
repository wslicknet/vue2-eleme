<template>
    <div>
        <div class="tag">
            <span class="tag_item tag_all">{{desc.all}}       <span>{{ratings.length}}</span></span>
            <span class="tag_item tag_good">{{desc.positive}}<span>{{positiveArr.length}}</span></span>
            <span class="tag_item tag_bad">{{desc.negative}}<span>{{negativeArr.length}}</span></span>
        </div>
        <div class="switch on">
            <span class="icon ion-checkmark-circled"></span>
            <span class="text">只看有内容的评价</span>
        </div>
    </div>

</template>
<style lang="scss">
   .tag{
        padding: 18px 0;
        margin: 0 18px;
        position: relative;
        font-size: 0;
    }
    .tag_item{
        display: inline-block;
        padding: 8px 12px;
        margin-right: 8px;
        line-height: 16px;
        border-radius: 1px;
        font-size: 12px;
        color: #4d555d;
    }
    .tag_all{
        background: #00a0dc;
        color: #fff;
    }
    .tag_good{
        background: rgba(0,160,220,0.2);
        color: #4d555d;
    }
    .tag_bad{
        background: rgba(77,85,93,0.2);
        color: #4d555d;
    }
   .switch {
        padding: 12px 18px;
        line-height: 24px;
        border-bottom: 1px solid rgba(7,17,27,0.1);
        color: #93999f;
        font-size: 0;
       .ion-checkmark-circled{
           display: inline-block;
           vertical-align: top;
           margin-right: 4px;
           font-size: 24px;
           color: #00c850;
       }
        .text{
            display: inline-block;
            vertical-align: top;
            font-size: 12px;
        }
    }
</style>
<script>
    const POSITIVE= 0;
    const NEGATIVE= 1;
    export default{
        props:{
            desc:{
                type:Object,
                default(){
                    return {
                        all:'全部',
                        positive:'满意',
                        negative:'不满意'
                    }
                }
            },
            ratings:{
                type:Array,
                default(){
                    return [];
                }
            }
        },
        data(){
            return{

            }
        },
        computed:{
            positiveArr(){
                return this.ratings.filter((rating)=>{
                    rating.rateType === POSITIVE
                });
            },
            negativeArr(){
                return this.ratings.filter((rating)=>{
                    rating.rateType === NEGATIVE
                });
            }
        },
        components:{

        }
    }
</script>
