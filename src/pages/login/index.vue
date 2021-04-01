<template>
    <div class="login">
        <div class="login-wraper">
            <div class="login-input">
                <van-cell-group>
                    <van-field v-model="userName" label="用户名" placeholder="请输入用户名" />
                    <van-field v-model="password" type="password" label="密码" placeholder="请输入密码"/>
                </van-cell-group>
                <van-button @click="submit">登录</van-button>
            </div>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue';
    import { Button,Field  } from 'vant'
    Vue.use(Button).use(Field)
    export default {
        name: "login",
        data:()=>{
            return {
               userName:'',
               password:''
            }
        },
        mounted(){
           this.test()
        },
        methods:{
           submit() {
            this.$router.push('/index');
          }
        }
    }
</script>

<style scoped lang="scss">
$backgroundColor:rgba(0,0,0,0.08);
.login {
    height: 100vh;
    width: 100vw;
    // background-image: linear-gradient(to top right,rgb(51, 204, 255),rgb(0, 153, 255));
    background: url('#{$img}/login.jpg') center center no-repeat;
    position: relative;

    .login-wraper{
        border: 1px solid transparent;
        border-radius: 1.25rem;
        padding: 0 1.25rem;
        margin: 0 0.625rem;
        display: flex;
    }
    .login-input{
        position: absolute;
        bottom: 5.5rem;
         /deep/ .van-cell {
            background-color: $backgroundColor;
        }
        /deep/ .van-field__control {
            background-color: $backgroundColor;
        }
        .van-button--normal{
            width: 18.75rem;            
            background: $backgroundColor;
            margin-top: 0.625rem;
            letter-spacing: 0.625rem;
        }
    }
}
</style>
