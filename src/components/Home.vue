<template>
  <div id="base_home">
    <div class="main">
      <h3 class="home_title">医院信息管理系统</h3>
      <router-link to="/login">
        <el-button type="primary">登录</el-button> <!--style="width:120px; height:50px; background:#2aabd2; border:white"-->
      </router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Home"
  }
</script>

<style scoped>
  #base_home{
    background: url("../assets/background/home.png") repeat;
    background-position: center;
    height: 100%;
    width: 100%;
    background-size: cover;
    position: fixed;
  }
  .main{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -80%);
  }
  .home_title {
    position: center;
    font-size: 30px;
    margin: 0px auto 40px auto;
    text-align: center;
    color: #494e8f;
  }
  /*.el-button-primary{*/
    /*color: #fff;*/
    /*font-size: 23px;*/
    /*background-color: #2aabd2;*/
    /*border-color: lavender;*/
    /*width:145px;*/
    /*height:55px;*/
    /*border-left-width: 5px;*/
    /*border-right-width: 5px;*/
    /*border-top-width: 5px;*/
    /*border-bottom-width: 5px;*/
  /*}*/
  /*.el-button-primary:hover{*/
    /*background-color: cadetblue;*/
    /*border-color: gray;*/
    /*border-left-width: 5px;*/
    /*border-right-width: 5px;*/
    /*border-top-width: 5px;*/
    /*border-bottom-width: 5px;*/
  /*}*/
</style>
