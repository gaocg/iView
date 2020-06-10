<!--飞机本机-->
<template>
    <div style="width:100%;height:100%">
        <div id="fighter" ><Icon type="md-jet" /></div>
        <shoot :key="item" v-for="(item) in bullets" />
    </div>
    
</template>
<script>
export default {
    components:{
        shoot:()=>import("./shoot")
    },
    data(){
        return {
            top:"",
            left:"",
            bullets:0 
            ,//子弹数量
        }
    },
    methods:{
        //飞机移动方向及速度
        move(n,type){
            const move = {};
            switch(type){
                case 37://左移 
                    move.direction = "left";
                    move.distance =  this.left >= 0 ?  this.left-=n : 0;        
                    break;
                case 38://上移
                    move.direction = "top";
                    move.distance =  this.top > 0 ?  this.top-=n : 0;        
                    break;
                case 39://右移
                    move.direction = "left";
                    move.distance =  this.left < 900 ?  this.left+=n : 0;        
                    break;
                case 40://下移
                    move.direction = "top";
                    move.distance =  this.top >= 0 ?  this.top+=n : 0;        
                    break;       
                case 32://射击
                    this.bullets++;
                    this.shoot();
                    break;
            }
             return  move;
        },
        shoot(){
            setInterval(()=>{
                
            },100)
        }
    },

    mounted(){
        this.left = this.$el.offsetLeft;
        console.log(this.$el.offsetTop);
        this.top = this.$el.offsetTop;
        window.onkeydown = (e)=>{
            const move = this.move(10,e.keyCode);
            this.$el.style[move.direction] = move.distance + "px";
        }
        
    }
}
</script>
<style>
#fighter{width:50;height:50px;font-size:50px;transform: rotate(-45deg);display:inline-block;position: relative;left:45%;top:90%;}
.bullets{position: absolute;top:0;width:10px;animation: shoot 1s}
@keyframes shoot{
    from {top:0}
}
</style>