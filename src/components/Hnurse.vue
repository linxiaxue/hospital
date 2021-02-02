<template>
  <div id="base">
    <Navigation/>
    <br>
    <h3 class="title">护士长</h3>

    <!--单独查看不写了，和筛选一起-->
    <router-link to="/hnurse/selectPatient">
      <el-button type="primary">当前病区病人信息查看与筛选</el-button>
    </router-link>

    <br>
    <br>
    <router-link to="/hnurse/viewWnurse">
      <el-button type="primary">当前病区病房护士信息查看</el-button>
    </router-link>

    <!-- /hnurse/viewWnurse/viewPatient 查看病房护士负责的病人信息：应在护士列表中加一列操作，再进入单个护士进行查看-->

    <br>
    <br>
    <router-link to="/hnurse/addWnurse">
      <el-button type="primary">新增病房护士</el-button>
    </router-link>

    <br>
    <br>
    <router-link to="/hnurse/deleteWnurse">
      <el-button type="primary">删除已有病房护士信息</el-button>
    </router-link>

    <br>
    <br>
    <router-link to="/hnurse/viewBed">
      <el-button type="primary">当前病区病床信息查看</el-button>
    </router-link>

    <!-- /hnurse/viewBed/viewPatient 查看病床的病人信息：应在病床列表中加一列操作，再进入单个病床进行查看-->

  </div>
</template>

<script>
  import Navigation from './Navigation'
  export default {
    name: "Hnurse",
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
