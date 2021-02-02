<template>
  <div class="base">

    <el-table :data="patientData">
      <el-table-column prop="PID" label="病人ID" align="center">
      </el-table-column>
      <el-table-column prop="rate"  label="病情评级" align="center"
                       column-key="rate"
                       :filters="[{text: '轻症', value: '0'},
                        {text: '重症', value: '1'},
                        {text: '危重症', value: '2'}]"
                       :filter-method="filterHandler"
                       :formatter="rateDisplay">
        <template slot-scope="scope">
          <span v-if="scope.row.rate == '0' ">轻症</span>
          <span v-if="scope.row.rate == '1' ">重症</span>
          <span v-if="scope.row.rate == '2' ">危重症</span>
        </template>
      </el-table-column>
      <el-table-column prop="state"  label="生命状态" align="center"
                       column-key="state"
                       :filters="[{text: '在院治疗', value: '0'},
                        {text: '康复出院', value: '1'},
                        {text: '病亡', value: '2'}]"
                       :filter-method="filterHandler">
      </el-table-column>
      <el-table-column prop="wstate"  label="等待状态" align="center"
                       column-key="wstate"
                       :filters="[{text: '等待换区', value: '1'},
                        {text: '等待出院', value: '2'}]"
                       :filter-method="filterHandler">
      </el-table-column>
      <el-table-column prop="area"  label="治疗区域" align="center"
                       column-key="area"
                         :filters="[{text: '轻症区', value: '轻症区'},
                        {text: '重症区', value: '1'},
                        {text: '危重症区', value: '2'},
                        {text: '隔离区', value: '3'}]"
                       :filter-method="filterHandler">
      </el-table-column>

      <el-table-column prop="ope" label="操作" align="center" width="400">
        <template slot-scope="scope">
          <router-link to="/doctor/modifyRate">
            <el-button type="button">修改病情评级</el-button>
          </router-link>
          <router-link to="/doctor/modifyState">
            <el-button type="button">修改生命状态</el-button>
          </router-link>
          <el-button type="button" v-if="scope.row.wstate=='等待出院'">可出院</el-button>
        </template>
      </el-table-column>

    </el-table>
  </div>
</template>

<script>
  export default {
    name: "test",
    data(){
      return{
        patientData: [{
          PID: '111',
          rate: '0',
          state: '在院治疗',
          wstate: '等待换区',
          area: '轻症区'
        }, {
          PID: '222',
          rate: '1',
          state: '在院治疗',
          wstate: '不在等待中',
          area: '重症区'
        }, {
          PID: '333',
          rate: '2',
          state: '在院治疗',
          wstate: '等待换区',
          area: '危重症区'
        }, {
          PID: '444',
          rate: '0',
          state: '康复出院',
          wstate: '等待出院',
          area: '轻症区'
        },{
          PID: '555',
          rate: '2',
          state: '病亡',
          wstate: '不在等待中',
          area: '危重症区'
        },{
          PID: '666',
          rate: '0',
          state: '在院治疗',
          wstate: '不在等待中',
          area: '隔离区'
        }],
      }
    },
    // mounted(){
    //   console.log("页面初始化");
    //   this.patients();
    // },
    methods:{

      // rateDisplay(row, column) {
      //   if (row.rate === 0) {
      //     return '轻症'
      //   }
      //   else if (row.rate === 1) {
      //     return '重症'
      //   }
      //   else if (row.rate === 2) {
      //     return '危重症'
      //   }
      //   else {
      //     return '——'
      //   }
      // },

      // patients(){
      //   this.$axios.get('/enurse/selectPatient')
      //     .then(resp=>{
      //       console.log("then(resp)");
      //       console.log("resp     "+JSON.stringify(resp));
      //       var jsonobj=JSON.parse(JSON.stringify(resp));
      //       this.patientData=jsonobj.data;
      //     })
      // },

      filterHandler(value, row, column) {
        const property = column['property'];
        return row[property] === value;
      }

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
