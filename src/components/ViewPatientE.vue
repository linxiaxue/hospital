<template>
  <div class="base">
    <Navigation/>
    <br>
    <br>
    <el-table :data="patient">
      <el-table-column prop="PID" label="病人ID" align="center">
      </el-table-column>
      <el-table-column prop="name" label="姓名" align="center">
      </el-table-column>
      <el-table-column prop="age"  label="年龄" align="center">
      </el-table-column>
      <el-table-column prop="gender"  label="性别" align="center">
      </el-table-column>
      <el-table-column prop="rate"  label="病情评级" align="center">
      </el-table-column>
      <el-table-column prop="state"  label="生命状态" align="center">
      </el-table-column>
      <el-table-column prop="wstate"  label="等待状态" align="center">
      </el-table-column>
      <el-table-column prop="area"  label="病区" align="center">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  import {setCookie,getCookie}from '../js/cookieUtil'
  import Navigation from './Navigation'
  export default {
    name: "ViewPatientE",
    components: {Navigation},
    data(){
      return{
        patient:[{
          PID:'',
          name:'',
          age:'',
          gender:'',
          rate:'',
          state:'',
          wstate:'',
          area:'',
        }],
      }
    },
    mounted(){
      console.log("页面初始化");
      this.patients();
    },
    methods:{
      patients(){
        this.$axios.get('/enurse/viewPatient')
          .then(resp=>{
            console.log("then(resp)");
            console.log("resp     "+JSON.stringify(resp));
            var jsonobj=JSON.parse(JSON.stringify(resp));
            this.patient=jsonobj.data;
          })
      }
    }
  }
</script>

<style scoped>
  .base{
    background: url("../assets/background/common.png") repeat;
    background-position: center;
    height: 100%;
    width: 100%;
    background-size: cover;
    position: fixed;
  }
</style>
