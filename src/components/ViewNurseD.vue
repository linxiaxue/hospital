<template>
  <div class="base">
    <Navigation/>
    <br>
    <h3 class="title">护士信息</h3>
    <br>
    <el-table :data="nurse">
      <el-table-column prop="userID" label="工号" align="center">
      </el-table-column>
      <el-table-column prop="role" label="身份" align="center">
        <template slot-scope="scope">
          <span v-if="scope.row.role == 'HNurse' ">护士长</span>
          <span v-if="scope.row.role == 'WNurse' ">病房护士</span>
        </template>
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
      <el-table-column prop="tel"  label="手机" align="center">
      </el-table-column>
      <el-table-column prop="areaID"  label="病区" align="center">
        <template slot-scope="scope">
          <span v-if="scope.row.areaID == '0' ">轻症区</span>
          <span v-if="scope.row.areaID == '1' ">重症区</span>
          <span v-if="scope.row.areaID == '2' ">危重症区</span>
        </template>
      </el-table-column>
      <el-table-column prop="ope" label="操作" align="center">
        <template slot-scope="scope">
            <el-button type="button" v-if="scope.row.role=='WNurse'"
                       v-on:click="mark(scope.row.userID)">查看病人信息</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  import {setCookie,getCookie}from '../js/cookieUtil'
  import Navigation from './Navigation'
  export default {
    name: "ViewNurseD",
    components: {Navigation},
    data(){
      return{
        nurse:[{
          userID:'',
          role:'',
          name:'',
          age:'',
          gender:'',
          tel:'',
          areaID:'',
        }],
      }
    },
    mounted(){
      console.log("页面初始化");
      this.nurses();
    },
    methods:{
      nurses(){
        var cookieMy=getCookie("userID")
        this.$axios.post('/doctor/viewNurse',{
          userID: cookieMy
        })
          .then(resp=>{
            console.log("then(resp)");
            console.log("resp     "+JSON.stringify(resp));
            var jsonobj=JSON.parse(JSON.stringify(resp));
            this.nurse=jsonobj.data;
          })
      },
      mark(id){
        this.$store.commit('clearWNID');
        this.$store.commit('setWNID',id);
        this.$router.replace({path: '/doctor/viewNurse/viewPatient'});
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
