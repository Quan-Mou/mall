<template>
  <div class="shop-info">
    <div class="item-button">
      <check-button
        :is-checked="cartInfo.checked"
        @click.native="cartLiemClick"
      ></check-button>
    </div>
    <div class="img">
      <img :src="cartInfo.img" alt="" />
    </div>
    <div class="item-info">
      <div class="title">{{ cartInfo.title }}</div>
      <div class="desc">商品描述: {{ cartInfo.desc }}</div>
      <div class="price">
        <div class="item-price left">￥{{ cartInfo.price }}</div>
        <div class="item-count right">x{{ cartInfo.count }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import CheckButton from "./CheckButton.vue";
export default {
  name: "CartListItem",
  components: {
    CheckButton,
  },
  props: {
    cartInfo: {
      type: Object,
    },
  },
  methods: {
    cartLiemClick() {
      this.cartInfo.checked = !this.cartInfo.checked;
    },
  },
};
</script>

<style scoped>
.shop-info {
  display: flex;
  padding: 5px;
  width: 100%;
  border-bottom: 1px solid #ccc;
  /* font-size:0; */
}
.img {
  padding: 5px;
}
.img img {
  width: 80px;
  height: 100px;
  border-radius: 5px;
}
.item-info {
  padding: 5px 10px;
  overflow: hidden;
}
.title,
.desc {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  font-size: 14px;
}
.desc {
  font-size: 14px;
  color: hsl(0deg 0% 40%);
}
.title {
  margin-bottom: 15px;
  color: hsl(0deg 0% 20%);
  font-size: 17px;
}
.price {
  margin-top: 25px;
  font-size: 17px;
}
.item-price {
  color: hsl(16deg 100% 50%);
}
.item-button {
  /* width: 14%;
  display: flex;
  align-items: center;
  justify-content: center; */

  width: 14%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>