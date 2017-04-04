import Vue from 'vue'
import Vuex from 'vuex'

import {
    ADD_FOODS,
    DECREASE_FOODS,

} from './mutation_type'

Vue.use(Vuex);

export default new Vuex.Store({
    state:{
        cartNum:0,
        totalPrice:0,
        foods:{}
    },
    mutations:{
        [ADD_FOODS](state,item){
            state.cartNum++;
            state.totalPrice+=item.price;
            state.foods[item.id]=item;
        },
        [DECREASE_FOODS](state,item){
            state.cartNum--;
            state.totalPrice-=item.price;
            if(item.cartNum == 0){
                delete state.foods[item.id];
            }
        }
    }
});

