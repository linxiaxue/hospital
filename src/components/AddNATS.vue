<template>

  <div id="base" >
    <Navigation/>
    <el-form :model="NewNATS" :rules="rules" :ref="NewNATS" v-loading="loading">
      <h2 class="title">添加新的核酸检测单</h2>
      <el-form-item prop="pID" >
        <el-input type="text" v-model="NewNATS.pID" placeholder="病人ID"></el-input>
      </el-form-item>
      <el-form-item prop="time" >
        <!--<el-input type="text" v-model="NewNATS.time" placeholder="检测时间"></el-input>-->
        <el-date-picker v-model="NewNATS.time" format="yyyy-MM-dd HH:mm:ss" value-format="yyyy-MM-dd HH:mm:ss"
                        type="datetime" placeholder="检测时间"></el-date-picker>
      </el-form-item>
      <el-form-item prop="result" >
        <el-input type="text" v-model="NewNATS.result" placeholder="检测结果：positive/negative"></el-input>
      </el-form-item>
      <el-form-item prop="rate" >
        <el-input type="text" v-model="NewNATS.rate" placeholder="病情评级：0 轻症，1 重症，2 危重症"></el-input>
      </el-form-item>

      <el-button type="primary" v-on:click="submitFrom(NewNATS)">确认</el-button>

    </el-form>

  </div>

</template>


<script>
  import {setCookie,getCookie}from '../js/cookieUtil'
  import Navigation from './Navigation'
  export default {
    name: "AddNATS",
    components: {Navigation},

    data(){
      return{
        NewNATS:{
          pID:'',
          time:'',
          result:'',
          rate:'',
        },
        rules: {
          pID: [{required: true, message: '', trigger: 'blur'}],
          time: [{required: true, message: '', trigger: 'blur'}],
          result: [{required: true, message: '', trigger: 'blur'}],
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
            this.$axios.post("/doctor/addNATS",{
              userID:cookieApp,
              pID:this.NewNATS.pID,
              time:this.NewNATS.time,
              result:this.NewNATS.result,
              rate:this.NewNATS.rate,
            })
              .then(resp=>{
                if (resp.status === 200){
                  alert("添加核酸检测单成功")
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

