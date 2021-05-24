<template>
  <div class="params-info" >
    <!-- 这里数据加v-if 是反正数据还没拿过来，就已经渲染页面了，所以加个判断是他数据已经过来在渲染 -->
    <div v-if="paramsInfo.rule">
      <table v-for="(table,index) in paramsInfo.rule.tables" :key="index" >
         <tr v-for="(tr,indey) in table" :key="indey">
           <td v-for="(td ,indez) in tr" :key="indez">{{td}}</td>
         </tr>
      </table>
    </div>
    <div >
      <table v-if="paramsInfo.info">
        <tr v-for="(tr,index) in paramsInfo.info.set" :key="index">
          <td class="info-param-key">{{tr.key}}</td>
          <td class="param-value">{{tr.value}}</td>
        </tr>
      </table> 
    </div>
    <!-- <div class="info-img" v-if="paramsInfo.image.length !== 0">
      <img :src="paramsInfo.image" alt="">
    </div> -->
  </div>
</template>

<script>
export default {
  props:{
    paramsInfo:{
      type:Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style>
  .params-info {
    padding:20px 15px;
    border-bottom:5px solid #f2f5f8;;
  }
  table tr {
    border-bottom:1px solid rgba(100,100,100,.1);
    /* width: 100%; */
    /* height: 42px; */
  }
  table {
    width: 100%;
    border-collapse:collapse;
    font-size:14px;
  }
   table td {
    height: 42px;
  }

  .info-param-key {
    width: 95px;
  }
  .param-value {
    color:#eb4868
  }
  .info-img {
    width: 100%;
  }
</style>