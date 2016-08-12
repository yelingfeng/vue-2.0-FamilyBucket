<template>
    <div class="row">
        <div class="col-md-10 box2" id="box1"></div>
    </div>
</template>

<script>
import Map from "components/Map"
import echarts from "echarts"
export default {
    name : "map",
    mounted(){
        this.Map = new Map({
            el : document.querySelector("#box1"),
            type : "map",
            subtype : "1",
        })
    },
}
</script>

<style >
</style>
