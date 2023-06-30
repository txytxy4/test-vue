/*
 * @Description: 
 * @Version: v1.0.0
 * @Author: 最帅的静哥哥
 * @Date: 2023-06-07 09:54:22
 * @LastEditors: 最帅的静哥哥
 * @LastEditTime: 2023-06-07 10:13:45
 */

import {
    createApp
} from 'vue'
import './style.css'
import App from './App.vue';
import ElementPlus from 'element-plus'
// import ElementPlusIconsVue from '@element-plus/icons-vue'

import 'element-plus/dist/index.css'
import router from './router';
import axios from 'axios';
import { createPinia } from 'pinia';
const pinia =  createPinia()

createApp(App).config.globalProperties.$axios = axios
createApp(App).use(ElementPlus).use(router).use(pinia).mount('#app');