<template>
  <div id="nav-bar">
    <div class="nav-left"><slot name="left"></slot></div>
    <div class="nav-conter"><slot name="conter"></slot></div>
    <div class="nav-right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
  #nav-bar{  
    height: 44px;
    line-height: 44px;
    display: flex;
    text-align: center;
    box-shadow: 0 1px 1px rgba(100,100,100,.1);
  }
  .nav-left {
    width: 60px;
  }
  .nav-right {
    width: 60px;
  }
  .nav-conter {
    flex-grow:1;
  }
</style>