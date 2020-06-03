<template @scroll.native="scrol">
    <div class="desktop">
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
            waterfall:[]
        }
    },
    methods:{
        radom: ()=>{
            const n = Math.floor(Math.random()*10);
            return n > 5 ?n-5 : n;
        },
        addPic:function(i){
            const obj = this.list[this.radom()];
            this.waterfall[i].push(obj);
        },
        checkHeight:(list)=>{
            let i = 0;
            for(let k in list){
                if(list[i].$el.offsetHeight > list[k].$el.offsetHeight){
                    i = k;
                }
            }
            return i;
        }
    },

    updated(){
        let list = this.$refs.cc;
        let i = this.checkHeight(list);//获得高度最低的列下标
        if( list[i].$el.offsetHeight < window.outerHeight){
            setTimeout(()=>{
                this.addPic(i);//添加图片
            },100)
            
        }
    },
    mounted(){
        this.waterfall  = [[],[],[],[]];
    }
}
</script>
<style>

.aa{float:left;margin:0 10px}
</style>