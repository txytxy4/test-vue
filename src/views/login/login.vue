<script lang="ts" setup>
import { ref,reactive,onMounted, onUpdated } from "vue";
import { useRouter } from "vue-router"; 
import type { TabsPaneContext,FormInstance, } from 'element-plus'
import { Calendar, Search, User } from '@element-plus/icons-vue'
// import setCache from './utils.js'
import {useUserStore} from '../../store/userstate.js'
import axios from "axios";
const router =useRouter()
const state = useUserStore()
//登录数据部分
const CurrentIdex = ref("login")
const loginFormRef = ref()
const loginForm = reactive({
  username:"",
  userpassword:""
})
// const {username} = ref(loginForm)
//表单验证部分
//规则
const loginFormRules = reactive({
  username:[
  { required: true, message: '请输入用户名', trigger: 'blur' },
  { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
  ],
  userpassword:[
  { required: true, message: '请输入登录密码', trigger: 'blur' },
  { min: 3, max: 15, message: '长度在 3 到 15 个字符', trigger: 'blur' }
  ]
})
//消息弹出判断
const message =ref(false)
//表单登录和注册切换 
const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event)
}
//方法
//登录 
onMounted(() =>{
  localStorage.setItem(loginForm.username,"spyderman")
  sessionStorage.setItem(loginForm.userpassword,"123456")
})
const login = () =>{
  //验证内容
  loginFormRef.value.validate().then(() =>{
    console.log("表单验证通过");
  })
  //发送请求
  axios.post("/login",{
    username: loginForm.username,
    password: loginForm.userpassword
  }).then((res) =>{
    console.log(res.data);
    //存储token
    // let token = res.data.tData.token
    let token = state.token
    console.log("登录成功获取token值：",token);   
  })
  //存数据
  localStorage.setItem('username',loginForm.username)
  localStorage.setItem('userpassword',loginForm.userpassword)
  //判断和添加token
  if(loginForm.username === "spyderman" && loginForm.userpassword === "123456"){
    sessionStorage.setItem('token','loginForm')
    router.replace("/")
  }else{
    // alert("不存在该用户")
    message.value = true
  }
}

</script>

<template>
  <div class="login">
    <el-card class="box-card">
      <div class="card-header">
        <span>登录|注册</span>
      </div>
        <el-tabs v-model="CurrentIdex" @tab-click="handleClick" stretch>
          <!-- 登录部分 -->
          <el-tab-pane label="登录" name="login">
            <el-form :model="loginForm" status-icon :rules="loginFormRules" ref="loginFormRef" :hide-required-asterisk="true">
              <el-form-item label="用户名：" label-width="80px" prop="username">
                <el-input type="text" v-model="loginForm.username" placeholder="请输入用户名" :prefix-icon="User" clearable autofocus/>
              </el-form-item>
              <el-form-item label="密码： " label-width="80px" prop="userpassword">                
                <el-input type="password" v-model="loginForm.userpassword" placeholder="请输入密码" :prefix-icon="User" clearable/>
              </el-form-item>
              <el-form-item>
                <el-checkbox label="记住密码" size="large" />
              </el-form-item>
              <el-form-item>
                  <el-button type="primary" @click="login">登录</el-button>
              </el-form-item>
              <el-alert title="用户信息错误" type="success" v-if="message"/>
            </el-form>
          </el-tab-pane>
          <!-- 注册部分 -->
          <el-tab-pane label="注册" name="register">
            <el-form>
              <el-form-item label="用户名：" label-width="80px">
                <el-input type="text" placeholder="请输入用户名" autofocus/>
              </el-form-item>
              <el-form-item label="密码:" label-width="80px">
                <el-input type="password" placeholder="请输入密码"/>
              </el-form-item>
              <el-form-item label="确认密码:" label-width="80px">
                <el-input type="password" placeholder="请再输入一次密码"/>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" >注册</el-button>
              </el-form-item>
            </el-form>
          </el-tab-pane>
        </el-tabs>
      </el-card>
  </div>
</template>

<style lang="less" scoped>
.login{
  width: 1200px;
  text-align: center;
  margin: 150px auto;
}
.box-card{
  height: 300px;
  width: 500px;
  margin: 0 auto;
  border-radius: 15px;
  border: 1px black solid;
}
.el-form-item__content{
  text-align: center;
}
.el-form-item{
  width: 100%;
}
.el-button{
  margin: auto;
  // text-align: center;
  width: 200px;
}
.el-checkbox,.el-checkbox--large,.is-checked{
  float:left;
  margin-left:20px
}
</style>
