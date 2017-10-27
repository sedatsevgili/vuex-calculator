import * as types from './mutation-types'

export const add = ({commit}) => {
    commit(types.ADD)
}

export const subtract = ({commit}) => {
    commit(types.SUBTRACT)
}

export const multiply = ({commit}) => {
    commit(types.MULTIPLY)
}

export const divide = ({commit}) => {
    commit(types.DIVIDE)
}

export const clear = ({commit}) => {
    commit(types.CLEAR)
}

export const appendNumber = ({commit}, value) => {
    commit(types.APPEND_NUMBER, {value})
}

export const calculate = ({commit}) => {
    commit(types.CALCULATE)
}

export const setOperandValue = ({commit}, value) => {
    commit(types.SET_OPERAND_VALUE, {value})
}