import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

import getters from './getters'
import mutations from './mutations'
import actions from './actions'

// 定义state
const state = {
    todos : [
        {text : 'vuex',done : true},
        {text : 'react',done : false},
        {text : 'react-native',done : false},
        {text : 'weex',done : false},
    ]
}

export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions
});