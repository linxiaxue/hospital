<template>
  <div id="base">
    <Navigation/>
    <br>
    <h3 class="title">急诊护士</h3>
    <router-link to="/enurse/addPatient">
      <el-button type="primary">登记病人信息及病情等级（新收入）</el-button>
    </router-link>
    <br>
    <br>
    <router-link to="/enurse/selectPatient">
      <el-button type="primary">所有病人信息查看与筛选</el-button>
    </router-link>
  </div>
</template>

<script>
  import Navigation from './Navigation'
  export default {
    name: "Enurse",
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
