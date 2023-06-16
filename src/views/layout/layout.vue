<script setup>
import { useRouter } from "vue-router";
import { onBeforeMount} from 'vue';
const router = useRouter();
// var data = sessionStorage.getItem("key");
// console.log(data);
// onBeforeMount(
//   () =>{
//     if(data === null){
//       console.log("hhh");
//       //跳转到login界面
//       router.replace("/login")
//     }
//   }
// )
console.log(sessionStorage.getItem('token'));
const handleClick = () => {
  router.push("/home");
};

</script>

<template>

  <div>
    <div class="common-layout">
    <el-container>
      <el-header>
        <div>这里是layout页面，也就是布局页面，参考element布局</div>
      </el-header>
      <el-main>
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
      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
  </div>

</template>

<style lang="less" scoped>
div{
  width: 100%;
  height: 100%;
}
.el-container{
  width: 100%;
  margin: 0 auto  ;
}
.el-header{
  // position: fixed;
  // top: 0;
  // left: 0;
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;

  background-color: #0099ff;
}
.el-main{
  background-color: #00ffc3;
}
.el-footer{
  position: sticky  ;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #9900ff;
}
.el-row {
  margin-bottom: 20px;
}
.el-row:last-child {
  margin-bottom: 0;
}
.el-col {
  border-radius: 4px;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
  background-color: #ffbf00;
}
</style>
