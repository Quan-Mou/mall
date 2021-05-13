<template>
    <div>
      <swiper class="swiper-item">
      <swiper-item v-for="(item,index) in swiperImg" :key="index" >
        <img :src="item" alt="" @load="detailImgLoad">
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
  },
  data() {
    return{
      isSwiperLoad:true
    }
  },
  methods:{
    detailImgLoad() {
      if(this.isSwiperLoad) {
        this.$emit('swiperImgLoad')
        this.isSwiperLoad = false
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