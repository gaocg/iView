<!---->
<template>
    <Layout style="height:100%">
        <Layout>
            <Content style="height:900px">
                <fighter />
                
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
        
    },
    data(){
        return{
            
        }
    },
    methods:{
    },
    mounted(){

    }
}
</script>
<style>

</style>