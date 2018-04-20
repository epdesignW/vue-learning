import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const state = {
    count:1
}
const mutations = {
    add(state){
        state.count++;
        
    },
    reduce(state){
        state.count--;
    }
}
const getters = {
    count:function(state){
        return state.count += 20000;
    }
}
const actions = {
    addAction(context){
        context.commit('add');
        console.log('我比reduce提前执行');
    },
    reduceAction({commit}){
        commit('reduce');
    },
    //setTimeOut(()=>{context.commit(reduce)},3000);
}

export default new Vuex.Store({
    state,
    mutations,
    getters,
    actions
});