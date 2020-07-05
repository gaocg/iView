<template >
    <div class="desktop" >
        <waterfall @height="waterfallHeight" class="aa" ref="cc" :width="width" :list="item" :key="i" :index="i"  v-for="(item,i) in waterfall" />
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
            width:"",
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
            const obj = this.list[this.radom()];//随机抽取图片
            const i = this.minHeight();// 找到最低高度的列
            if(this.heightList[i] < this.height){//最低高度的列高小于文档列高
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
        waterfallHeight(Obj){//将子元素提交的高度更新到对象上
           this.heightList = {...this.heightList,...Obj}
        },
        minHeight(){//找出该对象中 高度最低的项
            let list = [];
            for(let k in this.heightList){
                list.push(this.heightList[k]);
            }
            return list.indexOf(Math.min(...list));
        }
    },
    updated(){
        //防抖
        if(this.state){
            this.scrol();
        }
       this.width = this.$el.offsetWidth/this.waterfall.length + "px";
        
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
        window.onresize = ()=>{
            this.width = this.$el.offsetWidth/this.waterfall.length + "px";
        }
    }
}
</script>
<style>
.desktop{overflow: hidden;}
.aa{float:left;padding:0 10px;box-sizing: border-box;}
</style>