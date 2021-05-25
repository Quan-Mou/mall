<template>
  <scroll :probe-type="3" class="content" ref="scroll">
    <cart-list-item
      v-for="(item, index) in $store.state.CartList"
      :key="index"
      :cart-info="item"
      >{{ item }}</cart-list-item
    >
  </scroll>
</template>

<script>
import Scroll from "../../../components/common/scroll/Scroll.vue";
import CartListItem from "./CartListItem.vue";
export default {
  name: "CartList",
  components: { Scroll, CartListItem },
  activated() {
    this.$refs.scroll.refresh();
  },
};
</script>

<style scoped>
.content {
  /* height: calc(100% - 93px); */
  position: absolute;
  top: 44px;
  left: 0;
  right: 0;
  bottom: 93px;
  overflow: hidden;
}
</style>