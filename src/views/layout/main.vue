<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { Calendar, Search, User,Document,Menu as IconMenu,Location,Setting,House, ArrowRight } from '@element-plus/icons-vue'
//以上导入
//定义变量或对象
const appear =ref(false)
//方法
const router = useRouter();
const handleClick = () => {
  router.push("/home");
};

</script>
<template>
      <el-header>   
            <el-breadcrumb :separator-icon="ArrowRight">
              <el-breadcrumb-item :to="{ path: '/home' }" @click="appear =!appear">homepage</el-breadcrumb-item>
              <el-breadcrumb-item v-if="appear" :to="{ path: '/list' }">listpage</el-breadcrumb-item>
            </el-breadcrumb>
          </el-header>
          <el-divider direction="horizontal"></el-divider>
          <el-main>
            <!-- <div>
              在渲染这个组件之前，做一个判断，判断浏览器session中是否有token参数，要是没有，重新定向与login页面，路由地址跳转到login,
              参考
              <a href="https://router.vuejs.org/zh/guide/advanced/navigation-guards.html">点击这里跳转文档</a>做路由守卫
            </div>
            <el-button type="primary" @click="handleClick">点击跳转home页面，注意看url是否带了#号</el-button> -->
        <div>
          <router-view></router-view>
        </div>
          </el-main>
</template>
<style scoped>
.el-header{
  padding: 0;
  height: auto;
} 
</style>