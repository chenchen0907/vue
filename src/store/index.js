import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 1,
    index: 2,
    arr: [1, 2, 3],
    obj: [
      {id: 1, text: 'reading', done: true},
      {id: 2, text: 'playBastketball', done: false}
    ]
  },
  getters:{
    filterObj: state => {
      return state.obj.filter(item => item.done);
    }
  },
  mutations:{
    increment(state, n){
      state.count += n;
    },
    reduce(state){
      state.count -= 1;
    }
  },
  actions:{
    reduce(context){
      context.commit('reduce')
    }
  },
})

export default store
