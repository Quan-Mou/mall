<template>
  <div class="toast" v-show="isShow">
    <div>{{ message }}</div>
    <!-- <div>已加入购物车</div> -->
  </div>
</template>

<script>
export default {
  name: "Toast",
  // props: {
  //   isShow: {
  //     type: Boolean,
  //     default: false,
  //   },
  //   message: {
  //     type: String,
  //     default: "",
  //   },
  // },
  data() {
    return {
      isShow: false,
      message: "",
    };
    // isShow:false;
    // message:'';
  },
  methods: {
    show(message, duration) {
      this.message = message;
      this.isShow = true;
      setTimeout(() => {
        this.isShow = false;
        this.message = "";
      }, duration);
    },
  },
};
</script>

<style scoped>
.toast {
  position: fixed;
  z-index: 100000;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.8);
  border-radius: 5px;
  color: #fff;
  padding: 7px 10px;
  margin-top: 18px;
}
</style>