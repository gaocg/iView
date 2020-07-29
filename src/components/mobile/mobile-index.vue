<template>
    <div id="mobile" v-if="UA">
         <router-view></router-view>
    </div>
    <div v-else>请在移动端打开</div>
</template>
<script>
import Vue from 'vue'
import "./mobile.css";
import {Button,Row,Col} from "vant"; 
import axios from "axios";
Vue.use(Button).use(Row).use(Col)
export default {
    data(){
        return {
            state:"",
        }
    },
    computed:{
        UA(){return navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)}
    },
    methods:{

    },
    beforeMount(){
    //if(!this.checkUA()){return}
    },
    mounted(){
        axios.post("http://localhost:8081/login",{
            "id":"2"
        }).then(d=>console.log(d))
    }
}
</script>