<template>
    <div class="row">
        <div class="col-md-8 box2" id="Pie1"></div>
    </div>
</template>

<script>
    import Pie from "components/Pie"
    export default {
        name : "pie",
        mounted(){
            this.pie01 = new Pie({
                el : document.querySelector("#Pie1"),
                type : "line",
                subtype : "1",
            })
        }
    }
</script>

<style >
    .box2{
        width  : 800px;
        height : 500px;
    }
</style>
