<template>
<div>
   <div id="all-map" class="map" ></div>
   <van-tabbar v-model="active">
        <van-tabbar-item badge="3">
            <span>自定义</span>
            <template #icon="props">
              <img :src="props.active ? icon.active : icon.inactive" />
            </template>
        </van-tabbar-item>
        <van-tabbar-item icon="search">标签</van-tabbar-item>
        <van-tabbar-item icon="setting-o">标签</van-tabbar-item>
    </van-tabbar>
</div>
</template>

<script>
    import Vue from 'vue';
    import AMap from 'AMap'
    import { Button, Tabbar, TabbarItem } from 'vant'
    Vue.use(Button).use(Tabbar).use(TabbarItem)
    export default {
        name: "index",
        components: {
  [Button.name]: Button
},
        data:()=>{
            return {
                active: 0,
                    icon: {
                        active: 'https://img01.yzcdn.cn/vant/user-active.png',
                        inactive: 'https://img01.yzcdn.cn/vant/user-inactive.png',
                    },
                };
        },
        mounted(){
           this.gaodeMap()
        },
        methods:{
       gaodeMap(){
                var map = new AMap.Map('all-map', {
                        center: [116.397428, 39.90923], // [纬度，经度]
                        resizeEnable: true,
                        zoom: 10
                });
                AMap.plugin(['AMap.ToolBar', 'AMap.Scale'], function () {
                        map.addControl(new AMap.ToolBar())
                        map.addControl(new AMap.Scale())
                })
}
        }
    }
</script>

<style scoped lang="scss">
$color:red;
.map{
    width: 600px;
    height: 600px;
}
.van-tabbar--fixed {
  background: rgb(102, 153, 255);
}
.van-tabbar-item--active{
    background-color: rgb(0, 0, 255);
}
</style>
