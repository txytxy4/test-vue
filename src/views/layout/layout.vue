<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { onBeforeMount} from 'vue';
const router = useRouter();
import { Calendar, Search, User,Document,Menu as IconMenu,Location,Setting,House, ArrowRight } from '@element-plus/icons-vue'
import Main from './main.vue'
//页面跳转
console.log(sessionStorage.getItem('token'));
const handleClick = () => {
  router.push("/home");
};
//侧边栏(element-plus)
const isCollapse = ref(true)
</script>

<template>
  <div class="common-layout">
    <el-container>
      <!-- 顶部 -->
      <el-header>
      <!-- Header:这里是layout页面，也就是布局页面，参考element布局 -->
      <el-menu class="el-menu-demo" mode="horizontal" :ellipsis="false">
      <el-menu-item index="0"><el-icon :size="20"><User /></el-icon>LOGO</el-menu-item>
      <el-menu-item index="0" @click="handleClick">
        首页
      </el-menu-item>
    <div class="flex-grow" />
    <el-menu-item index="1">
      <el-avatar :size="50"/>
      <span style="marigin: left 5px;">User</span>  
    </el-menu-item>
      </el-menu>
      </el-header>
      <!-- 内容 -->
      <el-container>
        <el-aside width="auto">
          <!-- <el-aside> -->
          <el-radio-group v-model="isCollapse" style="margin: 20px 0 20px 0">
        <el-radio-button :label="!isCollapse">Menu</el-radio-button>
        </el-radio-group>

    <el-menu
    default-active="2"
    class="el-menu-vertical-demo"
    :collapse="isCollapse">
    <!-- @open="handleOpen"
    @close="handleClose"
    > -->
    <el-menu-item index="1">
      <el-icon><House /></el-icon>
      <template #title>Navigator Two</template>
    </el-menu-item>
    <el-sub-menu index="2">
      <template #title>
        <el-icon><location /></el-icon>
        <span>Navigator One</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="1-1">item one</el-menu-item>
        <el-menu-item index="1-2">item two</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group>
        <el-menu-item index="1-3">item three</el-menu-item>
      </el-menu-item-group>
      <el-sub-menu index="1-4">
        <template #title><span>item four</span></template>
        <el-menu-item index="1-4-1">item one</el-menu-item>
      </el-sub-menu>
    </el-sub-menu>
    </el-menu> 
        </el-aside>
        <el-divider direction="vertical"></el-divider>
        <el-main>
        <!-- 主页 -->
          <Main />
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
  height:100vh;
  padding:0;
  margin:0;
  width:100%;
}
// .el-header{
//   // background-color: antiquewhite;
// }
.el-aside{
  background-color: 255, 255, 255;
}
.el-main{
  background-color: rgb(255, 255, 255);
}
.flex-grow{
  flex-grow: 1;
}
.el-menu{
align-items: center; /* 垂直居中 */
justify-content: center; /* 水平居中 */
border-right: 0;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.el-divider--vertical{
  display:inline-block;
  width:1px;
  height:100%;		//更改竖向分割线长度
  margin:0;
  vertical-align:middle;
  position:relative;
}
.el-radio-button{
  border: 0;
} 

</style>


