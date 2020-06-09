<template >
    <div class="desktop" >
        <waterfall @height="waterfallHeight" class="aa" ref="cc" :list="item" :key="i" :index="i"  v-for="(item,i) in waterfall" />
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
            state:true,
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
            heightList:{},
            i : 0
        }
    },
    methods:{
        radom: ()=>{
            const n = Math.floor(Math.random()*10);
            return n > 5 ? n-5 : n;
        },
        addPic:function(){
            const obj = this.list[this.radom()];
            const i = this.minHeight();
            if(this.heightList[i] < this.height){
                this.waterfall[i].push(obj);
            }else{
                this.state = true;
            }
            
        },
        scrol:function(){
            this.state = false;
            setTimeout(()=>{
                this.state = true;
                this.addPic();//添加图片
            },100)
        },
        waterfallHeight(Obj){
           this.heightList = {...this.heightList,...Obj}
        },
        minHeight(){
            let list = [];
            for(let k in this.heightList){
                list.push(this.heightList[k]);
            }
            return list.indexOf(Math.min(...list));
        }
    },

    beforeUpdate(){
        // this.scrol();
        // this.state = false;
    },
    updated(){
        //防抖
        if(this.state){
            this.scrol();
        }
        
    },
    mounted(){
        this.waterfall  = [[],[],[],[]];
        window.addEventListener("scroll",()=>{
            let top = document.documentElement.scrollTop;
            let viewh =document.documentElement.clientHeight;
            let h = document.documentElement.offsetHeight;
            if(top + viewh == h && this.state){
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