<template>
  <el-container>
    <el-header height = '30px' >
      <div class="nav-right" style="text-align:right">
        <router-link to="/getInfo">
          <el-button type="primary">查看信息</el-button>
        </router-link>
        <router-link to="/modifyInfo">
          <el-button type="primary">修改信息</el-button>
        </router-link>
        <router-link to="/message">
          <el-button type="primary">通知</el-button>
        </router-link>
        <!--<el-badge value="new" class="item">-->
          <!--<router-link to="/message">-->
            <!--<el-button type="primary">通知</el-button>-->
          <!--</router-link>-->
        <!--</el-badge>-->
        <router-link to="/identity">
          <el-button type="primary">返回</el-button>
        </router-link>
        <el-button type="primary" v-on:click="showPopup()">登出</el-button>
      </div>
      <div v-show="this.popup" @click="closePopup()" class="Popup" >
        <div style="height: 50px;padding-top: 30px">
          确认要登出吗？
        </div>
        <div style="display: inline">
          <el-button @click="logout()" type="primary">是</el-button>
        </div>
        <div style="display: inline">
          <el-button @click="closePopup()" type="primary">否</el-button>
        </div>
      </div>
    </el-header>
  </el-container>
</template>

<script>
  export default {
    name: "Navigation",
    data(){
      return {
        popup:false
      }
    },
    methods: {
      logout() { //登出
        //this.$store.commit('logout');
        this.$router.replace({path: '/'})
      },
      showPopup(){
        this.popup=true;
        console.log("popup   "+this.popup)
      },
      closePopup(){
        this.popup=false;
        console.log("popup   "+this.popup)
      }
    }
  }
</script>

<style scoped>
  .Popup{
    background-color: #eaeaea;
    position: absolute;
    top:45%;
    left: 50%;
    margin-top:-75px;
    margin-left: -150px;
    width: 300px;
    height: 150px;
    z-index: 999;
    border-top-right-radius:10px;
    border-top-left-radius:10px;
    border-bottom-left-radius:10px;
    border-bottom-right-radius:10px;
  }
</style>
