<template>

  <div id="base" >
    <Navigation/>
    <el-form :model="NewDS" :rules="rules" :ref="NewDS" v-loading="loading">
      <h2 class="title">添加新的每日状态单</h2>
      <el-form-item prop="pID" >
        <el-input type="text" v-model="NewDS.pID" placeholder="病人ID"></el-input>
      </el-form-item>
      <el-form-item prop="temperature" >
        <el-input type="text" v-model="NewDS.temperature" placeholder="体温"></el-input>
      </el-form-item>
      <el-form-item prop="symptom" >
        <el-input type="text" v-model="NewDS.symptom" placeholder="存在症状"></el-input>
      </el-form-item>
      <el-form-item prop="state" >
        <el-input type="text" v-model="NewDS.state" placeholder="生命状态：0 在院治疗，1 康复出院，2 病亡"></el-input>
      </el-form-item>
      <el-form-item prop="time" >
        <el-date-picker v-model="NewDS.time" format="yyyy-MM-dd HH:mm:ss" value-format="yyyy-MM-dd HH:mm:ss"
                        type="datetime" placeholder="时间"></el-date-picker>
      </el-form-item>
      <el-form-item prop="natResult" >
        <el-input type="text" v-model="NewDS.natResult" placeholder="核酸检测检测结果：positive/negative"></el-input>
      </el-form-item>

      <el-button type="primary" v-on:click="submitFrom(NewDS)">确认</el-button>

    </el-form>

  </div>

</template>


<script>
  import {setCookie,getCookie}from '../js/cookieUtil'
  import Navigation from './Navigation'
  export default {
    name: "AddDS",
    components: {Navigation},

    data(){
      return{
        NewDS:{
          pID:'',
          temperature:'',
          symptom:'',
          state:'',
          time:'',
          natResult:'',
        },
        rules: {
          pID: [{required: true, message: '', trigger: 'blur'}],
          temperature: [{required: true, message: '', trigger: 'blur'}],
          symptom: [{required: true, message: '', trigger: 'blur'}],
          state: [{required: true, message: '', trigger: 'blur'}],
          time: [{required: true, message: '', trigger: 'blur'}],
          natResult: [{required: true, message: '', trigger: 'blur'}],
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
            this.$axios.post("/wnurse/addDS",{
              userID:cookieApp,
              pID:this.NewDS.pID,
              temperature:this.NewDS.temperature,
              symptom:this.NewDS.symptom,
              state:this.NewDS.state,
              time:this.NewDS.time,
              natResult:this.NewDS.natResult,
            })
              .then(resp=>{
                if (resp.status === 200){
                  alert("添加每日状态单成功")
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

