<template>
  <div class="control">
    <div class="control-item" v-for="(item,index) in titles" :key="index" :class="{active:currentIndex === index}" @click="itemClick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentIndex:0
    }
  },
  methods:{
    itemClick(index) {
      this.currentIndex = index;
      this.$emit('tabClick',index)
    }
  },
  props:{
    titles:{
      type:Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style>
  .control { 
    display:flex;
    height: 40px;
    line-height: 40px;
    background-color: var(--color-background);
    font-size:12px;
    position: sticky;
    top:40px;
    z-index: 10;
  }
  .control-item {
    text-align: center;
    flex:1;
  }
  .control-item span {
    padding:4px
  }
  .active {
    color:var(--color-tint);
  }
  .active span {
    border-bottom: 3px var(--color-tint) solid;
  }
</style>