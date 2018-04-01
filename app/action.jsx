/*
 * action types
 */

export const ADD_TODO = "ADD_TODO"
export const REMOVE_TODO = "REMOVE_TODO"
export const TOGGLE_TODO = "TOGGLE_TODO"
export const TOGGLE_IS_ADDING = "TOGGLE_IS_ADDING"
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'
export const ERRORS = "ERRORS"

/*
 * other constants
 */
 
export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

/*
 * action creators
 */

function addTodo(todo) {
    return {type: ADD_TODO, todo}
}
function removeTodo(index) {
    return {type: REMOVE_TODO, index}
}

function toggleTodo(index) {
    return {type: TOGGLE_TODO, index}
}

function setVisibilityFilter(filter) {
    return { type: SET_VISIBILITY_FILTER, filter }
}

function toggleIsAdding() {
    return {type: TOGGLE_IS_ADDING}
}

function errors(errors) {
    return {type: ERRORS, errors}
}

module.exports = {addTodo, removeTodo, toggleTodo, setVisibilityFilter, toggleIsAdding, errors}

