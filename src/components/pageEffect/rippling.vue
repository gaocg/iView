<!--按钮涟漪效果-->
<template>
    <div >
        <a class="rippling-btn"  @click="showRippling(item)" v-for="(item,index) in BUTTONS" :key="index"><span class="rippling" :style="{'left':cont.left+'px','top':cont.top+'px'}" v-for="cont in item.rippling" :key="cont.id"></span>{{item.title}}</a>
    </div>
</template>
<script>
export default {
    data(){
        return {
            BUTTONS:this.buttons
        }
    },
    props:{
        buttons:null,

    },
    created(){
        this.BUTTONS = this.BUTTONS.map(item=> item={title:item,rippling:[]});
    },
    methods:{
        showRippling(item){
            //鼠标点击时坐标
            const MouseX = event.clientX;
            const MouseY = event.clientY;
            //按钮坐标
            const btnX = event.target.offsetLeft + this.offsetParent(event.target,"offsetLeft");
            const btnY = event.target.offsetTop + this.offsetParent(event.target,"offsetTop") - window.scrollY;
            //涟漪起点
            const x =  MouseX - btnX;
            const y = MouseY - btnY;
            const id = Math.random();
            item.rippling.push({"id":id,"left":x,"top":y});
            setTimeout(()=>{
               item.rippling = item.rippling.filter(v=>v.id != id)
            },1000)
        },
        //offset是获得相对于到position不为static的父节点的距离
        offsetParent(target,type){
            let v = 0;
            if(target.offsetParent){
                v = target.offsetParent[type];
                v = v + this.offsetParent(target.offsetParent,type);
            }
                return v;
        }
    },
    mounted(){

    }
}
</script>
<style scoped>
div{display: flex;justify-content: space-around;align-items: center;margin:10px;padding:10px}
a{
    display: block;
    padding:12px 36px;
    border-radius: 30px;
    min-width:100px;
    border:none;
    color:#fff;
    font-size:26px;
    font-weight: 400;
    cursor:pointer;
    overflow: hidden;
    position: relative;
    user-select: none;
    letter-spacing: 2px;/**字母间距 */
    background: linear-gradient(90deg,#0162c8,#55e7fc);/*颜色渐变*/
}
a:nth-child(2){
    font-size:22px;
    background: linear-gradient(90deg,#55e7fc,#e63f0c);/*颜色渐变*/ 
}
a:nth-child(3){
     font-size:18px;
    background: linear-gradient(90deg,#e63f0c,#d6ec0b);/*颜色渐变*/ 
}
a:nth-child(4){
     font-size:14px;
    background: linear-gradient(90deg,#d6ec0b,#e70edc);/*颜色渐变*/ 
}
a:nth-child(5){
     font-size:10px;
    background: linear-gradient(90deg,#e70edc,#0162c8);/*颜色渐变*/ 
}
span.rippling{
    animation: rippling 1s linear infinite;/**linear:匀速播放 infinite:无限播放 */
    position:absolute;
    background: #fff;
    border-radius: 50%;
    pointer-events: none;/* 使点击事件不会触发在新增的span上，防止计算点击坐标出问题 */
    transform:translate(-50%,-50%)
}

@keyframes rippling{
    0%{width:0px;height:0px;opacity:0.5;}
    100%{width:600px;height:600px;opacity:0}
}
</style>