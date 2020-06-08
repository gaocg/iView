//模块化vuex 
export default {
    moduleA :{
        state:{
            count:"初始化A",
        },
        //getter属性：
        getters:{
            getCountA:state => state.count="触发getCountA方法",
            getdoA:(state,getters) =>  getters.getCountA + "和getdoA方法"
        },
        mutations: {
            incrementA (state) {
                state.count = "触发incrementA方法"
            },
            resetA(state){
                state.count = "初始化";
            }
        },
        actions:{
            incrementA ({commit}) {
                commit("resetA")
            }
        }
    },
    moduleB : {
        state:{
            count:"初始化B",
        },
        //getter属性：
        getters:{
            getCountB:state => state.count="触发getCountB方",
            getdoB:(state,getters) =>  getters.getCountB + "和getdoB方法"
        },
        mutations: {
            incrementB (state) {
                state.count = "触发incrementB方法"
            },
            resetB(state){
                state.count = "初始化";
            }
        },
        actions:{
            incrementB ({commit}) {
                commit("resetB")
            }
        }
    }
}