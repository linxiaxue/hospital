<template>
  <div id="base">
    <Navigation/>
    <br>
    <br>
    <h1 class="title">修改病情评级</h1>
    <el-form  :model="newRate" :rules="rules" :ref="newRate" v-loading="loading">
      <el-form-item prop="pID">
        <el-input v-model="newRate.pID" type="text" text-align="center" placeholder="病人ID不可改，请填入原来的病人ID"></el-input>
      </el-form-item>
      <el-form-item prop="rate">
        <el-input v-model="newRate.rate" type="text" placeholder="病情评级：0 轻症，1 重症，2 危重症"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button v-on:click="submit(newRate)" type="primary">提交</el-button>
      </el-form-item>
    </el-form>

  </div>
</template>

<script>
  import {setCookie,getCookie}from '../js/cookieUtil'
  import Navigation from './Navigation'
  export default {
    name: "ModifyRate",
    components: {Navigation},

    data(){
      return{
        newRate:[{
          pID:'',
          rate:'',
        }],
        rules: {
          pID: [{required: true, message: '', trigger: 'blur'}],
          rate: [{required: true, message: '', trigger: 'blur'}]
        },
        loading:false
      }
    },

    methods:{
      submit(formName){
        this.$refs[formName].validate(valid=> {
          if (valid){
            //var cookie=getCookie("pID");
            this.$axios.post('/doctor/modifyRate',{
              //pID:cookie,
              pID:this.newRate.pID,
              rate:this.newRate.rate,
            })
              .then(resp=>{
                console.log("提交成功")
                alert("提交成功")
              })
              .catch(error=>{
                console.log(error);
              })
          }else {
            alert("失败")
          }
        });
      },
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
