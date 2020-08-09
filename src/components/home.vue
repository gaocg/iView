<template>
<div>
    <keep-alive>
        <component :is="component" v-if="$route.meta.keepAlive" />
    </keep-alive>
    <component :is="component" v-if="!$route.meta.keepAlive" />  
</div>
</template>
<script>
export default {
    props:{
        name:{
            type:null,
            default:"desktop"
        }
    },
    data(){
        return {
            component:  ""
        }
    },
    methods:{
        checkRoute(lis){
            var list = lis || this.$router.options.routes;
            for(let i = 0;i<list.length ;i++){ 
                
                if(list[i].name == this.name){
                    return list[i].component;
                }
                if(list[i].children){//迭代查找子组件
                    this.checkRoute(list[i].children)
                }
                //this.$router.options.routes[i].children ? this.checkRoute() : null;
            }
        }
    },
    updated(){
        
    },
    watch:{    
        name(){
           this.component = this.checkRoute();
        }
    },
    mounted(){
        this.component = this.checkRoute();
    }
}
</script>