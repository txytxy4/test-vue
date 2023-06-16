<script setup></script>

<template>
  <div>登录页面，自行写登录表单</div>
  <div class="login">
    <el-card class="box-card">
      <div class="card-header">
        <span>Card name</span>
        <el-button class="button" text>Operation button</el-button>
      </div>
      <div class="main">
        <input type="text"><br>
        <input type="password"><br>
        <el-button round>Default</el-button>
      </div>
      
    </el-card>
  </div>
</template>

<style lang="less" scoped>
.login{
  width: 500px;
  text-align: center;
  margin: 0 auto;
}
.el-card{
  height: 200px;
  // line-height: 200px;
  border-radius: 5px;
}
</style>
