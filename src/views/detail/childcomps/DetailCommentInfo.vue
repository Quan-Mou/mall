<template>
  <div class="comment-info">
    <div class="detail-header">
      <div class="header-title">用户评价</div>
      <div class="more">
        更多 
        <!-- arrow-right 样式是写在 base.cs s 里面的 -->
        <i class="arrow-right"></i>
      </div>
    </div> 
    <!-- 防止数据还没过来，所以做个判断，有数据再让它展示 -->
    <div class="info-user" v-if="commentsInfo.user">
      <img :src="commentsInfo.user.avatar" alt="">
      <span>{{commentsInfo.user.uname}}</span>
    </div>
    <!-- v-if="commentsInfo.content && commentsInfo.created && commentsInfo.style" -->
    <div class="info-detail">
      <p class="comment">{{commentsInfo.content}}</p>
      <div class="comment-style">
        <span>{{commentsInfo.created}}</span>
        <span class="style">{{commentsInfo.style}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    commentsInfo:{
      type:Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style scoped>
  .comment-info{
    padding:5px 12px;
    border-bottom:5px solid hsl(210deg 30% 96%);
  }
  .detail-header {
    height: 50px;
    line-height:50px;
    border-bottom:1px solid hsl(0deg 0% 0% / 10%)
  }
  .header-title {
    float: left;
    font-size:15px;
  }
  .more {
    float:right;
    font-size:13px;
  }
  .info-user {
    padding:10px 0 5px;
  }
  .info-user img {
    width: 42px;
    height: 42px;
    border-radius:50%;
  }
  .info-user span {
    position: relative;
    top:-15px;
    margin-left:10px;
    font-size: 15px;
  }
  .comment {
    font-size:14px;
  }
  .info-detail{
    padding:0 5px 15px;
  }
  .info-detail span {
    font-size:12px;
    color: hsl(0deg 0% 60%);
    padding-top: 10px;
  }
  .comment-style {
    margin-top: 10px;
  }
  .style {
    margin-left:8px;
  }
</style>