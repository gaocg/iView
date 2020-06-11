<!--飞机本机-->
<template>
    <div style="width:100%;height:100%">
        <Icon id="fighter" :style="{}" ref="fighter" type="md-jet" />
        <shoot  :key="index" :position="item" v-for="(item,index) in this.$store.state.game.count" />
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
            //bullets:this.$store.state.game.count,//子弹数量
            index: 0,
            fighter:{
                fontSize:this.$store.state.game.fighter.fontSize,
                //top:this.$store.state.game.fighter.fontSize,
            }
        }
    },
    methods:{
        //飞机移动方向及速度
        move(n,type){
            const move = {};
            switch(type){
                case 37://左移 
                    move.direction = "left";
                    move.distance =  this.fighter.left >= 0 ?  this.fighter.left-=n : 0;        
                    break;
                case 38://上移
                    move.direction = "top";
                    move.distance =  this.fighter.top > 0 ?  this.fighter.top-=n : 0;        
                    break;
                case 39://右移
                    move.direction = "left";
                    move.distance =  this.fighter.left < 900 ?  this.fighter.left+=n : 0;        
                    break;
                case 40://下移
                    move.direction = "top";
                    move.distance =  this.fighter.top >= 0 ?  this.fighter.top+=n : 0;        
                    break;       
                case 32://射击 
                    this.shoot();
                    break;
            }
             return  move;
        },
        
        shoot(){
            const position = {
                index:this.index,
                t:this.$refs.fighter.$el.offsetTop ,
                l:this.$refs.fighter.$el.offsetLeft + Math.sin(45)*this.$refs.fighter.$el.clientWidth/2 -2,
                destroy:false,
            };
            this.$store.commit("bulletShoot",position)
            this.index++;
        }
    },
    mounted(){
        this.fighter.left = this.$refs.fighter.$el.offsetLeft;
        this.fighter.top = this.$refs.fighter.$el.offsetTop;
        window.onkeydown = (e)=>{
            const move = this.move(10,e.keyCode);
            this.$store.commit("upDataFighter",this.fighter)
            this.$refs.fighter.$el.style[move.direction] = move.distance + "px";
        }
    }
}
</script>
<style>
#fighter{font-size:50px;transform: rotate(-45deg);display:inline-block;position: relative;left:45%;top:90%;}
.bullets{position: absolute;top:0;width:10px;}

</style>