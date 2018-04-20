<template>
    <div>
        <h2>{{msg}}</h2>
        <router-link to="/">返回首页</router-link>
        <hr>
        <p>state访问状态对象</p>
                count2:0
        <p>{{ $store.state.count }}--{{count}}--{{count2}}</p>
        <p>
            <button @click="add">加分</button>
            <button @click="add2">加100分</button>
            <button @click="reduce">减分</button>
        </p>
        <hr>
        <p>
            <button @click="addAction">加分</button>
            <button @click="reduceAction">减分</button>            
        </p>
    </div>
</template>
<script>
    import store from '@/vuex/store'
    import {mapState,mapMutations,mapGetters,mapActions} from 'vuex'
    export default{
        data(){
            return{
                msg:'hello Vuex',
                count2:0
            }
        },
        store,
        // computed:mapState({
        //     count:state => state.count
        // })
        computed:{
            ...mapState(['count']),
            ...mapGetters(['count'])
            // count3(){
            //     return this.$store.getters.count;
            // }
        },
        methods:{
            ...mapMutations(['add','reduce']),
            add2(){
                this.count2 += 100;
            },
            ...mapActions(['addAction','reduceAction'])

        },
        
        
    }
</script>