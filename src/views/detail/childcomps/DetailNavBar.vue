<template>
  <div >
    <nav-top>
      <div slot="left" @click="imgClick">
        <img src="../../../assets/img/common/back.svg" alt="" class="left-img">
      </div>
      <div slot="conter" class="detail-title" >
        <h6 v-for="(item,index) in titles" :key=index 
        class="detail-titile-item" :class="{active: currentIndex === index}" @click=textClick(index)>
        {{item}}
        </h6>
      </div>
    </nav-top>
  </div>
</template>

<script>
import NavTop from '../../../components/common/navbar/NavTop.vue'
export default {
  components: { NavTop },
  data() {
    return {
      titles:['商品','参数','评论','推荐'],
      currentIndex:0
    }
  },
  methods:{
    textClick(index) {
      this.currentIndex = index
      console.log(index);
    },
    imgClick() {
      history.back()
      // history.go(-1)
      // this.$router.back()
    }
  }

}
</script>

<style scoped>
  .detail-title {
    display: flex;
  }
  .detail-titile-item {
    flex:1;
    font-size:13px;
    font-weight: normal;
  }
  .left-img {
    margin-top: 12px; 
  }
  .active {
    color:var(--color-high-text)
  }
</style>