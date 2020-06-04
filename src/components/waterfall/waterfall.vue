<template>
    <List :split="split" size="default" style="width:200px">
        <ListItem  :key="i" v-for="(item,i) in list">
            <img :src="item.url" style="width:100%"/>
        </ListItem>
    </List>
</template>
<script>
export default {
    props:{
        list:Array ,
    },
    data(){
        return {
            split:false
        }
    },
    watch:{
        // list:function(newV){
            
        //     //return newV;
        // }
    },
    methods:{

    },
    mounted(){    }
}
</script>
<style>

</style>