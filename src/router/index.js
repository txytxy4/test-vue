/*
 * @Description: 
 * @Version: v1.0.0
 * @Author: 最帅的静哥哥
 * @Date: 2023-06-07 10:05:20
 * @LastEditors: 最帅的静哥哥
 * @LastEditTime: 2023-06-07 10:29:56
 */
import {
    createRouter,
    createWebHashHistory,
    createWebHistory
} from 'vue-router';
const routes = [{
        path: '/login',
        component: () => import('../views/login/login.vue'),

    },
    {
        path: '/',
        component: () => import('../views/layout/layout.vue'),
        children: [{
            path: 'home',
            component: () => import('../views/home/home.vue')
        }],
            // beforeEnter: (to,from,next) =>{
            //     if(sessionStorage.getItem("key") === null){
            //         // return {path:'/login'}
            //         next({path:'/login'})
            //     }
            // }
    },

]

const router = createRouter({
    // hash 模式 是url上带 #号 ， history 是url上不带 #号 (createWebHistory)
    history: createWebHashHistory(),
    routes, // `routes: routes` 的缩写 等价于  routes： routes
})
// const data = sessionStorage.getItem('token')
// router.beforeEach((to,from,next) =>{
//     if(to.path === '/login'){
//         if(to.path === '/login'){
//             next()
//             return
//         }
//         next({path: '/login'})
//     }else{
//         next()
//     }
// })
router.beforeEach((to,from,next) =>{
    if(to.path != '/login'){
        if(!sessionStorage.getItem('token')){
            next({path: '/login'})
        }else{
            next()
        }       
    }else{
        next()
    }
})


export default router;
