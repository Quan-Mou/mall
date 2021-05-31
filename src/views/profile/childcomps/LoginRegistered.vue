<template>
  <div class="login">
    <div class="head">
      <div class="img">
        <img src="../../../assets/img/profile/avatar.svg" alt="" />
      </div>
      <div class="login-info">
        <div class="login-registered">
          <span>登录/注册</span>
        </div>
        <div class="phone-info">
          <img src="../../../assets/img/profile/myphone.svg" alt="" />
          <span class="phone"> 暂无绑定手机号</span>
        </div>
      </div>
    </div>
    <div class="arrows right"></div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.login {
  padding: 15px;
  background-color: var(--color-tint);
  /* display: flex; */
  margin-top: -5px;
}
.head {
  display: flex;
}
.img img {
  width: 60px;
  height: 60px;
  /* margin-top: 10px; */
  line-height: 60px;
}
.login-info {
  color: #fff;
  margin: 10px 0 0 10px;
}
.phone-info img {
  width: 20px;
  height: 20px;
  position: relative;
  top: 4px;
  left: -2px;
  color: rgb(255, 255, 255);
}
.login-registered {
  font-size: 16px;
}
.phone {
  font-size: 13px;
  margin-left: -3px;
  margin-top: 10px;
}
.arrows {
  width: 10px;
  height: 10px;
  border-top: 2.5px solid #fff;
  border-left: 2.5px solid #fff;
  color: #fff;
  transform: rotate(132deg);
  margin-top: -40px;
}
</style>