<template>
  <div id="cart">
    <nav-top class="cart-nav"><div slot="conter">购物车({{CartListLength}})</div></nav-top>
      <cart-list></cart-list>
      <cart-bottom></cart-bottom>
  </div>
</template>

<script>
import NavTop from '../../components/common/navbar/NavTop.vue'
import CartList from './childcomps/CartList.vue'
import {mapGetters} from 'vuex'
import CartBottom from './childcomps/CartBottom.vue'

export default {
  components: {NavTop, CartList, CartBottom,  },
  computed:{
    ...mapGetters(['CartListLength'])
  },

}
</script>

<style scoped>
#cart {
  height: 100vh;
}
  .cart-nav { 
    background-color:var(--color-high-text);
    color:#fff;
    font-weight: 700;
  }
  .cart-nav div {
    letter-spacing:1px;
  }
</style>