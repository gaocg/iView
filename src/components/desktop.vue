<template @scroll.native="scrol">
    <div class="desktop">
        <waterfall class="aa" ref="cc" :list="item" :key="i" v-for="(item,i) in waterfall" />
    </div>
    
</template>
<script>
const waterfall = ()=>import("../components/waterfall/waterfall");
console.log(waterfall);
export default {
    components:{
        "waterfall":waterfall
    },
    data(){
        return {
            state:false,
            list:[
                {"id":"a","url":require("../assets/a.jpeg")},
                {"id":"b","url":require("../assets/b.jpg") },
                {"id":"c","url":require("../assets/c.jpeg")},
                {"id":"d","url":require("../assets/d.jpg") },
                {"id":"e","url":require("../assets/e.jpg") },
                {"id":"f","url":require("../assets/f.jpg") },
            ],
            waterfall:[],
            height:window.outerHeight,
        }
    },
    methods:{
        radom: ()=>{
            const n = Math.floor(Math.random()*10);
            return n > 5 ? n-5 : n;
        },
        addPic:function(list){
             let i = this.checkHeight(list);//获得高度最低的列下标
            if(!list){
                const obj = this.list[this.radom()];
                this.waterfall[i].push(obj);
            }else if( list[i].$el.offsetHeight < this.height){
                const obj = this.list[this.radom()];
                this.waterfall[i].push(obj);
                
            }else{
                this.state = false;
            }
            
        },
        checkHeight:(list)=>{
            let i = 0;
            for(let k in list){
                if(list[i].$el.offsetHeight > list[k].$el.offsetHeight){
                    i = k;
                }
            }
            return i;
        },
        scrol:function(){
            let list = this.$refs.cc;

            setTimeout(()=>{
                    this.addPic(list);//添加图片
            },100)
        }
    },

    beforeUpdate(){
        this.scrol();
        this.state = false;
    },
    updated(){

    },
    mounted(){
        this.waterfall  = [[],[],[],[]];
        window.addEventListener("scroll",()=>{
            let top = document.documentElement.scrollTop;
            let viewh =document.documentElement.clientHeight;
            let h = document.documentElement.offsetHeight;
            if(top + viewh == h){
                this.state = true;
                this.height+= window.outerHeight;
                this.scrol();//添加图片
            }
        })
    }
}
</script>
<style>
.desktop{overflow: hidden;}
.aa{float:left;margin:0 10px}
</style>