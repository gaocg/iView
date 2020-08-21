<template>
    <div class="container">
        <form action="" class="login-form">
            <h2>登录</h2>
            <input type="text" name="username" placeholder="用户名">
            <input type="password" name="password" placeholder="密码" id="">
            <button type="button">登录</button>
        </form>
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
    justify-content: center;
    align-items: center;
    background:url("../../assets/b.jpg") no-repeat /*fixed*/;/*fixed:背景图不随页面滚动(background-attachment:scroll | fixed | inherit)*/
    background-size: cover;
    /*
    length      :   设置背景图高宽：只设一个值 则第二个值auto  
    percentage  :   将计算相对于背景定位区域的百分比。第一个值设置宽度，第二个值设置的高度。如果只给出一个值，第二个是设置为"auto(自动)"
    cover       :   此时会保持图像的纵横比并将图像缩放成将完全覆盖背景定位区域的最小大小。
    contain     :   此时会保持图像的纵横比并将图像缩放成将适合背景定位区域的最大大小。
    */ 
}
.login-form{
    width:300PX;
    height:200px;
    display: flex;
    flex-direction: column;
    padding:20px;
    text-align: center;
    position: relative;
    z-index: 111;
    background: inherit;
    border-radius: 18px;
    overflow: hidden;
}
.login-form::before{
    content:"";
    width:calc(100% + 20px);
    height:calc(100% + 20px);
    background: inherit;
    box-shadow:inset 0 0 0 100px rgba(255, 255,255, 0.25);/**inset:内部阴影 */
    position: absolute;
    top: -10px;
    left:-10px;
    z-index: -1;
    filter:blur(6px);/*滤镜效果(毛玻璃核心功能点)*/
    overflow: hidden;
}
.login-form h2{
    font-size: 18px;
    font-weight: 400;
    color: #3d5245;
}
.login-form input,.login-form button{
    margin:6px 0;
    height:36px;
    border:none;
    outline: none;/**点击时的边框去除 */
    background-color: rgba(255,255,255,0.3);
    border-radius: 4px;
    padding:0 14px;
    color: #3d5245;
}
.login-form input::placeholder{
    color: #3d5245;
}
.login-form button{
    margin-top:20px;
    background-color: rgba(24, 163, 77, 0.4);
    color:#fff;
    position: relative;
    overflow: hidden;
    cursor: pointer;
    transition: 0.4s;/**过度效果(hover时颜色过度时间) */
}
.login-form button:hover{
    background-color: rgba(12,80,38,0.67);
}
.login-form button::before,
.login-form button::after {
    content:"";
    display:block;
    width:80px;
    height:100%;
    position: absolute;
    left:0;
    top:0;
    transform:skewX(-15deg);/**按照水平X轴逆时针旋转15度 */
    filter:blur(30px);
    overflow: hidden;
    transform: translateX(-100px);/**translateX定义转换 只是用 X 轴的值相对于原来位置的偏移 */
}
.login-form button::after{
    width: 40px;
    background:rgba(192, 204, 241, 0.3);
    left:60px;
    filter: blur(5px);
    opacity: 0;
}
.login-form button::before{
    transition: 5s;
    transform: translateX(300px);
    opacity: 0.7;
}
/** 过度效果实现hover动画*/
.login-form button:hover::after{
    transition: 1s;
    transform: translateX(300px);
    opacity: 1;
}
</style>