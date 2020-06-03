import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import 'view-design/dist/styles/iview.css';
import ViewUI  from "view-design";
Vue.config.productionTip = false
Vue.use(ViewUI );
new Vue({
  router,
  render: h => h(App),
  
}).$mount('#app')
