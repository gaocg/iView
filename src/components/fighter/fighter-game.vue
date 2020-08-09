<!---->
<template>
    <Layout style="height:100%">
        <Layout>
            <Content style="height:800px" id="gameArea">
                <fighter v-if="!this.$store.state.game.fighter.destory" />  
                <enemyPlane :key="index"  :enemyPlane="item" v-for="(item,index) in this.$store.state.game.enemyPlane"/>             
            </Content>
        </Layout>
        <Sider width="400" >
            <controlArea />
        </Sider>
        <Modal :value="this.$store.state.game.gameState == 2"><div>游戏结束</div></Modal>
    </Layout>
</template>
<script>

export default {
    components:{
        fighter:()=>import("./fighter"),
        enemyPlane:()=>import("./enemy-plane"),
        controlArea:()=>import("./control-area")
    },
    data(){
        return{
            timeout:"",
            state:this.$store.state.game.gameState,
            index:0,
        }
    },
    watch:{

    },
    methods:{
    },
    updated(){
    },
    mounted(){
    }
}
</script>
<style>
#gameArea{overflow: hidden;position: relative;}
</style>