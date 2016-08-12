<template>
    <div class="row">
        <div class="col-md-10 box2" id="box1"></div>
    </div>
</template>

<script>
import Bar from "components/Bar"
export default {
    name : "bar",
    computed:{
        barData(){
            return this.$store.getters.getChartData;
        }
    },
    mounted(){
        this.bar01 = new Bar({
            el : document.querySelector("#box1"),
            type : "bar",
            subtype : "1",
            data : this.barData[0]
        })
    }
}
</script>

<style >
</style>
