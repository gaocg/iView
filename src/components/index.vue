<template>
  <Layout>
    <Sider></Sider>
    <Content>
      <Header></Header>
      <Content>
        <List>
          <ListItem ><p @click="clk">瀑布流</p></ListItem>
        </List>
      </Content>
      <Footer></Footer>
    </Content>
    <Sider></Sider>
  </Layout>
</template>

<script>
export default {
  data(){
    return {

    }
  },
  methods:{
    clk(){
      this.$router.push({name:"desktop"});
    }
  },
  mounted(){

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
