<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
const handleClick = () => {
  router.push("/home");
};
</script>

<template>
  <div>这里是layout页面，也就是布局页面，参考element布局</div>
  <div>
    在渲染这个组件之前，做一个判断，判断浏览器session中是否有token参数，要是没有，重新定向与login页面，路由地址跳转到login,
    参考
    <a href="https://router.vuejs.org/zh/guide/advanced/navigation-guards.html"
      >点击这里跳转文档</a
    >
    做路由守卫
  </div>
  <el-button type="primary" @click="handleClick"
    >点击跳转home页面，注意看url是否带了#号</el-button
  >
  <div>
    <router-view></router-view>
  </div>
</template>

<style lang="less" scoped></style>
