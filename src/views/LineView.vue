<template>
    <div class="row">
        <div class="col-md-8 box2" id="line1"></div>
    </div>
</template>

<script>
import Line from "components/Line"
export default {
    name : "line",
    mounted(){
        this.line01 = new Line({
            el : document.querySelector("#line1"),
            type : "line",
            subtype : "1",
        })
    }
}
</script>

<style >
</style>
