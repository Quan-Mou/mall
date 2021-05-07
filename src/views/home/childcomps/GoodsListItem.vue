<template>
  <div class="goods-list-item">
    <a :href="goodsitem.link">
      <img :src="goodsitem.show.img" alt="" @load="ImgLoad">
    <div class="goods-info">
      <p>{{goodsitem.title}}</p>
      <span class="price">{{goodsitem.price}}</span>
      <span class="collect">{{goodsitem.cfav}}</span>
    </div>
    </a>
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
  methods:{
    ImgLoad() {
      this.$bus.$emit('itemImgLoad')
      // console.log(this.$bus);
      // this.$bus 是空的，所以需要在 Vue原型上定义一下
    }
  }
};
</script>

<style>
.goods-list-item {
    padding-bottom: 40px;
    position: relative;
    /* width: 150px; */
    width: 48%;
  }
  .goods-list-item img {
    width: 100%;
    border-radius:5px;
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
    content: '';
    position: absolute;
    left: -15px;
    top: 0;
    width: 14px;
    height: 14px;
    /* background: url("~assets/img/common/collect.svg") 0 0/14px 14px; */
    background: url("../../../assets/img/common/collect.svg") 0 0/14px 14px;
  }
 
  
</style>