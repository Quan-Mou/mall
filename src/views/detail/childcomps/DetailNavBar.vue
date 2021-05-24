<template>
  <nav-top>
    <div slot="left" class="back" @click=Back>
      <img src="../../../assets/img/common/back.png" alt="">
    </div>
    <div slot="conter" class="conter">
      <div v-for="(item,index) in titles" :key="index" class="conter-item" :class="{active:currentIndex === index}" @click="itemClick(index)">
        {{item}}
      </div>
    </div>
  </nav-top>
</template>

<script>
import NavTop from '../../../components/common/navbar/NavTop.vue'
export default {
  components: { NavTop },
  data(){
    return{
      titles:['商品','参数','评论','推荐'],
      currentIndex:0
    }
  },
  methods:{
    itemClick(index){
      this.currentIndex = index
      this.$emit('navClick',index)
    },
    Back() {
      this.$router.back()
    }
  }
}
</script>

<style scoped>
  .conter {
    display: flex;
    font-size:13px
  }
  .conter-item {
    flex:1
  }
  .back {
    margin-top:7px;
  }
  .active {
    color:var(--color-high-text)
  }
</style>