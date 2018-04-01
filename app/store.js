var redux = require('redux');

var initialState = {
    todoLists: ['ReactJs', 'Redux', 'React Native'],
    isAdding: false
};

var reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'TOGGLE_IS_ADDING':
            return {...state, isAdding : !state.isAdding}
        case 'ADD_ITEM':
            return {...state, todoLists: [...state.todoLists, action.item]}
        case 'REMOVE_ITEM':
            return {...state, todoLists: state.todoLists.filter((e, i) => i != action.index) }
        default:
            return state;
    } 
}

var store = redux.createStore(reducer);

store.subscribe(() => console.log(store.getState())) 

store.dispatch({type: 'TOGGLE_IS_ADDING'});
store.dispatch({type: 'ADD_ITEM', item: 'NodeJS'});
store.dispatch({type: 'REMOVE_ITEM', index: 1});