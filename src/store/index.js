import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import * as actions from './actions'

Vue.use(Vuex)

const state = {
    result: 0,
    visibleValue: 0,
    firstOperand: null,
    operator: null,
    secondOperand: null,
    append: true
}

export default new Vuex.Store({
    state,
    actions,
    mutations
})