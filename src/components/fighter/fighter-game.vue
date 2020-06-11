<!---->
<template>
    <Layout style="height:100%">
        <Layout>
            <Content style="height:900px">
                <fighter v-if="!this.$store.state.game.fighter.destory" />  
                <enemyPlane :key="index"  :enemyPlane="item" v-for="(item,index) in this.$store.state.game.enemyPlane"/>             
            </Content>
        </Layout>
        <Sider width="400">
            记分板
        </Sider>
    </Layout>
</template>
<script>

export default {
    components:{
        fighter:()=>import("./fighter"),
        enemyPlane:()=>import("./enemyPlane")
    },
    data(){
        return{
            timeout:"",
            index:0,
        }
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
    mounted(){
        this.addEnemyPlane()
    }
}
</script>
<style>

</style>