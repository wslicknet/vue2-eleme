<template>
    <div class="goods">
        <div class="left_list">
            <ul>
                <li class="item"><span class="item_text">热销榜</span></li>
                <li class="item"><span class="item_text"><i class="icon"></i>单人精彩套餐</span></li>
                <li class="item"><span class="item_text"><i></i>冰爽饮品限时特惠</span></li>
            </ul>
        </div>
        <div class="right_list"></div>
    </div>
</template>
<style lang="scss">
    .goods{
        display: flex;
    }
    .left_list{
        flex:0 0 80px;
        width: 80px;
        background-color: #f3f5f7;
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


</style>
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
