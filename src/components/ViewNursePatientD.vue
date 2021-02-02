<template>
  <div class="base">
    <Navigation/>
    <br>
    <br>
    <el-table :data="patient">
      <el-table-column prop="pid" label="病人ID" align="center">
      </el-table-column>
      <el-table-column prop="name" label="姓名" align="center">
      </el-table-column>
      <el-table-column prop="age"  label="年龄" align="center">
      </el-table-column>
      <el-table-column prop="gender"  label="性别" align="center">
        <template slot-scope="scope">
          <span v-if="scope.row.gender == '0' ">女</span>
          <span v-if="scope.row.gender == '1' ">男</span>
        </template>
      </el-table-column>
      <el-table-column prop="rate"  label="病情评级" align="center">
        <template slot-scope="scope">
          <span v-if="scope.row.rate == '0' ">轻症</span>
          <span v-if="scope.row.rate == '1' ">重症</span>
          <span v-if="scope.row.rate == '2' ">危重症</span>
        </template>
      </el-table-column>
      <el-table-column prop="state"  label="生命状态" align="center">
        <template slot-scope="scope">
          <span v-if="scope.row.state == '0' ">在院治疗</span>
          <span v-if="scope.row.state == '1' ">康复出院</span>
          <span v-if="scope.row.state == '2' ">病亡</span>
        </template>
      </el-table-column>
      <el-table-column prop="wstate"  label="等待状态" align="center">
        <template slot-scope="scope">
          <span v-if="scope.row.wstate == '0' ">不在等待中</span>
          <span v-if="scope.row.wstate == '1' ">等待换区</span>
          <span v-if="scope.row.wstate == '2' ">等待出院</span>
        </template>
      </el-table-column>
      <el-table-column prop="area"  label="病区" align="center">
        <template slot-scope="scope">
          <span v-if="scope.row.area == '0' ">轻症区</span>
          <span v-if="scope.row.area == '1' ">重症区</span>
          <span v-if="scope.row.area == '2' ">危重症区</span>
          <span v-if="scope.row.area == '3' ">隔离区</span>
          <span v-if="scope.row.area == '-1' ">死亡或出院</span>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  import {setCookie,getCookie}from '../js/cookieUtil'
  import Navigation from './Navigation'
  export default {
    name: "ViewNursePatientD",
    components: {Navigation},
    data(){
      return{
        patient:[{
          pid:'',
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
      this.np();
    },
    methods:{
      np(){
        this.$axios.post('/doctor/viewNurse/viewPatient',{
          wnID: this.$store.state.WNID
        })
          .then(resp=>{
            console.log("then(resp)");
            console.log("resp     "+JSON.stringify(resp));
            var jsonobj=JSON.parse(JSON.stringify(resp));
            this.patient=jsonobj.data;
          })
      },

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
