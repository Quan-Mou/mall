<template>
  <div class="recommend">
    <div class="recommend-item" v-for="(item,index) in recommends" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div><span>{{item.title}}</span></div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    recommends:{
      type:Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style>
 .recommend {
   width: 100%;
   display:flex;
   font-size:10px;
   margin-top: 8px;
   padding-bottom: 25px;
   border-bottom:8px solid #eeeeee;
 }
 .recommend-item {
   flex:1;
   text-align: center;
 }
 .recommend-item img {
   width: 70px;
   height: 70px;
   margin-bottom:5px;
 }

</style>