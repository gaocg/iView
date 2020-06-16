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
            gameState:0,//游戏状态
            count:[],
            enemyPlane:[],
            fighter:{
                fontSize:"50px",//飞机尺寸
                destroy:true
            }
        },
        //getter属性：
        getters:{
            getScore:state => state.count.filter(item=> item.destroy == 1).length,
            //getdoB:(state,getters) =>  getters.getCountB + "和getdoB方法"
        },
        mutations: {
            //开始游戏
            start(state){
                state.fighter.destroy = false;
                state.gameState = 1;
            },
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
                        bullet.destroy = 1;
                    }
                })
            },
            upDataFighter(state,fighter){
                state.fighter = {...fighter};
            },
            //
            fighterDestroy(state,enemyPlane){
                const coordinate = {
                    min_x:enemyPlane.left,
                    max_x:enemyPlane.left+50,//50是敌机尺寸
                    min_h:enemyPlane.top,
                    max_h:enemyPlane.top+50,
                }
                if(state.fighter.left+50 > coordinate.min_x 
                    && state.fighter.left < coordinate.max_x 
                    && state.fighter.top+50 > coordinate.min_h 
                    && state.fighter.top < coordinate.max_h){
                    console.log(state.fighter,enemyPlane);
                    state.fighter.destroy = true;
                    enemyPlane.destroy = true;
                    state.gameState = 2;
                }
            }
        },
        actions:{
            createEnemyPlane(ctx){
                let time= "";
                if(ctx.state.gameState == 1){
                    time = setInterval(()=>{
                        console.log(ctx.state.gameState)
                        const enemyPlane = {
                            index:ctx.state.enemyPlane.length,
                            destroy:false,
                            left:Math.random()*500,
                            top:0
                        };
                        ctx.commit("addEnemyPlane",enemyPlane);
                        if(ctx.state.gameState != 1){
                            clearInterval(time)
                        }
                    },2000)
                }
               
            }
        }
    }
}