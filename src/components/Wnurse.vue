<template>
  <div id="base">
    <Navigation/>
    <br>
    <h3 class="title">病房护士</h3>
    <!--单独查看不写了，和筛选一起-->
    <router-link to="/wnurse/selectPatient">
      <el-button type="primary">所负责病人信息查看与筛选</el-button>
    </router-link>
    <br>
    <br>
    <router-link to="/wnurse/addDS">
      <el-button type="primary">添加新的每日状态表</el-button>
    </router-link>
  </div>
</template>

<script>
  import Navigation from './Navigation'
  export default {
    name: "Wnurse",
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
