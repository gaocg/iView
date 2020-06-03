<template>
    <List size="default" style="width:200px">
        <ListItem  :key="i" v-for="(item,i) in list">
            <img :src="item.url" style="width:100%"/>
        </ListItem>
    </List>
</template>
<script>
export default {
    props:{
        list:Array,
    },
    data(){
        return {
            a:2
        }
    },
    methods:{

    },
    mounted(){    }
}
</script>
<style>

</style>