import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //token: localStorage.getItem('token') || null,
    WNID:localStorage.getItem('WNID')||null,//病房护士id
    BID:localStorage.getItem('BID')||null,//病床id
  },
  mutations: {
    // login(state, data){
    //   localStorage.setItem('token', data);
    //   state.token = data
    // },
    // logout(state) {
    //   // 移除token
    //   localStorage.removeItem('token');
    //   state.token = null
    // },
    setWNID(state,date){
      localStorage.setItem('WNID',date);
      state.WNID=date
    },
    clearWNID(state,date){
      localStorage.removeItem('WNID');
      state.WNID=null
    },
    setBID(state,date){
      localStorage.setItem('BID',date);
      state.BID=date
    },
    clearBID(state,date){
      localStorage.removeItem('BID');
      state.BID=null
    },

  },
  actions: {
  }
})
