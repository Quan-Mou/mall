<template>
  <div class="bottom-bar">
    <div class="service-info item-bar">
      <div class="service">
        <i class="ico service-ico"></i>
        <span class="text">客服</span>
      </div>
      <div class="shop">
        <i class="ico shop-ico"></i>
        <span class="text">店铺</span>
      </div>
      <div class="collect">
        <i class="ico"></i>
        <span class="text">收藏</span>
      </div>
    </div>
    <div class="buy-info item-bar">
      <div class="cart" @click="addCart">加入购物车</div>
      <div class="buy">购买</div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    addCart() {
      // console.log('a');
      this.$emit("addToCart");
    },
  },
};
</script>

<style>
.bottom-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 58px;
  line-height: 58px;
  background-color: #fff;
  display: flex;
  text-align: center;
}
.item-bar {
  flex: 1;
  display: flex;
}
.item-bar > div {
  flex: 1;
}
.ico {
  display: block;
  width: 22px;
  height: 22px;
  margin: 10px auto -17px;
  background: url("../../../assets/img/detail/detail_bottom.png") 0 0/100%;
}
.service-ico {
  background-position: 0 -54px;
}
.cart {
  background-color: #ffe817;
  padding: 0 4px;
  font-size: 14px;
}
.buy {
  background-color: #f69;
  color: #fff;
  font-size: 14px;
}
.shop-ico {
  background-position: 0 -98px;
}
.text {
  font-size: 13px;
}
</style>