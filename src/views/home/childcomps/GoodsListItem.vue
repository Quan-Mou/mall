<template>
  <div class="goods-list-item" @click="goodsItem">
    <img v-lazy="showImg" alt="" @load="ImgLoad" />
    <div class="goods-info">
      <p>{{ goodsitem.title }}</p>
      <span class="price">{{ goodsitem.price }}</span>
      <span class="collect">{{ goodsitem.cfav }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    goodsitem: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      // id:this.goodsitem.iid
    };
  },
  methods: {
    ImgLoad() {
      this.$bus.$emit("itemImgLoad");
      // console.log(this.$bus);
      // this.$bus 是空的，所以需要在 Vue原型上定义一下
    },
    goodsItem() {
      // this.$emit('goodsItem')
      this.$router.push("/detail/" + this.goodsitem.iid);
      // this.$router.push('/detail/'+ ‘)
    },
  },
  computed: {
    showImg() {
      return this.goodsitem.image || this.goodsitem.show.img;
      // return this.goodsitem.show.img || this.goodsitem.image
    },
  },
};
</script>

<style scoped>
.goods-list-item {
  padding-bottom: 40px;
  position: relative;
  width: 48%;
  /* display: flex; */
}
.goods-list-item img {
  width: 100%;
  border-radius: 5px;
  height: 100%;
}

.goods-info {
  font-size: 12px;
  position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;
  overflow: hidden;
  text-align: center;
}

.goods-info p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 3px;
}

.goods-info .price {
  color: var(--color-high-text);
  margin-right: 20px;
}

.goods-info .collect {
  position: relative;
}

.goods-info .collect::before {
  content: "";
  position: absolute;
  left: -15px;
  top: 0;
  width: 14px;
  height: 14px;
  /* background: url("~assets/img/common/collect.svg") 0 0/14px 14px; */
  background: url("../../../assets/img/common/collect.svg") 0 0/14px 14px;
}
</style>