<template>
  <div class="tab-bar-items" @click="itemClick">
       <div v-if="isactive"><slot name="tabbar-img-active"></slot></div>
       <div v-else><slot name="tabbar-img"></slot></div>
       <div :style=activeStyle><slot name="tabbar-text"></slot></div>
  </div>
</template>

<script>
export default {
  props:{
    path:{
      type:String
    },
    activeColor:{
      type:String,
      // default:'green'
      default:'rgb(255, 87, 119)'
    }
  },
  // data() {
  //   return{
  //     isactive:false
  //   }
  // },
  computed:{
    isactive() {
      return this.$route.path.indexOf(this.path) !== -1
    },
    activeStyle() {
      return this.isactive ? {color:this.activeColor} : {}
    }
  },
  methods:{
    itemClick() {
      // console.log();
      this.$router.push(this.path)
      // console.log(this.path);
      // console.log(this.$route.path);
    }
  }

}
</script>

<style>
 .tab-bar-items {
    flex:1;
    text-align:center;
    height:49px;
    font-size:12px;
    /* color:rgb(255, 87, 119); */
  }
  .tab-bar-items img {
    width: 24px;
    height: 24px;
    vertical-align: middle;
    margin-top: 5px;
  }
  /* .active {
    color:rgb(255, 87, 119);
  } */
</style>