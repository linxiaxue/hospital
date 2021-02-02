<template>
  <div class="base">
    <Navigation/>
    <br>
    <el-table :data="message" style="width: 100%">
      <el-table-column prop="id" label="通知序号" align="center">
      </el-table-column>
      <el-table-column prop="receiverID" label="收件人ID" align="center">
      </el-table-column>
      <el-table-column prop="time" label="时间" align="center">
      </el-table-column>
      <el-table-column prop="content" label="内容" align="center">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  import {setCookie,getCookie}from '../js/cookieUtil'
  import Navigation from './Navigation'
  export default {
    name: "Message",
    components: {Navigation},
    data(){
      return{
        message:[{
          id:'',
          receiverID:'',
          time:'',
          content:'',
        }],
      }
    },
    mounted() {
      this.mes();
    },
    methods:{
      mes(){
        console.log("拦截器0");
        var cookie=getCookie("userID");
        this.$axios.post('/message',{
          userID:cookie
        })
          .then(res=>{
            console.log("拦截器2");
            console.log(JSON.stringify(res));
            //var JSONlenght=this.getJsonLenght(res.data);
            var jsonobj=JSON.parse(JSON.stringify(res));
            this.message=jsonobj.data;
          })
          .catch(error=>{
            console.log(error);
            //alert("无通知")
          })
      },

    }
  }
</script>

<style scoped>
  .base{
    background: url("../assets/background/common.png") repeat;
    background-position: center;
    height: 100%;
    width: 100%;
    background-size: cover;
    position: fixed;
  }
</style>
