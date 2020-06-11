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
    },
    gameModule : {
        state:{
            count:[],
            enemyPlane:[],
            fighter:{
                fontSize:"50px",//飞机尺寸
            }
        },
        //getter属性：
        getters:{
            //getCountB:state => state.count="触发getCountB方",
            //getdoB:(state,getters) =>  getters.getCountB + "和getdoB方法"
        },
        mutations: {
            bulletShoot (state,obj) {//发射子弹
                state.count.push(obj)
            },
            addEnemyPlane(state,obj){//创造敌机
                state.enemyPlane.push(obj)
            },
            //计算命中
            destroy(state,bullet){
                const coordinate = {
                    min_x:bullet.l,
                    max_x:bullet.l+50,//50是敌机尺寸
                    min_h:bullet.t,
                    max_h:bullet.t+50,
                }
                state.enemyPlane.map((item)=>{
                    if(item.left < coordinate.min_x && item.left < coordinate.max_x && item.top > coordinate.min_h && item.top < coordinate.max_h){
                        item.destroy = true;
                        bullet.destroy = true;
                    }
                })
            },
            upDataFighter(state,fighter){
                state.fighter = {...fighter};
                console.log(fighter)
            },
            //
            fighterDestroy(state,enemyPlane){
                const coordinate = {
                    min_x:enemyPlane.left,
                    max_x:enemyPlane.left+50,//50是敌机尺寸
                    min_h:enemyPlane.top,
                    max_h:enemyPlane.top+50,
                }
                if(state.fighter.left > coordinate.min_x && state.fighter.left < coordinate.max_x && state.fighter.top > coordinate.min_h && state.fighter.top < coordinate.max_h){
                    state.fighter.destroy = true;
                    enemyPlane.destroy = true;
                }
            }
        },
        actions:{
        }
    }
}