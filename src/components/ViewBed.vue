<template>
  <div class="base">
    <Navigation/>
    <br>
    <h3 class="title">病床信息</h3>
    <br>
    <el-table :data="bed">
      <el-table-column prop="bedID" label="病床ID" align="center">
      </el-table-column>
      <el-table-column prop="wardID" label="病房ID" align="center">
      </el-table-column>
      <el-table-column prop="state" label="病床使用状态" align="center">
        <template slot-scope="scope">
          <span v-if="scope.row.state == '0' ">空闲</span>
          <span v-if="scope.row.state == '1' ">非空闲</span>
        </template>
      </el-table-column>
      <el-table-column prop="ope" label="操作" align="center">
        <template slot-scope="scope">
          <el-button type="button" v-on:click="mark(scope.row.bedID)">查看病人信息</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  import {setCookie,getCookie}from '../js/cookieUtil'
  import Navigation from './Navigation'
  export default {
    name: "ViewBed",
    components: {Navigation},
    data(){
      return{
        bed:[{
          bedID:'',
          wardID:'',
          state:'',
        }],
      }
    },
    mounted(){
      console.log("页面初始化");
      this.beds();
    },
    methods:{
      beds(){
        var cookieMy=getCookie("userID")
        this.$axios.post('/hnurse/viewBed',{
          userID: cookieMy
        })
          .then(resp=>{
            console.log("then(resp)");
            console.log("resp     "+JSON.stringify(resp));
            var jsonobj=JSON.parse(JSON.stringify(resp));
            this.bed=jsonobj.data;
          })
      },
      mark(id){
        this.$store.commit('clearBID');
        this.$store.commit('setBID',id);
        this.$router.replace({path: '/hnurse/viewBed/viewPatient'});
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
