/**
 * Created by yelingfeng on 2016/8/11.
 */
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import BarView from '../views/BarView'
import LineView from '../views/LineView'
import PieView from "../views/PieView"
import MapView from "../views/MapView"
export default new Router({
    mode: 'history',
    routes: [
        { path: '/bar', name:"bar", component: BarView},
        { path: '/line', name:"line", component: LineView},
        { path: '/pie', name:"pie", component: PieView},
        { path: '/map', name:"map", component: MapView},
        { path: '*', redirect: '/bar' }
    ]
})
