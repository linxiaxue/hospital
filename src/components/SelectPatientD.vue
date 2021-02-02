<template>
  <div class="base">
    <Navigation/>
    <br>
    <br>
    <el-table :data="patient">
      <el-table-column prop="pid" label="病人ID" align="center">
      </el-table-column>
      <el-table-column prop="name" label="姓名" align="center">
      </el-table-column>
      <el-table-column prop="age"  label="年龄" align="center">
      </el-table-column>
      <el-table-column prop="gender"  label="性别" align="center">
        <template slot-scope="scope">
          <span v-if="scope.row.gender == '0' ">女</span>
          <span v-if="scope.row.gender == '1' ">男</span>
        </template>
      </el-table-column>
      <el-table-column prop="rate"  label="病情评级" align="center">
        <template slot-scope="scope">
          <span v-if="scope.row.rate == '0' ">轻症</span>
          <span v-if="scope.row.rate == '1' ">重症</span>
          <span v-if="scope.row.rate == '2' ">危重症</span>
        </template>
      </el-table-column>
      <el-table-column prop="state"  label="生命状态" align="center">
        <template slot-scope="scope">
          <span v-if="scope.row.state == '0' ">在院治疗</span>
          <span v-if="scope.row.state == '1' ">康复出院</span>
          <span v-if="scope.row.state == '2' ">病亡</span>
        </template>
      </el-table-column>
      <el-table-column prop="wstate"  label="等待状态" align="center"
                       column-key="wstate"
                       :filters="[{text: '等待换区', value: '1'},
                        {text: '等待出院', value: '2'}]"
                       :filter-method="filterHandler">
        <template slot-scope="scope">
          <span v-if="scope.row.wstate == '0' ">不在等待中</span>
          <span v-if="scope.row.wstate == '1' ">等待换区</span>
          <span v-if="scope.row.wstate == '2' ">等待出院</span>
        </template>
      </el-table-column>
      <el-table-column prop="area"  label="治疗区域" align="center">
        <template slot-scope="scope">
          <span v-if="scope.row.area == '0' ">轻症区</span>
          <span v-if="scope.row.area == '1' ">重症区</span>
          <span v-if="scope.row.area == '2' ">危重症区</span>
          <span v-if="scope.row.area == '3' ">隔离区</span>
          <span v-if="scope.row.area == '-1' ">死亡或出院</span>
        </template>
      </el-table-column>
      <el-table-column prop="ope" label="操作" align="center" width="400">
        <template slot-scope="scope">
          <!--这个修改评级和状态好像不用另开界面，可以套el-form...？-->
          <router-link to="/doctor/modifyRate">
            <el-button type="button">修改病情评级</el-button>
          </router-link>
          <el-button type="button" v-on:click="die(scope.row.pid)">确认病亡</el-button>
          <!--<router-link to="/doctor/decideLeave">-->
            <!--<el-button type="button" v-if="scope.row.wstate=='等待出院'">可出院</el-button>-->
          <!--</router-link>-->
          <el-button type="button" v-if="scope.row.wstate=='2'"
                     v-on:click="leave(scope.row.pid)">可出院</el-button>
          <!--只有当等待状态为“等待出院”时才能由医生选择是否出院-->
          <!--点击按钮之后需发送一个状态值-->
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  import {setCookie,getCookie}from '../js/cookieUtil'
  import Navigation from './Navigation'
  export default {
    name: "SelectPatientD",
    components: {Navigation},
    data(){
      return{
        patient:[{
          pid:'',
          name:'',
          age:'',
          gender:'',
          rate:'',
          state:'',
          wstate:'',
          area:'',
        }],
        newState:[{
          pID:'',
          state:'',
        }],
        rules: {
          pID: [{required: true, message: '', trigger: 'blur'}],
          state: [{required: true, message: '', trigger: 'blur'}]
        },
      }
    },
    mounted(){
      console.log("页面初始化");
      this.patients();
    },
    methods:{

      patients(){
        var cookieMy=getCookie("userID")
        this.$axios.post('/doctor/viewPatient',{
          userID: cookieMy
        })
          .then(resp=>{
            console.log("then(resp)");
            console.log("resp     "+JSON.stringify(resp));
            var jsonobj=JSON.parse(JSON.stringify(resp));
            this.patient=jsonobj.data;
          })
      },

      leave(pID){
        this.$axios.post('/doctor/modifyState',{
          pID:pID,
          state:1,
        })
          .then(res=>{
            alert("已准许出院")
            //this.$router.replace({path: '/'})
            location.reload();
          })
      },

      die(pID){
        this.$axios.post('/doctor/modifyState',{
          pID:pID,
          state:2,
        })
          .then(res=>{
            alert("确认病亡")
            //this.$router.replace({path: '/'})
            location.reload();
          })
      },

      filterHandler(value, row, column) {
        const property = column['property'];
        return row[property] == value;
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
