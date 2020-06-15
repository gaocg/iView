<!--发射子弹-->
<template>
    <Icon v-if="!position.destroy"  :style="{top:position.t+'px'}" type="ios-send-outline" />
</template>
<script>
export default {
    props:{
        position:Object
    },
    data(){
        return {
            timeout:"",
        }
    },
    methods:{
        moveUp(){
            this.position.t-=1;
            this.$store.commit("destroy",this.position)
            if(this.position.t < 0){
                this.position.destroy = 2;
            }
        }
    },
    
    mounted(){
        if(this.position.destroy){
            return ;
        }
        this.$el.style.top = this.position.t + "px";
        this.$el.style.left = this.position.l + "px";
        this.timeout = setInterval(()=>{
            this.moveUp();
            if(this.position.destroy){
                clearInterval(this.timeout)
            }
        },1);
    },
}
</script>
<style>
i{display: inline-block;transform: rotate(-45deg);position: absolute;}
</style>