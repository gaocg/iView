<!--控制台，计分板-->
<template>
    <div id="controlArea">
        <div >
            <List>
                <ListItem>游戏时间</ListItem>
                <ListItem>积分<span>{{this.$store.getters.getScore*10}}</span></ListItem>
                <ListItem>消耗弹药<span></span></ListItem>
            </List>
        </div>
         <div>设置</div>
          <div>
              <Button @click="start">开始</Button>
          </div>
    </div>
</template>
<script>
export default {
    data(){
        return {

        }
    },
    methods:{
        start(){
            this.$store.commit("start");
            this.$store.dispatch("createEnemyPlane")
        }
    },
    mounted(){

    }    
}
</script>
<style>
#controlArea{
    height:100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #fff;
}
#controlArea > div{
    width:80%;
    margin:20px auto;
    border:1px solid #fff;
    border-radius: 5px;
}
</style>