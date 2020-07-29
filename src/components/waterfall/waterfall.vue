<template>
    <List :split="split" size="default" :style="{width:width}">
        <ListItem  :key="i" v-for="(item,i) in list">
            <img :src="item.url" style="width:100%"/>
        </ListItem>
    </List>
</template>
<script>
export default {
    props:{
        list:Array ,//图片列表哈哈
        index:Number,//当前列对于父组件的下标
        width:String,
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