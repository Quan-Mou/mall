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
    background-color: var(--color-high-text);
    display: flex;
    text-align: center;
    color: var(--color-background);
    position: fixed;
    top:0;
    left: 0;
    right: 0;
    z-index:10
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