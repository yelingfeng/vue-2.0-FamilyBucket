/**
 * Created by yelingfeng on 2016/8/11.
 */
import echarts from "echarts"
// test vue-resources

/**
 * 图表基类
 */
export default class ChartClass {
    constructor(op){
        this.option = op;
        this.init()
    }
    init(){
        this.EC = echarts.init(this.option.el)
    }
    build(option){
        this.EC.setOption(option);
    }
    resize(){
        this.EC.resize();
    }
}