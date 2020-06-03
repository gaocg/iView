<template @scroll.native="scrol">
    <div >
        <waterfall class="aa" ref="cc" :list="item" :key="i" v-for="(item,i) in waterfall" />
        
    </div>
    
</template>
<script>
const waterfall = ()=>import("../components/waterfall/waterfall");
export default {
    components:{
        "waterfall":waterfall
    },
    data(){
        return {
            list:[
                {"id":"a","url":require("../assets/a.jpeg")},
                {"id":"b","url":require("../assets/b.jpg") },
                {"id":"c","url":require("../assets/c.jpeg")},
                {"id":"d","url":require("../assets/d.jpg") },
                {"id":"e","url":require("../assets/e.jpg") },
                {"id":"f","url":require("../assets/f.jpg") },
            ],
            waterfall:[[
                {"id":"a","url":require("../assets/a.jpeg")},
                {"id":"b","url":require("../assets/b.jpg") },
                {"id":"c","url":require("../assets/c.jpeg")},
                {"id":"d","url":require("../assets/d.jpg") },
                {"id":"e","url":require("../assets/e.jpg") },
                {"id":"f","url":require("../assets/f.jpg") },
            ],[
                {"id":"a","url":require("../assets/a.jpeg")},
                {"id":"b","url":require("../assets/b.jpg") },
                {"id":"c","url":require("../assets/c.jpeg")},
                {"id":"d","url":require("../assets/d.jpg") },
                {"id":"e","url":require("../assets/e.jpg") },
              
            ]]
        }
    },
    methods:{
        radom: ()=>{
            return Math.random();
        },
        scrol:function(e){
            console.log(e);
        }
    },
    beforeMount(){
      console.log(1);
    },
    computed:{
        minHeight:(e)=>{
            console.log(e);
            let list = e.$refs;
            console.log(list.cc);
            return list;
        }
    },
    mounted(){
        setTimeout(()=>{
        },1000)
      
     
    }
}
</script>
<style>
div{display:flex;}
</style>