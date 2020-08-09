<template>
    <div class="">
        <Card >
            <p slot="title">按钮涟漪效果</p>
            <buttons  :buttons="buttons"/>
        </Card>
        <Card >
            <p slot="title">图标hover发光效果</p>
            <icons  :icons="icons"/>
        </Card>
    </div>
</template>
<script>
export default {
    data(){
        return {
            buttons:["BUTTON1","BUTTON2","BUTTON3","BUTTON4","BUTTON5"],
            icons:["logo-windows","logo-xbox","logo-snapchat","logo-github","logo-playstation"],
        }
    },
    components:{
        buttons:()=>import("./rippling"),
        icons:()=>import("./Icons"),
    }
}
</script>
<style >
.ivu-card-body{padding:0 }
</style>