<template>
  <div class="detail">
    <detail-nav-bar></detail-nav-bar>
  </div>

</template>

<script>
import DetailNavBar from './childcomps/DetailNavBar.vue'
import {getDetail} from "../../network/detail"
export default {
  components: { DetailNavBar },
  data() {
    return {
      iid:null,
      swiperImg:[]
    } 
  },
  created() {
    // 保存路由传入的的id
    this.iid = this.$route.params.iid;
    
    // 根据 iid 得到 详情数据
    getDetail(this.iid).then(ret => {
      console.log(ret);
    })
  }

}
</script>

<style>

</style>