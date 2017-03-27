import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import goods from '@/components/goods'
import ratings from '@/components/ratings'
import sellers from '@/components/sellers'

Vue.use(Router)

export default new Router({
    linkActiveClass:'active',
    routes: [
        {
            path: '/Hello',
            component: Hello
        },
        {
            path: '/goods',
            component: goods
        },
        {
            path: '/ratings',
            component: ratings
        },
        {
            path: '/sellers',
            component: sellers
        }
    ]
})
