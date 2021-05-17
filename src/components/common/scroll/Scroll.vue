<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  data() {
    return {
      scroll: null,
    };
  },
  props: {
    probetype: {
      type: Number,
      default: 0,
    },
    pullUpLoad: {
      type: Boolean,
      default: false,
    },
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper, {
      probeType: this.probetype,
      click: true,
      pullUpLoad: this.pullUpLoad,
      // 
    });
    this.scroll.on("scroll", (position) => {
      // console.log(position.y) 
      this.$emit("scrollTop", position);
      
    });
    this.scroll.on('pullingUp',() => { 
      console.log('下拉刷新');
      this.$emit('finishPullUp')
      // console.log(this.scroll);
    })
  },
  methods: {
    scrollTo(x, y, time = 300) {
      // 防止 scroll 还没请求过来 
      this.scroll && this.scroll.scrollTo(x, y, time);
    },
    refresh() {
      this.scroll && this.scroll.refresh();
    }
  },
};
</script>

<style>
</style>