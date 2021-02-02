<template>

  <div id="base" >
    <Navigation/>
    <el-form :model="NewPatient" :rules="rules" :ref="NewPatient" v-loading="loading">
      <h2 class="title">添加新的病人信息</h2>

      <!--<el-form-item type="flex" flex-wrap="nowrap">-->
        <!--<el-form-item ><el-div>病人姓名</el-div></el-form-item>-->
        <!--<el-form-item prop="name" >-->
          <!--<el-input-->
            <!--type="text"-->
            <!--v-model="NewPatient.name"-->
            <!--placeholder="病人姓名">-->
          <!--</el-input>-->
        <!--</el-form-item>-->
      <!--</el-form-item>-->

      <el-form-item prop="name" >
        <el-input type="text" v-model="NewPatient.name" placeholder="病人姓名"></el-input>
      </el-form-item>
      <el-form-item prop="age" >
        <el-input type="text" v-model="NewPatient.age" placeholder="病人年龄"></el-input>
      </el-form-item>
      <el-form-item prop="gender" >
        <el-input type="text" v-model="NewPatient.gender" placeholder="病人性别: 0 女，1 男"></el-input>
      </el-form-item>
      <el-form-item prop="rate" >
        <el-input type="text" v-model="NewPatient.rate" placeholder="病情评级：0 轻症，1 重症，2 危重症"></el-input>
      </el-form-item>

      <el-button type="primary" v-on:click="submitFrom(NewPatient)">确认</el-button>

    </el-form>

  </div>

</template>


<script>
  import {setCookie,getCookie}from '../js/cookieUtil'
  import Navigation from './Navigation'
  export default {
    name: "AddPatient",
    components: {Navigation},

    data(){
      return{
        NewPatient:{
          name:'',
          age:'',
          gender:'',
          rate:'',
        },
        rules: {
          name: [{required: true, message: '', trigger: 'blur'}],
          age: [{required: true, message: '', trigger: 'blur'}],
          gender: [{required: true, message: '', trigger: 'blur'}],
          rate: [{required: true, message: '', trigger: 'blur'}],
        },
        loading:false
      }
    },

    methods: {
      submitFrom(formName){
        this.$refs[formName].validate(valid=> {
          if (valid){
            var cookieApp=getCookie("userID")
            console.log("验证成功")
            this.$axios.post("/enurse/addPatient",{
              name:this.NewPatient.name,
              age:this.NewPatient.age,
              gender:this.NewPatient.gender,
              rate:this.NewPatient.rate,
              userID:cookieApp,
            })
              .then(resp=>{
                if (resp.status === 200){
                  alert("添加病人信息成功")
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

