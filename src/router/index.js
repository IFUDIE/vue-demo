import vue from 'vue'
import Router from 'vue-router'
import Login from '../views/Login'
import Main from '../views/Main'

vue.use(Router)

export default new Router({
    routes:[
    {
        path:'/login',
        name:'Login',
        component:Login
    },
    {
        path:'/main',
        name:'Main',
        component:Main
    }
]
})

