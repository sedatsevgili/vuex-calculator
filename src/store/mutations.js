import * as types from './mutation-types'

export default {
    [types.APPEND_NUMBER] (state, { value }) {
        if (state.append) {
            state.visibleValue = parseFloat(state.visibleValue.toString() + value.toString())
        } else {
            state.visibleValue = parseFloat(value)
            state.append = true
        }
        if (state.operator) {
            state.secondOperand = state.visibleValue
        } else {
            state.firstOperand = state.visibleValue
        }
    },

    [types.ADD] (state) {
        state.append = false
        if (state.operator) {
            calculate(state)
            state.operator = 'ADD'
            return
        }
        state.operator = 'ADD'

        if (state.firstOperand && state.secondOperand) {
            state.result = state.firstOperand + state.secondOperand
            state.firstOperand = state.result
            state.secondOperand = null
        }
    },

    [types.SUBTRACT] (state) {
        state.append = false
        if (state.operator) {
            calculate(state)
            state.operator = 'SUBTRACT'
            return
        }
        state.operator = 'SUBTRACT'

        if (state.firstOperand && state.secondOperand) {
            state.result = state.firstOperand - state.secondOperand
            state.firstOperand = state.result
            state.secondOperand = null
        }
    },

    [types.DIVIDE] (state) {
        state.append = false
        if (state.operator) {
            calculate(state)
            state.operator = 'DIVIDE'
            return
        }
        state.operator = 'DIVIDE'

        if (state.firstOperand && state.secondOperand) {
            state.result = state.firstOperand / state.secondOperand
            state.firstOperand = state.result
            state.secondOperand = null
        }
    },

    [types.MULTIPLY] (state) {
        state.append = false
        if (state.operator) {
            calculate(state)
            state.operator = 'MULTIPLY'
            return
        }
        state.operator = 'MULTIPLY'

        if (state.firstOperand && state.secondOperand) {
            state.result = state.firstOperand * state.secondOperand
            state.firstOperand = state.result
            state.secondOperand = null
        }
    },

    [types.CALCULATE] (state) {
        state.append = false
        calculate(state)
        state.visibleValue = state.result
        state.operator = null
    },

    [types.CLEAR] (state) {
        state.result = 0
        state.visibleValue = 0
        state.firstOperand = null
        state.secondOperand = null
        state.operator = null
    },

    [types.SET_OPERAND_VALUE] (state, {value}) {
        if (state.operator) {
            state.secondOperand = parseFloat(value)
        } else {
            state.firstOperand = parseFloat(value)
        }
        state.visibleValue = parseFloat(value)
    }
}

function calculate(state) {
    if (! state.firstOperand || ! state.secondOperand || ! state.operator) {
        return
    }
    if (state.operator === 'ADD') {
        state.result = state.firstOperand + state.secondOperand
    } else if (state.operator === 'SUBTRACT') {
        state.result = state.firstOperand - state.secondOperand
    } else if (state.operator === 'MULTIPLY') {
        state.result = state.firstOperand * state.secondOperand
    } else if (state.operator === 'DIVIDE') {
        state.result = state.firstOperand / state.secondOperand
    }
    state.firstOperand = state.result
    state.secondOperand = null
}