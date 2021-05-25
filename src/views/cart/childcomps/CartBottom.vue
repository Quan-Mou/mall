<template>
  <div class="bottom">
    <check-button></check-button>
    <span class="settlement right">
      结算({{ this.$store.state.CartList.length }})
    </span>
    <span class="total-price right">合计: {{}}</span>
  </div>
</template>

<script>
import CheckButton from "./CheckButton.vue";
export default {
  name: "CartBottom",
  components: { CheckButton },
};
</script>

<style>
.bottom {
  height: 44px;
  background-color: black;
  position: absolute;
  left: 0;
  bottom: 49px;
  width: 100%;
  line-height: 44px;
}
.total-price {
  margin-right: 10px;
  font-size: 14px;
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
}
</style>