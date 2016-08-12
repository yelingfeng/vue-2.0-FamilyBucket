<template>
  <div id="app" class="container-fluid">
    <div class="row">
      <div class="col-md-2">
        <LeftNav></LeftNav>
      </div>
      <div class="col-md-10">
        <transition name="fade" mode="out-in">
          <router-view class="view"></router-view>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
  import LeftNav from "views/LeftNav"
  export default {
    name : "app",
    beforeMount (){
      this.$store.dispatch('INIT_CHART_LIST')
    },
    components :{
      LeftNav
    }
  }
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
  background: #e4f4f3;
}
.row {
  margin-top:10px;
}
.box {
  width : 450px;
  height : 300px;
  border :1px solid #ccc;
  color : #fff;
  margin-left: 10px;
  margin-bottom: 10px;
}
.box2{
  width  : 800px;
  height : 500px;
  border :1px solid #ccc;
}

.fade-enter-active, .fade-leave-active{
  transition: all .3s ease;
}
.fade-enter, .fade-leave-active{
  opacity: 0;
  transform: translateX(30px);
}
</style>
