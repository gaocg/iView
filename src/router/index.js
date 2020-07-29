import Vue from "vue";
import Router from "vue-router";

Vue.use(Router)
const root = "/vue";
export default new Router({
    mode:   "history",
    routes :[
        {
            path:root,
            name:"index",
            component:()=> import("@/components/index"),
        },
        {
            path:root +"/desktop",
            name:"desktop",
            component:()=> import("@/components/desktop"),
            keepAlive:true
        },
        {
            path:root +"/vuex",
            name:"vuex",
            component:()=> import("@/components/vuexStore/vuex"),
        },
        {
            path:root +"/fighter",
            name:"fighter",
            component:()=> import("@/components/fighter/fighter-game"),
        },
        {
            path:root +"/mobile",
            name:"mobile",
            component:()=> import("@/components/mobile/mobile-index"),
            children:[{
                path:root +"/mobile/fighter",
                name:"fighter",
                component:()=> import("@/components/fighter/fighter-game"),
            },]
        },
        {
            path:root +"/*",
            name:"*",
            component:()=> import("@/components/404"),
        },
    ]
})