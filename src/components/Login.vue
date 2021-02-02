<template>
  <div id="base_login">
    <div class="main">
      <el-form :model="loginForm"
               :rules="rules"
               label-position="left"
               label-width="0px"
               v-loading="loading">
        <h3 class="login_title">登录</h3>
        急诊护士工号: 100002 密码: 123456
        <br>
        主治医生工号: 200001 密码: 123456
        <br>
        护士长工号: 300001 密码: 123456
        <br>
        病房护士工号: 400001 密码: 123456
        <br>
        <br>
        <el-form-item prop="userID">
          <el-input type="text"
                    v-model="loginForm.userID"
                    auto-complete="off"
                    placeholder="工号"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input type="password"
                    v-model="loginForm.password"
                    auto-complete="off"
                    placeholder="密码"></el-input>
        </el-form-item>
        <el-form-item style="width: 100%">
          <el-button type="primary"
                     style="width: 40%;background: #2aabd2;border: none"
                     v-on:click="login">登录</el-button>
        </el-form-item>
      </el-form>
    </div>

  </div>

</template>

<script>
  import qs from 'qs'
  import {setCookie,getCookie}from '../js/cookieUtil'
  export default {
    name: 'Login',
    data () {
      return {
        loginForm: {
          userID: '',
          password: ''
        },
        rules: {
          userID: [{required: true, message: '', trigger: 'blur'}],
          password: [{required: true, message: '', trigger: 'blur'}]
        },
        loading: false
      }
    },
    methods: {
      login () {
        //this.$store.commit('logout');
        this.$axios.post('/login', {
          userID: this.loginForm.userID,
          password: this.loginForm.password
        })
          .then(resp => {
            if (resp.status === 200) {
              //this.$store.commit('login', resp.data.token)
              setCookie('userID',this.loginForm.userID) //cookie存userID，之后需使用
              this.$router.replace({path: '/identity'})
              //成功登录后转入身份选择界面
            }
            else {
              alert(resp.message)
            }
          })
          .catch(error => {
            console.log(error)
            //alert(error.response.data.message)
          })
      }
    }
  }
</script>

<style scoped>
  #base_login{
    background: url("../assets/background/common.png") repeat;
    background-position: center;
    height: 100%;
    width: 100%;
    background-size: cover;
    position: fixed;
  }
  .main{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -80%);
  }
  .login_title {
    margin: 0px auto 25px auto;
    text-align: center;
    color: #494e8f;
  }
</style>
