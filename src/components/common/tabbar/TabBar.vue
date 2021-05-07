<template>
  <div id="tab-bar">
      <slot></slot>
  </div> 
</template>

<script>
export default {
  name:'Tabbar'
}
</script>

<style>
 #tab-bar {
  display: flex;
  position: fixed;
  right: 0;
  left:0;
  bottom:0;
  background-color: #f6f6f6;
  flex-wrap:nowrap ;
  z-index: 20 ;
  }
</style>