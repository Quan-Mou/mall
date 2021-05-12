<template>
    <div>
      <swiper class="swiper-item">
      <swiper-item v-for="(item,index) in swiperImg" :key="index" >
        <img :src="item" alt="">
        {{item}}
      </swiper-item>
    </swiper>
    
    </div>

</template>

<script>
import Swiper from '../../../components/common/swiper/Swiper.vue'
import SwiperItem from '../../../components/common/swiper/SwiperItem.vue'

export default {
  components: { Swiper,SwiperItem,  },
  props: {
    swiperImg:{
      type:Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style>
  .swiper-item {
    height: 300px;
    overflow:hidden;
  }
</style>