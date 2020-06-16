<!---->
<template>
    <Layout style="height:100%">
        <Layout>
            <Content style="height:900px">
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
        enemyPlane:()=>import("./enemyPlane"),
        controlArea:()=>import("./controlArea")
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
        addEnemyPlane(){
            this.timeout = setInterval(()=>{
                const enemyPlane = {
                    index:this.index,
                    destroy:false,
                    left:Math.random()*500,
                    top:0
                };
                this.index++;
                this.$store.commit("addEnemyPlane",enemyPlane)
            },2000)
        }
    },
    updated(){
    },
    mounted(){
        //this.addEnemyPlane()
    }
}
</script>
<style>

</style>