<template>
  <div>
    <div class="cart-check" :class="{ 'cart-active': isChecked }">
      <img src="../../../assets/img/cart/tick.svg" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: "CheckButton",
  props: {
    isChecked: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>
.cart-check {
  border-radius: 50%;
  border: 2px solid #aaa;
  height: 18px;
  width: 18px;
}

.cart-active {
  border-color: red;
  background-color: red;
}
</style>