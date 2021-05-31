<template>
  <div class="bottom">
    <div class="cart-item-bottom" @click="CheckBottom">
      <check-button :is-checked="isSelect"></check-button>
      <span>全选</span>
    </div>
    <span class="total-price">合计: ￥{{ total }}</span>
    <span class="settlement right" @click="jiesuan">
      结算({{ this.$store.state.CartList.length }})
    </span>
  </div>
</template>

<script>
import CheckButton from "./CheckButton.vue";
import { mapGetters } from "vuex";

// import obj from "./../../../components/common/toast/index";
export default {
  name: "CartBottom",
  components: { CheckButton },
  methods: {
    CheckBottom() {
      // 判断 如果 有一个没选中，全选不选中
      // let isSeletedAll = this.$storef
      if (this.isSelect) {
        //如果选中的情况下，点击就是 不选中
        this.$store.state.CartList.forEach((item) => (item.checked = false));
      } else {
        // 不选中的情况下，点击就是全选中
        this.$store.state.CartList.forEach((item) => (item.checked = true));
      }
    },
    jiesuan() {
      if (!this.isSelect) {
        // this.$toast.nh
        this.$toast.show("请选择商品", 500);
      }
    },
  },
  computed: {
    ...mapGetters(["CartListLength"]),
    total() {
      return this.$store.state.CartList.filter((item) => {
        return item.checked;
      }).reduce((pre, item) => {
        return (pre += item.price * item.count);
      }, 0);
    },
    isSelect() {
      // return this.$store.state.CartList.filter((item) => {
      //   // return item.checked ;
      //   // 如果 有一个没选中，全选就是不选中
      //   // return item.checked === false;
      //   !this.checked
      // });
      // 判断如果没有商品的情况下
      if (this.CartListLength == 0) return false;
      // 1.
      return !this.$store.state.CartList.filter((item) => !item.checked).length;
      // 2.
      // return !this.$store.state.CartList.find((item) => !item.checked);
      // 3.
      // for (let i of this.$store.state.CartList) {
      //   if (i.checked) {
      //     return true;
      //   }
      // }
      // return false;
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
