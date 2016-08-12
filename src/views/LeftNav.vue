<template>
        <ul class="left-nav">
            <router-link activeClass="active"
                 v-for="(item,index) in list"
                 :to="'/' + item.link "
                 tag="li"
                 @click="selected(index)">
                <a>  {{item.name}}</a>
            </router-link>
        </ul>
</template>

<script>

const data = [
    { name : "柱形图",link:"bar"},
    { name : "折线图",link:"line"},
    { name : "饼图",link:"pie"},
    { name : "地图",link:"map"},
]

export default {
   name : "nav",
   data(){
       return {
           list : data,
           activeIndex : 0,
       }
   },
    methods:{
        selected(index){
            this.activeIndex = index
        }
    }
}

</script>

<style scoped>
 .left-nav {
     padding-left: 0;
     margin-bottom: 0;
     list-style: none;
 }

 .left-nav>li {
     position: relative;
     display: block;
 }
 .left-nav li>a {
     display: block;
     color: #5d9c85;
     font-weight: 600;
     padding: 14px 20px 14px 25px;
     cursor: pointer;
     text-align: left;
 }

 .left-nav li.active{
     background-color: #40996c;
 }
 .left-nav li.active> a{
     color :#fff;
 }
 .left-nav li >a:hover,.nav li.active >a:hover{
     background-color: inherit;
 }
</style>

