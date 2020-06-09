<template>
    <div>
        
        <ul >
            <li><p>{{this.$store.state.a.count}}</p></li>
            <li><p>{{getdoA}}</p></li>
            <li><p>{{getCountA}}</p></li>
            <li><p>{{this.$store.state.b.count}}</p></li>
            <li><p>{{getdoB}}</p></li>
            <li><p>{{getCountB}}</p></li>
        </ul>
        <Button @click="click">触发1</Button>
        <Button @click="click2">触发2</Button>
        <Button @click="reset">reset</Button>
    </div>
</template>
<script>
import {mapGetters,mapMutations,mapActions} from "vuex";
export default {
    data(){
        return {
            
        }
    },
    computed:{
        // ...mapState([
        //     moduleA:state=>state.
        // ]),
        //将getters映射到局部computed
        ...mapGetters([
            "getCountA",
            "getdoA",
            "getCountB",
            "getdoB",
        ])
    },
    methods:{

        ...mapMutations([
            "incrementA",
            ]),
        ...mapActions([
            "incrementA"
        ]),
        click(){
            this.$store.commit("incrementA");
        },
        click2(){
            this.$store.commit("incrementB");
        },
        reset(){
            this.$store.dispatch("incrementA");
            this.$store.dispatch("incrementB");
        }
    },
    mounted(){
        
    }
}
</script>
<style>
p{width:300px;display:inline-block}
</style>