import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import Vuex from "vuex";
import 'view-design/dist/styles/iview.css';
import ViewUI  from "view-design";
import Module from "./components/vuexStore/vuexData";
Vue.config.productionTip = false
Vue.use(ViewUI );
Vue.use(Vuex );
const store = new Vuex.Store({
  // state:{
  //   count:"初始化",
  // },
  // //getter属性：
  // getters:{
  //   getCount:state => state.count="触发getCount方法",
  //   getdo:(state,getters) =>  getters.getCount + "和getdo方法"
  // },
  // mutations: {
  //   increment (state) {
  //     state.count = "触发increment方法2"
  //   }
  // },
  // actions:{

  // }
  modules:{
     
      a:Module.moduleA,
      b:Module.moduleB,
  }
});
new Vue({
  store,
  router,
  render: h => h(App),
  
}).$mount('#app')
