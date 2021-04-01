<template>
  <div>
    <h2>获取store的state.count</h2>
    <div>{{this.$store.state.count}}</div>
    <h2>获取store的state.index</h2>
    <div>{{index}}</div>
    <h2>获取store的state.arr</h2>
    <div>{{arr}}</div>
    <h2>获取store的state.filterObj</h2>
    <div>{{filterObj}}</div>
    <h2>获取Bus的val</h2>val
    <div>{{}}</div>
<!--    <div>{{getCount}}</div>-->
    <button @click="changeState">更新store的state</button>
    <button @click="reduce">更新store的state</button>
    <button @click="decrement">更新store的state</button>
    <button @click="changeState2">更新store的state</button>
  </div>
</template>

<script>
import store from '../store';
import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'
export default {
  name: 'HelloWorld',
  data () {
    return {
      index2:3,
      val:0
    }
  },
  computed: {
    ...mapState(['index', 'arr']),
    ...mapGetters(['filterObj']),
    // getCount(){
    //   return store.state.count
    //   // return this.$store.state.count
    // }
  },
  methods:{
    ...mapMutations({reduce:'reduce'}),
    changeState(){
      store.commit('increment', 10);
    },
    ...mapActions({
      decrement: 'reduce'
    }),
    changeState2(){
      store.dispatch('reduce');
    },
  },
}
</script>


<style scoped>

</style>
