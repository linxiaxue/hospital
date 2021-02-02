<!--好像不需要这个了？-->

<template>
  <div class="base_info">
    <Navigation/>
    <br>
    <br>
    <el-table :data="user">
      <el-table-column prop="userID" label="工号" align="center">
      </el-table-column>
      <el-table-column prop="password" label="密码" align="center">
      </el-table-column>
      <el-table-column prop="role"  label="身份" align="center">
      </el-table-column>
      <el-table-column prop="name"  label="姓名" align="center">
      </el-table-column>
      <el-table-column prop="age"  label="年龄" align="center">
      </el-table-column>
      <el-table-column prop="gender"  label="性别" align="center" >
        <template slot-scope="scope">
          <span v-if="scope.row.gender == '0' ">女</span>
          <span v-if="scope.row.gender == '1' ">男</span>
        </template>
      </el-table-column>
      <el-table-column prop="tel"  label="手机" align="center">
      </el-table-column>
      <el-table-column prop="areaID"  label="病区" align="center">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  import {setCookie,getCookie}from '../js/cookieUtil'
  import Navigation from './Navigation'
  export default {
    name: "GetInfo",
    components: {Navigation},
    data(){
      return{
        user:[{
          userID:'',
          password:'',
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
      this.myInfo();
    },
    methods:{
      myInfo(){
        var self = this; //
        var cookieMy=getCookie("userID")
        this.$axios.post('/getInfo',{
          userID: cookieMy
        })
          .then(res=>{
            console.log(JSON.stringify(res));
            var jsonobj=JSON.parse(JSON.stringify(res));
            var myArray=new Array()
            myArray[0] = jsonobj.data
            self.user=myArray;
          })
          .catch(error=>{
            console.log(error);
          })
      },

    }
  }
</script>

<style scoped>
  .base_info{
    background: url("../assets/background/common.png") repeat;
    background-position: center;
    height: 100%;
    width: 100%;
    background-size: cover;
    position: fixed;
  }
</style>
