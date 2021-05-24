export { debounce } from './utils'

export const imgLoadMixin = {
  mounted() {
    this.$bus.$on('itemImgLoad', debounce(this.$refs.scroll.refresh, 200))
    console.log('混入');
  }
}

export const BackTopMixin = {
  data() {
    return {
      isBackTop:false
    }
  },
  methods: {
    backTopClick() {
      this.$refs.scroll.scrollTo(0,0)
    }
  }
}