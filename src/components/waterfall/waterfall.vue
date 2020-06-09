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
        index:Number,
    },
    data(){
        return {
            split:false,
            Obj:{},
        }
    },
    watch:{

    },
    updated(){
        this.Obj[this.index] = this.$el.offsetHeight;
        this.$emit("height",this.Obj);
    },

    methods:{

    },
    mounted(){
        this.Obj[this.index] = this.$el.offsetHeight;
        this.$emit("height",this.Obj);
    }
}
</script>
<style>

</style>