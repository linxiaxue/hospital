<template>
  <div id="base" >
    <Navigation/>
    <el-form :model="NewWnurse" :rules="rules" :ref="NewWnurse" v-loading="loading">
      <h2 class="title">添加新的病房护士信息</h2>
      <el-form-item prop="userID" > <!--所添加护士的userID-->
        <el-input type="text" v-model="NewWnurse.userID" placeholder="工号: 新员工不必填"></el-input>
      </el-form-item>
      <el-form-item prop="role" >
        <el-input type="text" v-model="NewWnurse.role" placeholder="身份：病房护士 WNurse"></el-input>
      </el-form-item>
      <el-form-item prop="name" >
        <el-input type="text" v-model="NewWnurse.name" placeholder="姓名"></el-input>
      </el-form-item>
      <el-form-item prop="age" >
        <el-input type="text" v-model="NewWnurse.age" placeholder="年龄"></el-input>
      </el-form-item>
      <el-form-item prop="gender" >
        <el-input type="text" v-model="NewWnurse.gender" placeholder="性别: 0 女，1 男"></el-input>
      </el-form-item>
      <el-form-item prop="tel" >
        <el-input type="text" v-model="NewWnurse.tel" placeholder="手机"></el-input>
      </el-form-item>
      <el-form-item prop="areaID" >
        <el-input type="text" v-model="NewWnurse.areaID" placeholder="病区：0 轻症，1 重症，2 危重症"></el-input>
      </el-form-item>
      <el-button type="primary" v-on:click="submitFrom(NewWnurse)">确认</el-button>
    </el-form>
  </div>
</template>

<script>
  import {setCookie,getCookie}from '../js/cookieUtil'
  import Navigation from './Navigation'
  export default {
    name: "AddWnurse",
    components: {Navigation},

    data(){
      return{
        NewWnurse:{
          userID:'',
          role:'',
          name:'',
          age:'',
          gender:'',
          tel:'',
          areaID:'',
        },
        rules: {
          userID: [{required: false, message: '', trigger: 'blur'}],
          role: [{required: true, message: '', trigger: 'blur'}],
          name: [{required: true, message: '', trigger: 'blur'}],
          age: [{required: true, message: '', trigger: 'blur'}],
          gender: [{required: true, message: '', trigger: 'blur'}],
          tel: [{required: true, message: '', trigger: 'blur'}],
          areaID: [{required: true, message: '', trigger: 'blur'}],
        },
        loading:false
      }
    },

    methods: {
      submitFrom(formName){
        this.$refs[formName].validate(valid=> {
          if (valid){
            this.$axios.post("/hnurse/addWnurse",{
              userID:this.NewWnurse.userID,
              role:this.NewWnurse.role,
              name:this.NewWnurse.name,
              age:this.NewWnurse.age,
              gender:this.NewWnurse.gender,
              tel:this.NewWnurse.tel,
              areaID:this.NewWnurse.areaID,
            })
              .then(resp=>{
                if (resp.status === 200){
                  alert("添加病房护士信息成功")
                } else{
                  alert("添加失败")
                }
              })
              .catch(error=>{
                alert("失败")
              })
          }else {
            alert("失败")
          }
        });
      },
    }

  }

</script>

<style scoped>
  #base{
    background-image: url("../assets/background/common.png");
    background-repeat: repeat-y;
    background-position: center;
    height: 100%;
    width: 100%;
    background-size: cover;
    position: absolute;
  }
  .title{
    margin: auto;
    height: 70px;
    padding-top: 30px;
  }
</style>

