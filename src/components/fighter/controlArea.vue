<!--控制台，计分板-->
<template>
    <div id="controlArea">
        <div >
            <List>
                <ListItem><label>游戏时间</label><span>{{}}</span></ListItem>
                <ListItem><label>积分</label><span>{{this.$store.getters.getScore*10}}</span></ListItem>
                <ListItem><label>消耗弹药</label><span>{{this.$store.state.game.count.length}}</span></ListItem>
            </List>
        </div>
        <Collapse >
            <Panel name="1">
                设置
                <CellGroup slot="content" class="flex">
                    <Cell ><i>高速射击:</i><i-switch  v-model="state.hightSpeed" size="small" @on-change="change" /></Cell >
                    <Cell ><i>高速移动:</i><i-switch  v-model="state.hightMove" size="small" @on-change="change" /></Cell >
                    
                </CellGroup>
            </Panel> 
        </Collapse >
        <div class="btn">
            <Button @click="start" type="primary" size="large" :disabled="this.$store.state.game.gameState==1" long>{{this.$store.state.game.gameState == 2? "重新开始":"开始"}}</Button>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            state:{
                hightSpeed:false,
                hightMove:false,
            }
        }
    },
    methods:{
        start(){
            this.$store.commit("clear");//初始化
            this.$store.commit("start");
            this.$store.dispatch("createEnemyPlane")
        },
        change(){
          console.log(this.state)
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
label{text-indent:10px;width:100px;text-align: right;}
span{text-indent:10px}
#controlArea .btn{padding:5px;border:none}
.flex{display:flex;justify-content: space-between;flex-wrap: wrap;}
.ivu-cell{width:50%}
.flex i{padding-right:10px}
</style>