/**
 * Created by yelingfeng on 2016/8/12.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import Api from "src/api/index"
import createLogger from 'vuex/logger'

Vue.use(Vuex)

const store = new Vuex.Store({
    plugins: [createLogger()],
    state: {
        chartData:{
            bar :{},
            line:{},
            pie:{}
        }
    },
    actions: {
        INIT_CHART_LIST:({commit , dispatch,state}) => {
            commit("INIT_CHART_LIST")
        }
    },
    mutations: {
        INIT_CHART_LIST:(state ) => {
            state.chartData.bar = Api.BAR;
            state.chartData.line = Api.LINE;
            state.chartData.pie = Api.PIE;
        }
    },
    getters: {
        getChartData(state){
            const chartData = state.chartData;
            const type = state.route.name ;
            return state.chartData[type];
        }
    }
})

export default store