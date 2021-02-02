<template>
  <div id="base">
    <Navigation/>
    <br>
    <h3 class="title">主治医生</h3>


    <router-link to="/doctor/selectPatient">
      <el-button type="primary">当前病区病人信息查看与筛选</el-button>
    </router-link>


    <br>
    <br>
    <router-link to="/doctor/addNATS">
      <el-button type="primary">为病人添加新的核酸检测单</el-button>
    </router-link>


    <br>
    <br>
    <router-link to="/doctor/viewNurse">
      <el-button type="primary">查看当前区域护士信息</el-button>
    </router-link>


  </div>
</template>

<script>
  import Navigation from './Navigation'
  export default {
    name: "Doctor",
    components: {Navigation},
  }
</script>

<style scoped>
  #base{
    background: url("../assets/background/common.png") repeat;
    background-position: center;
    height: 100%;
    width: 100%;
    background-size: cover;
    position: fixed;
  }
  .title {
    margin: 0px auto 40px auto;
    text-align: center;
    color: #494e8f;
    font-size: 30px;
  }
</style>
