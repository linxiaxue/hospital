<template>
  <div id="base_identity">
    <Navigation/>
    <br>
    <h3 class="handle_identity">身份选择</h3>
    <div class="radio-box" v-for="(item,index) in radios" :key="item.id">
      <span class="radio" :class="{'on':item.isChecked}"></span>
      <input v-model="radio" :value="item.value" class="input-radio" :checked='item.isChecked'  @click="check(index)" type="radio">{{item.label}}
    </div>
    <br>
    <el-button type="primary" v-on:click="chooseRole()">确认选择</el-button>
  </div>
</template>

<script>
  import {setCookie,getCookie}from '../js/cookieUtil'
  import Navigation from './Navigation'
  export default {
    name: "Identity",
    components: {Navigation},
    data() {
      return {
        //radio: '1',
        radios:[
          {
            label: '主治医生',
            value:'doctor',
            isChecked: false,
          },
          {
            label: '护士长',
            value:'hnurse',
            isChecked: false,
          },
          {
            label: '急诊护士',
            value:'enurse',
            isChecked: false,
          },
          {
            label: '病房护士',
            value:'wnurse',
            isChecked: false,
          },
        ]
      }
    },
    methods: {
      check(index) {
        this.radios.forEach((item) => {
          item.isChecked = false;
        });
        this.radio = this.radios[index].value;
        this.radios[index].isChecked = true;
        this.chooseRole();
      },
      chooseRole(){
        var roles=""
        switch (this.radio) {
          case 'doctor':
            roles="Doctor";
            break;
          case 'hnurse':
            roles="HNurse";
            break;
          case 'enurse':
            roles="ENurse";
            break;
          case 'wnurse':
            roles="WNurse";
            break;
          default:
            break;
        }
        var cookieCh=getCookie("userID");
        this.$axios.post('/identity',{
          userID:cookieCh,
          role:roles,
        })
          .then(resp=>{
            if (resp.status === 200) {
              switch (this.radio) { //跳转至不同界面
                case 'doctor':
                  this.$router.replace({path: '/doctor'})
                  break;
                case 'hnurse':
                  this.$router.replace({path: '/hnurse'})
                  break;
                case 'enurse':
                  this.$router.replace({path: '/enurse'})
                  break;
                case 'wnurse':
                  this.$router.replace({path: '/wnurse'})
                  break;
                default:
                  break;
              }
            }
            else {
              alert(resp.message)
            }
          })
          .catch(error=>{
            console.log(error);
          })
      }
    },

  }

</script>

<style scoped>
  #base_identity{
    background: url("../assets/background/common.png") repeat;
    background-position: center;
    height: 100%;
    width: 100%;
    background-size: cover;
    position: fixed;
  }
  .handle_identity {
    margin: 0px auto 40px auto;
    text-align: center;
    color: #494e8f;
    font-size: 30px;
  }
</style>
