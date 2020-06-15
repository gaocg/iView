<!--控制台，计分板-->
<template>
    <div id="controlArea">
        <div >
            <List>
                <ListItem><lable>游戏时间</lable></ListItem>
                <ListItem><lable>积分</lable><span>{{this.$store.getters.getScore*10}}</span></ListItem>
                <ListItem><lable>消耗弹药</lable><span>{{}}</span></ListItem>
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