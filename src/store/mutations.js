import * as types from './mutation-types'

export default {
    [types.APPEND_NUMBER] (state, { value }) {
        state.value = parseFloat(state.value.toString() + value.toString());
    },

    [types.ADD] (state, { value }) {
        state.value += value
    },

    [types.SUBTRACT] (state, {value}) {
        state.value -= value
    },

    [types.DIVIDE] (state, {value}) {
        state.value /= value
    },

    [types.MULTIPLY] (state, {value}) {
        state.value *= value
    },

    [types.CLEAR] (state) {
        state.value = 0
    }
}