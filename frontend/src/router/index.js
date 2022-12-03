import { createRouter, createWebHistory } from 'vue-router'
import homepage from '../pages/homepage.vue'
import dash from '../pages/dash.vue'
import student from '../login/student.vue'
import dashboard from '../dashboard/dashboard.vue'
import evaluation from '../dashboard/evaluation.vue'
import forum from '../dashboard/forum.vue'

// import store from '../store.js'
const router = createRouter({
        history: createWebHistory(
            import.meta.env.BASE_URL),
        routes: [
            //Blank
            {
                path: '/',
                redirect: 'home'
            },
            //POS
            {
                path: '/homepage',
                name: 'homepage',
                component: homepage,

            },
            {
                path: '/dash',
                name: 'dash',
                component: dash,
            },
            {
                path: '/student',
                name: 'student',
                component: student,
            },
            {
                path: '/dashboard',
                name: 'dashboard',
                component: dashboard,
            },
            {
                path: '/evaluation',
                name: 'evaluation',
                component: evaluation,
            },
            {
                path: '/forum',
                name: 'forum',
                component: forum,
            }
        ]
    })
    // router.beforeEach((to, from, next)=>{
    //     if(store.isAuthenticated && !to.meta.needAuth){
    //       next({name: 'login'})
    //     }else if(!store.isAuthenticated && to.meta.needAuth){
    //       next({name: 'login'})
    //     }else{
    //       next()
    //     }
    //   })
export default router