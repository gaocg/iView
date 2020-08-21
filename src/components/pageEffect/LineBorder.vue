<template>
    <div class="container">
        <div class="button-wrapper">
            <svg width="240" height="60">
                <rect class="rectangle" width="240" height="60"></rect>
            </svg>
            <div class="button">按钮</div>
        </div>
        
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.container{
    padding:40px;
    display: flex;
    justify-content: center;
    align-items: center;
    width:100%;
    height:100%;
    background: #2f3542;
}
.button-wrapper{
    position: relative;
    text-align: center;
    width:240px;
    height:60px;
}
.rectangle{
    stroke-width:8px;/**定义svg中一条线的宽度 */
    stroke:#ff6348;/**定义svg中一条线的颜色 */
    fill:transparent;/**填充效果 透明 */
    stroke-dasharray: 100 500;/** 虚线 长度100 间隔500 实现线段效果*/
    stroke-dashoffset: -374;/**相对于初始状态的位置（下部居中） */
}
.button{
    color:#fff;
    font-size: 18px;
    letter-spacing: 6px;
    position: relative;
    top:-48px;
}
@keyframes extend {
    to{
        stroke-dasharray: 600;
        stroke-dashoffset: 0;
        stroke-width: 2;
    }
}
.button-wrapper:hover .rectangle{
    animation: 0.5s extend linear forwards;
}
</style>