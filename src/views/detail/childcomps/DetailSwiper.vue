<template>
  <swiper class="detail-swiper">
    <swiper-item v-for="(item,index) in topImgs" :key="index">
      <img :src="item" alt="" @load="ImgLoad">
    </swiper-item>
  </swiper>
</template>

<script>
import Swiper from '../../../components/common/swiper/Swiper.vue'
import SwiperItem from '../../../components/common/swiper/SwiperItem.vue'
export default {
  components: { Swiper, SwiperItem },
  props:{
    topImgs:{ 
      type:Array,
      default(){
        return []
      }
    }
  }, 
  data() {
    return {
      isImg:true
    }
  },
  methods:{
    ImgLoad() {
      if(this.isImg) {
        this.$emit('ImgLoad')
        this.isImg = false
      }
    }
  }
}
</script>

<style scoped>
.detail-swiper {
    height: 300px;
    overflow: hidden;
  }
</style>