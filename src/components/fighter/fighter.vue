<!--飞机本机-->
<template>
    <div id="fighter"></div>
</template>
<script>
export default {
    data(){
        return {
            top:"",
            left:""
        }
    },
    methods:{
        //飞机移动方向及速度
        move(n,type){
            switch(type){
                case "top":
                    return this.top+=n;
                case "bottom":
                    return this.top-=n;
                case "left":
                    return this.left-=n;
                case "right":
                    return this.left+=n;
                default:
                    return 0;
            }
        },
    },
    
    mounted(){
        this.left = this.$el.offsetLeft;
        window.onkeydown = ()=>{
            if(this.left>2){
                this.$el.style.left = this.move(4,"left") + "px";
            }
            
        }
    }
}
</script>
<style>
#fighter{width:100px;height:100px;display:inline-block;position: relative;left:45%}
</style>