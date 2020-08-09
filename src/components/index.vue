<template>
    <Layout>
      <Header></Header>
      <Layout>
        <Sider style="background:#f7f7f7;max-height:600px;overflow:hidden;overflow-y:auto">
          <Collapse accordion>
            <Panel v-for="(item,index) in menu" :key="index">
              {{item.title}}
              <List slot="content" >
                <ListItem  v-for="(list,i) in item.children" :key="i"><p @click="clk(list)"><Icon :type="list.icon" />{{list.title}}</p></ListItem>
              </List>
            </Panel>
          </Collapse>
        </Sider>
        <Content style="margin:10px;min-height:500px">
          <home :name="name"/>
        </Content> 
      </Layout>
      <Footer >
        <div class="footer">xxxxx-xxxxx @xxxxxxxx </div>
      </Footer>
    </Layout>
</template>

<script>
import menu from "../data/leftMenu.json";
export default {
  data(){
    return {
      menu:menu,
      name:"desktop"
    }
  },
  components:{
    home:()=>import("./home.vue")
  },
  methods:{
    //切换展示视图
    clk(item){
      this.name = item.name;
      //item.name ?this.$router.push({name:item.name}) :"";
    }
  },
  mounted(){
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
.ivu-collapse-content{padding:0 0px}
.ivu-collapse-content>.ivu-collapse-content-box{padding:0px}
.ivu-list-item:hover{cursor: pointer;background: #fafafa;}
.ivu-list-item p{padding-left:40px}
.index{width:100%;background: #fff;}
.index li{cursor: pointer;}

.index p{padding-left:10px}
.footer{text-align: center;}
</style>
