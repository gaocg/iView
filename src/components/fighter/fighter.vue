<!--飞机本机-->
<template>
    <div style="width:100%;height:100%">
        <Icon v-if="!this.$store.state.game.fighter.destroy" id="fighter" :style="{top:fighter.top+'px',left:fighter.left+'px'}" ref="fighter" type="md-jet" />
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
            index: 0,
            time:null,
            //键盘控制 left:左移,top:上移,right:右移,bottom:下移,space:射击
            keyBoard:{
                left:0,
                top:0,
                right:0,
                bottom:0,
                space:0
            }
        }
    },
    computed:{
        //计算属性做中间层 监听按键状态
        left(){return this.keyBoard.left},
        top(){return this.keyBoard.top},
        right(){return this.keyBoard.right},
        bottom(){return this.keyBoard.bottom},
        space(){return this.keyBoard.space},
        fighter(){return this.$store.state.game.fighter}
    },
    watch:{
        left(){
          this.setPosition();
        },
         top(){
           this.setPosition();
        },
         right(){
            this.setPosition();
        },
         bottom(){
            this.setPosition();
        },
         space(v){
            this.shoot(v);
        }
    },
    methods:{
        changeStatus(keyCode,status){
            keyCode == 37 ? this.keyBoard.left = status : 
            keyCode == 38 ? this.keyBoard.top = status : 
            keyCode == 39 ? this.keyBoard.right = status : 
            keyCode == 40 ? this.keyBoard.bottom = status : 
            keyCode == 32 ? this.keyBoard.space = status :
            null;
        },
        //设置移动方向及速度
        move(n,type){
            const move = {};
            switch(type){
                case "left"://左移 
                    move.direction = "left";
                    move.distance =  this.fighter.left >= 0 ?  this.fighter.left-=n : 0;        
                    break;
                case "top"://上移
                    move.direction = "top";
                    move.distance =  this.fighter.top > 0 ?  this.fighter.top-=n : 0;        
                    break;
                case "right"://右移
                    move.direction = "left";
                    move.distance =  this.fighter.left < 900 ?  this.fighter.left+=n : 0;        
                    break;
                case "bottom"://下移
                    move.direction = "top";
                    move.distance =  this.fighter.top >= 0 ?  this.fighter.top+=n : 0;        
                    break;       
               
            }
             return  move;
        },
        
        shoot(v){
            //if(this.time) return;//节流
            if(!v) return clearInterval(this.time);
            let position = {
                    index:this.index,
                    t:this.$refs.fighter.$el.offsetTop ,
                    l:this.$refs.fighter.$el.offsetLeft + Math.sin(45)*this.$refs.fighter.$el.clientWidth/2 -2,
                    destroy:0,
                };
            this.$store.commit("bulletShoot",position)
            this.index++;
            this.time = setInterval(()=>{
               position = {
                    index:this.index,
                    t:this.$refs.fighter.$el.offsetTop ,
                    l:this.$refs.fighter.$el.offsetLeft + Math.sin(45)*this.$refs.fighter.$el.clientWidth/2 -2,
                    destroy:0,
                };
                this.$store.commit("bulletShoot",position)
                this.index++;
            },this.fighter.shootspeed)

            
        },
        //设置飞机位置（实现飞机移动）
        setPosition(){
            var list = [];
           for(const k in this.keyBoard){
               if(this.keyBoard[k]){
                   list.push(k);
                    const move = this.move(1,k);
                    this.$store.commit("upDataFighter",this.fighter)
                    this.$refs.fighter.$el.style[move.direction] = move.distance + "px";
               }
           }
           if(!list.length) return;

           setTimeout(()=>{
               this.setPosition()
           },this.movespeed)
        }
    },
    mounted(){
        window.addEventListener("keydown",(e)=>{
            this.$refs.fighter ? this.changeStatus(e.keyCode,1) : null;
        })
        window.addEventListener("keyup",e=>{
            this.$refs.fighter ? this.changeStatus(e.keyCode,0) : null;
        })
    }
}
</script>
<style>
#fighter{font-size:50px;transform: rotate(-45deg);display:inline-block;position: relative;}
.bullets{position: absolute;top:0;width:10px;}

</style>