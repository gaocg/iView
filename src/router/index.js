import Vue from "vue";
import Router from "vue-router";

Vue.use(Router)

export default new Router({
    mode:   "history",
    routes :[
        {
            path:"/",
            name:"index",
            component:()=> import("@/components/index"),
        },
        {
            path:"/desktop",
            name:"desktop",
            component:()=> import("@/components/desktop"),
            keepAlive:true
        },
        {
            path:"/vuex",
            name:"vuex",
            component:()=> import("@/components/vuexStore/vuex"),
        },
        {
            path:"/fighter",
            name:"fighter",
            component:()=> import("@/components/fighter/fighter-game"),
        },
        {
            path:"/*",
            name:"*",
            component:()=> import("@/components/404"),
        },
    ]
})