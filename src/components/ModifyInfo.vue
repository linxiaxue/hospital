<template>
  <div id="base">
    <Navigation/>
    <br>
    <br>

    <h1 class="title">原本信息</h1>
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

    <br>

    <h1 class="title">修改信息</h1>
    <el-form  :model="info" :rules="rules" :ref="info" v-loading="loading">

      <el-form-item prop="password">
        <el-input v-model="info.password" type="text" placeholder="密码"></el-input>
      </el-form-item>
      <el-form-item prop="name">
        <el-input v-model="info.name" type="text" placeholder="姓名"></el-input>
      </el-form-item>
      <el-form-item prop="age">
        <el-input v-model="info.age" type="text" placeholder="年龄"></el-input>
      </el-form-item>
      <el-form-item prop="gender">
        <el-input v-model="info.gender" type="text" placeholder="性别:0 女，1 男"></el-input>
      </el-form-item>
      <el-form-item prop="tel">
        <el-input v-model="info.tel" type="text" placeholder="手机"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button v-on:click="submit(info)" type="primary">提交</el-button>
      </el-form-item>
    </el-form>

  </div>
</template>

<script>
  import {setCookie,getCookie}from '../js/cookieUtil'
  import Navigation from './Navigation'
  export default {
    name: "ModifyInfo",
    components: {Navigation},

    data(){
      return{
        user:[{ //接收的原本信息
          userID:'',
          password:'',
          role:'',
          name:'',
          age:'',
          gender:'',
          tel:'',
          areaID:'',
        }],
        info:[{ //发送的修改信息
          userID:'',
          password:'',
          role:'',
          name:'',
          age:'',
          gender:'',
          tel:'',
          areaID:'',
        }],
        rules: {
          userID: [{required: true, message: '', trigger: 'blur'}],
          password: [{required: true, message: '', trigger: 'blur'}],
          role: [{required: true, message: '', trigger: 'blur'}],
          name: [{required: true, message: '', trigger: 'blur'}],
          age: [{required: true, message: '', trigger: 'blur'}],
          gender: [{required: true, message: '', trigger: 'blur'}],
          tel: [{required: true, message: '', trigger: 'blur'}],
          areaID: [{required: true, message: '', trigger: 'blur'}]
          //要是还需要限制userID和role不可修改的话，另加validate，与原本值比较，不同则提示
          //或者直接不让填，cookie储存/获取userID和role...?
        },
        loading:false
      }
    },

    methods:{

      // submitFrom(formName){
      //   this.$refs[formName].validate(valid=> {
      //     if (valid){
      //       var cookieApp=getCookie("userID")
      //       console.log("验证成功")
      //       this.$axios.post("/enurse/addPatient",{
      //         name:this.NewPatient.name,
      //         age:this.NewPatient.age,
      //         gender:this.NewPatient.gender,
      //         rate:this.NewPatient.rate,
      //         userID:cookieApp,
      //       })
      //         .then(resp=>{
      //           if (resp.status === 200){
      //             alert("添加病人信息成功")
      //           } else{
      //             alert("添加失败")
      //           }
      //         })
      //         .catch(error=>{
      //           alert("失败")
      //         })
      //     }else {
      //       alert("失败")
      //     }
      //   });
      // },

      myInfo(){ //原本信息
        var cookieMy=getCookie("userID");
        this.$axios.post('/getInfo',{
          userID: cookieMy
        })
          .then(res=>{
            console.log(JSON.stringify(res));
            var jsonobj=JSON.parse(JSON.stringify(res));
            var myArray=new Array()
            myArray[0] = jsonobj.data;
            this.user=myArray;
          })
          .catch(error=>{
            console.log(error);
          })
      },

      submit(formName){ //提交新信息
        //需要this.$refs[formName].validate(valid=>...吗？
        var cookie=getCookie("userID");
        this.$axios.post('/modifyInfo',{
          userID:cookie,
          password:this.info.password,
          role:this.info.role,
          name: this.info.name,
          age:this.info.age,
          gender:this.info.gender,
          tel:this.info.tel,
          areaID:this.info.areaID,
        })
          .then(resp=>{
            console.log("提交成功")
            alert("提交成功")
          })
          .catch(error=>{
            console.log(error);
          })
      },



      genderDisplay(row, column) {
        if (row.rate === 0) {
          return '女'
        }
        else if (row.rate === 1) {
          return '男'
        }
        else {
          return '——'
        }
      },

      // allMeetings() {
      //   this.$axios.post('/user/contribution/modify/get',{
      //     id:this.$store.state.contributionID
      //   })
      //     .then(res => {
      //       console.log("拦截器2");
      //       console.log("all   "+JSON.stringify(res));
      //       console.log(JSON.stringify(res.data));
      //       var jsonobj=JSON.parse(JSON.stringify(res));
      //       this.contribution=jsonobj.data.contribution;
      //       console.log("contribution    "+this.contribution)
      //       console.log("     " +JSON.stringify(this.topics));
      //     })
      //     .catch(error=>{
      //       console.log(error);
      //       console.log("失败");
      //     })
      // },
    },

    mounted(){
      this.myInfo();
    },

  }
</script>

<style scoped>
  #base{
    background: url("../assets/background/common.png") repeat;
    background-position: center;
    height: 100%;
    width: 100%;
    background-size: cover;
    position: absolute;
  }
  .title {
    margin: 0px auto 10px auto;
    text-align: center;
    color: #494e8f;
    font-size: 25px;
  }
</style>
