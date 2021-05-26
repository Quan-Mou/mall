<template>
  <div class="bottom">
    <div class="cart-item-bottom" @click="CheckBottom">
      <check-button></check-button>
      <span>全选</span>
    </div>
    <span class="total-price">合计: {{}}</span>
    <span class="settlement right">
      结算({{ this.$store.state.CartList.length }})
    </span>
  </div>
</template>

<script>
import CheckButton from "./CheckButton.vue";
export default {
  name: "CartBottom",
  components: { CheckButton },
  methods: {
    CheckBottom() {
      console.log("点击了");
    },
  },
};
</script>

<style scoped>
.cart-item-bottom {
  display: flex;
  width: 70px;
  height: 30px;
  align-content: center;
  line-height: 18px;
  justify-content: center;
  margin: 12px 0;
}
.cart-item-bottom span {
  margin-left: 4px;
}
.bottom {
  height: 44px;
  background-color: #eeeeee;
  position: absolute;
  display: flex;
  left: 0;
  bottom: 49px;
  width: 100%;
  line-height: 44px;
}
.total-price {
  margin-right: 10px;
  font-size: 14px;
  flex: 1;
  margin-left: 20px;
}
.settlement {
  width: 85px;
  height: 30px;
  line-height: 30px;
  color: #fff;
  background-color: #ff4500;
  text-align: center;
  border-radius: 15px;
  margin: 7px 10px 0 0;
  font-size: 14px;
  flex: 1;
}
</style>