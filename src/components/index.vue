<template>
  <Layout>
    <Sider></Sider>
    <Layout>
      <Header></Header>
      <Content>
        <List class="index">
          <ListItem  v-for="(item,i) in list" :key="i"><p @click="clk(item)"><Icon :type="item.icon" />{{item.title}}</p></ListItem>
        </List>
      </Content>
      <Footer></Footer>
    </Layout>
    <Sider></Sider>
  </Layout>
</template>

<script>
export default {
  data(){
    return {
      list:require("../data/home.json")
    }
  },
  methods:{
    clk(item){
      this.$store.commit("increment");
      item.name ?this.$router.push({name:item.name}) :"";
    }
  },
  mounted(){

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.index{width:100%}
.index li{cursor: pointer;}

.index p{padding-left:10px}
</style>
