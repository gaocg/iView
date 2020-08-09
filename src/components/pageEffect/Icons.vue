<template>
    <div>
        <Icon class="icon" v-for="(item,index) in ICONS" :type="item" :key="index"/>
    </div>
</template>
<script>
export default {   
    props:{
        icons:null,
    },
    data(){
        return {
            ICONS:this.icons
        }
    }
}
</script>
<style scoped>
div{display: flex;justify-content: space-around;align-items: center;background: rgb(15, 10, 39);padding:20px 10px}
.icon{
    font-size:50px;
    cursor: pointer;
    border-radius: 100%;
    padding:10px;
    color:#fff;
    /*filter: invert(1);反转颜色 */
}
.icon:hover {
    filter: invert(0)
    drop-shadow(0 0 3px rgb(65, 203, 238));/*图标阴影 */
    transition: 0.6s;/*渐变效果 */
    box-shadow: 0 0 14px 4px rgb(65, 203, 238);
}
</style>