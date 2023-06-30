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
  <div class="common-layout">
    <el-container>
      <el-header>Header:这里是layout页面，也就是布局页面，参考element布局</el-header>
      <el-container>
        <el-aside width="200px">Aside</el-aside>
        <el-main>
          <div>
    在渲染这个组件之前，做一个判断，判断浏览器session中是否有token参数，要是没有，重新定向与login页面，路由地址跳转到login,
    参考
    <a href="https://router.vuejs.org/zh/guide/advanced/navigation-guards.html">点击这里跳转文档</a>做路由守卫
          </div>
          <el-button type="primary" @click="handleClick">点击跳转home页面，注意看url是否带了#号</el-button>
          <div>
            <router-view></router-view>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style lang="less" scoped>
.common-layout{
  width: 100%;
  height: 100%;
}

.el-container{
  height:100%;
  padding:0;
  margin:0;
  width:100%;
}
.el-header{
  background-color: antiquewhite;
}
.el-aside{
  background-color: aqua;
}
.el-main{
  background-color: aquamarine;
}


</style>
