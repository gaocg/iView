<template>
<div class="container">
    <div class="cube">
        <div class="img1"></div>
        <div class="img2"></div>
        <div class="img3"></div>
        <div class="img4"></div>
        <div class="img5"></div>
        <div class="img6"></div>
    </div>
</div>
    
</template>
<script>
export default {

}
</script>
<style scoped>
.container{
    width:100%;
    padding:40px;
    display: flex;
    
    background: #2f3542;
}
.cube{

    width:150px;
    height:150px;
    transform-style: preserve-3d;/*所有子元素在3d空间展示*/ 
    margin:auto;
    animation: rotate-cube 5s ease-in-out infinite;/**ease-in-out：动画播放缓慢开始缓慢结束; infinite:缓慢结束*/
}

.cube > div{
    width:150px;
    height:150px;
    background-size: cover;
    background-position: center center;
    opacity: 0.9;
    position: absolute;
    box-shadow: inset 0 0 4px 2px rgba(106, 106, 106, 0.4);
}
/**
translateZ:代表元素在其基础位置上Z轴方向重新定位;这里6个图片在设置绝对定位后
是重叠在一起的;设置了translateZ后元素在3d空间中就有了层次；配合rotateX 和rotateXY;
实现了立方体效果(元素有translateZ值时 rotate效果坐标轴根据原来位置旋转,不然也无法形成立方体图)
 */
/**前 */
.cube .img1{
    background: url("../../assets/a.jpeg");
    transform: translateZ(75px);
}
/**右 */
.cube .img2{
    background: url("../../assets/b.jpg");
    transform: rotateY(90deg) translateZ(75px);
}
/**左 */
.cube .img3{
    background: url("../../assets/c.jpeg");
    transform: rotateY(-90deg) translateZ(75px);
}
/**下 */
.cube .img4{
    background: url("../../assets/d.jpg");
    transform: rotateX(90deg) translateZ(75px);
}
/**上 */
.cube .img5{
    background: url("../../assets/e.jpg");
    transform: rotateX(-90deg) translateZ(75px);
}
/**后 */
.cube .img6{
    background: url("../../assets/f.jpg");
    transform: rotateY(180deg) translateZ(75px);
}
@keyframes rotate-cube {
    0%{
        transform: rotateX(0deg) rotateY(0deg);
    }
    /*右 */
    20%{
        transform: rotateY(-90deg);
    }
    /*上 */
    40%{
        transform: rotateX(-90deg) ;
    }
    /*左 */
    60%{
        transform: rotateY(90deg);
    }
    /* */
    80%{
        transform: rotateX(90deg);
    }
    /*右 */
    100%{
        transform: rotateX(0deg) rotateY(0deg);
    }
}
</style>