<!--生成敌机-->
<template>
    <Icon class="enemyPlane" v-if="!enemyPlane.destroy" :style="{left:enemyPlane.left+'px',top:enemyPlane.top + 'px'}" ref="enemyPlane" type="md-jet" />
</template>
<script>
export default {
    props:{
        enemyPlane:Object
    },
    data(){
        return {
            timeout:""
        }
    },
    methods:{

    },
    mounted(){
        console.log(this.enemyPlane)
        if(this.enemyPlane.destroy){
            return ;
        }
        this.timeout = setInterval(()=>{
            this.enemyPlane.top++;
            this.$store.commit("fighterDestroy",this.enemyPlane)
            if(this.enemyPlane.top > document.body.offsetHeight|| this.$store.state.game.gameState!=1 || this.enemyPlane.destroy){//超出销毁 游戏结束销毁 被击中销毁
                //this.enemyPlane.destroy = true;
                clearInterval(this.timeout)
            }
        },10)
    }
}
</script>
<style>
.enemyPlane{font-size:50px;transform: rotate(135deg);position: absolute;top:0}
</style>