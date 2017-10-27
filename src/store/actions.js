import * as types from './mutation-types'

export const add = ({commit}, value) => {
    commit(types.ADD, {value})
}

export const subtract = ({commit}, value) => {
    commit(types.SUBTRACT, {value})
}

export const multiply = ({commit}, value) => {
    commit(types.MULTIPLY, {value})
}

export const divide = ({commit}, value) => {
    commit(types.DIVIDE, {value})
}

export const clear = ({commit}) => {
    commit(types.CLEAR)
}