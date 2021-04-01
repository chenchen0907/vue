<template>
    <div class="test">
        <van-swipe style="height: 100vh;" vertical>
        <van-swipe-item>1</van-swipe-item>
        <van-swipe-item>2</van-swipe-item>
        <van-swipe-item>3</van-swipe-item>
        <van-swipe-item>4</van-swipe-item>
        </van-swipe>
    </div>
</template>

<script>
    import Vue from 'vue';
    import { Swipe, SwipeItem,Button } from 'vant';
    Vue.use(Button).use(Swipe).use(SwipeItem)
    export default {
        name: "index",
        data:()=>{
            return {

            }
        },
        mounted(){
        //    this.test()
        },
        methods:{
           test() {
               let arr = [1,2,3]
                let newArr = arr.map(ele=>{
                   return ele+1
               })
               let a = [...arr]
            console.log('newArr',newArr)
             console.log('a',a)
          }
        }
    }
</script>

<style scoped lang="scss">
$color:red;
// .test {
//   height: 6.25rem;
//   width: 6.25rem;
//   background: lightblue;
//   color:$color
// }
</style>
