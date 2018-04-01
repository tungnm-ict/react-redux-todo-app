/*
 * action types
 */

export const ADD_TODO = "ADD_TODO"
export const REMOVE_TODO = "REMOVE_TODO"
export const TOGGLE_IS_ADDING = "TOGGLE_IS_ADDING"
export const ERRORS = "ERRORS"

/*
 * action creators
 */

function addTodo(todo) {
    return {type: ADD_TODO, todo}
}
function removeTodo(index) {
    return {type: REMOVE_TODO, index}
}

function toggleIsAdding() {
    return {type: TOGGLE_IS_ADDING}
}

function errors(errors) {
    return {type: ERRORS, errors}
}

module.exports = {addTodo, removeTodo, toggleIsAdding, errors}

