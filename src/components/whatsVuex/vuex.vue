<template>
    <div>
        <ul>
            <li>{{this.$store.state.a.count}}</li>
            <li>{{getdoA}}</li>
            <li>{{getCountA}}</li>
            <li>{{this.$store.state.b.count}}</li>
            <li>{{getdoB}}</li>
            <li>{{getCountB}}</li>
        </ul>
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
    ])
    },
    mounted(){
        this.$store.commit("incrementA");
        this.$store.dispatch("incrementB");
    }
}
</script>