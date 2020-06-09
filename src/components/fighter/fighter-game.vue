<!---->
<template>
    <Layout >
        <Layout>
            <Content><fighter/></Content>
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