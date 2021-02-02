<template>
  <div id="base" >
    <Navigation/>
    <el-form :model="Wnurse" :rules="rules" :ref="Wnurse" v-loading="loading">
      <h2 class="title">删除已有病房护士信息</h2>
      <el-form-item prop="wnID" >
        <el-input type="text" v-model="Wnurse.wnID" placeholder="请输入需要删除的病房护士ID"></el-input>
      </el-form-item>
      <el-button type="primary" v-on:click="submitFrom(Wnurse)">确认</el-button>
    </el-form>
  </div>
</template>

<script>
  import {setCookie,getCookie}from '../js/cookieUtil'
  import Navigation from './Navigation'
  export default {
    name: "DeleteWnurse",
    components: {Navigation},

    data(){
      return{
        Wnurse:{
          wnID:'',
        },
        rules: {
          wnID: [{required: true, message: '', trigger: 'blur'}],
        },
        loading:false
      }
    },

    methods: {
      submitFrom(formName){
        this.$refs[formName].validate(valid=> {
          if (valid){
            this.$axios.post("/hnurse/deleteWnurse",{
              wnID:this.Wnurse.wnID,
            })
              .then(resp=>{
                if (resp.status === 200){
                  alert("删除病房护士信息成功")
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
